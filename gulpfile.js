// Plugins
var gulp = require('gulp-help')(require('gulp')), // gulp with help
    fs = require('fs'),
    argv = require('yargs').argv,
    copy = require('gulp-copy'),
    exec = require('gulp-exec'),
    rename = require('gulp-rename'),
    watch = require('gulp-watch'),
    sass = require('gulp-sass'),
    runSequence = require('run-sequence'),
    env = 'DEV'; // Environment ['DEV', 'PROD']


// Global vars to be used by "buildAll" tasks to share info
var process = null,
    currentAppIndex = null,
    currentAppName = null,
    noDebug = null;


// Build ng app
gulp.task('buildNgApp', 'Build angular app/module in DEV mode.', function() {
        // Check parameters
        var app = (argv['app'] || currentAppName), // Use currentApp if "buildAll" was called
            noBuild = (argv['noBuild'] || false); // false by default

        if (!app) {
            console.log('[Error] "app" argument is mandatory!');
            return null;
        }

        // Set variables
        var AppsModule = require(__dirname + '/angular_cli_conf/apps.module'),
            appsModule = new AppsModule(),
            apps = appsModule.getApps(),
            command = ((env == 'DEV') ?
                    "./node_modules/.bin/ng build --dev" :
                    "./node_modules/.bin/ng build --prod --output-hashing=none"
            ),
            ngConf = appsModule.getConf(app),
            appPaths = appsModule.getAppPaths(app);

        if (ngConf) {
            // Set index page
            gulp.src(__dirname + '/angular_cli_conf/index.html')
                .pipe(copy(__dirname + '/' + appPaths['rootDir'] + 'src', {prefix: 1}));

            // Watch mode
            if (argv['watch']) {
                // Watch mode as no output when run on gulp, so print the command to be run manually
                command += ' --watch';

                // Debug command
                console.log("\n[Warning] To run the task in watch mode please execute the command:\n" + command + "\n");
                return true;
            }

            // Execute command
            if (!noBuild) {
                // Debug command
                console.log("\n[Exec] " + command + "\n");

                // Options for exec
                var execOptions = {
                        continueOnError: false, // default = false, true means don't emit error event
                        pipeStdout: false, // default = false, true means stdout is written to file.contents
                        customTemplatingThing: "test" // content passed to gutil.template()
                    },
                    execReportOptions = {
                        err: true, // default = true, false means don't write err
                        stderr: true, // default = true, false means don't write stderr
                        stdout: true // default = true, false means don't write stdout
                    };

                return gulp.src('') // No source is necessary
                    .pipe(exec(command, execOptions))
                    .pipe(exec.reporter(execReportOptions));
            }
        }

        // Return a faking task to avoid gulp exit (I don't now why, but work fine)!
        return gulp.src('').pipe(exec('pwd'));
    },
    {
        options: {
            'app=[string]': 'Specify app by key "bundleControllerAction".',
            '[noBuild]': 'Do not build app, only generates the config file.',
            '[watch]': 'Set watch mode.'
        }
    }
);

// Deploy ng app
gulp.task('deployNgApp', 'Build angular app/module in PROD mode.', function() {
        env = 'PROD';
        gulp.start('ngBuild');
    },
    {
        options: {
            'app=[string]': 'Specify app by key "bundleControllerAction".'
        }
    }
);


// Build template
gulp.task('buildTemplate', 'Build/generate template for angular component.', function() {
        // Check parameters
        var defaultParameters = require(__dirname + '/angular_cli_conf/gulp_parameters.default.json'),
            app = (argv['app'] || currentAppName), // Use currentApp if "buildAll" was called
            component = (argv['component'] || defaultParameters['component']),
            phpSessId = (argv['phpsessid'] || defaultParameters['phpsessid']);

        if (!app || !component || !phpSessId) {
            console.log('[Error] "app", "component" and "phpsessid" arguments are mandatory!');
            return null;
        }

        // Set variables
        var AppsModule = require(__dirname + '/angular_cli_conf/apps.module'),
            appsModule = new AppsModule(),
            appPaths = appsModule.getAppPaths(app);

        // Check if app is correctly configured.
        var ngInFile = (appPaths['rootDir'] + "templates.json");
        if (!fs.existsSync(ngInFile)) {
            console.log("\n[Warning] Entry not found for app '" + app + "'.\n");

            // Return a faking task to avoid gulp exit (I don't now why, but work fine)!
            return gulp.src('').pipe(exec('pwd'));
        }

        var templates = require(ngInFile),
            commandOptions = "-H 'Accept-Encoding: gzip, deflate, sdch' -H 'Accept-Language: en-US,en;q=0.8,pt;q=0.6,es;q=0.4' -H 'Upgrade-Insecure-Requests: 1' -H 'User-Agent: Mozilla/5.0 (X11; Linux x86_64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/54.0.2840.100 Safari/537.36' -H 'Accept: text/html,application/xhtml+xml,application/xml;q=0.9,image/webp,*/*;q=0.8' -H 'Cache-Control: max-age=0' -H 'Cookie: PHPSESSID=" + phpSessId + "' -H 'Connection: keep-alive' --compressed";

        // Options for exec
        var execOptions = {
                continueOnError: false, // default = false, true means don't emit error event
                pipeStdout: true, // default = false, true means stdout is written to file.contents
                customTemplatingThing: "test" // content passed to gutil.template()
            },
            execReportOptions = {
                err: false, // default = true, false means don't write err
                stderr: true, // default = true, false means don't write stderr
                stdout: false // default = true, false means don't write stdout
            };

        // Generate template
        switch (component) {
            case 'all':
                var componentsArr = Object.keys(templates),
                    totalComponents = componentsArr.length,
                    currentComponentIndex = 0,
                    runTask = (function(currentComponentIndex) {
                        var componentName = componentsArr[currentComponentIndex];

                        // Print feedback
                        console.log(
                            '\n[Component ' + (currentComponentIndex + 1) + '/' + totalComponents + '] '
                            + componentName + '...\n'
                        );

                        var taskTarget = gulp.src('') // No source is necessary
                            .pipe(exec("curl '" + templates[componentName] + "' " + commandOptions, execOptions))
                            .pipe(exec.reporter(execReportOptions))
                            .pipe(rename(componentName + ".component.html")) // Name according with angular patter
                            .pipe(gulp.dest(appPaths['rootDir'] + "templates")); // Templates directory

                        currentComponentIndex++; // Next component
                        if (currentComponentIndex < totalComponents) {
                            taskTarget.on('end', function() { return runTask(currentComponentIndex); });
                        }

                        return taskTarget;
                    });

                // Start execution
                if (totalComponents > 0) {
                    return runTask(currentComponentIndex);
                }

                // Return a faking task to avoid gulp exit (I don't now why, but work fine)!
                return gulp.src('').pipe(exec('pwd'));
            default:
                // Watch mode (only allowed when component != 'all')
                if (argv['watch']) {
                    var viewsPath = appPaths['rootDir'] + '../../../../views/**';

                    return watch(viewsPath, function () {
                        gulp.src('') // No source is necessary
                            .pipe(exec("curl '" + templates[component] + "' " + commandOptions, execOptions))
                            .pipe(exec.reporter(execReportOptions))
                            .pipe(rename(component + ".component.html")) // Name according with angular patter
                            .pipe(gulp.dest(appPaths['rootDir'] + "templates")); // Templates directory
                    });
                }

                return gulp.src('') // No source is necessary
                    .pipe(exec("curl '" + templates[component] + "' " + commandOptions, execOptions))
                    .pipe(exec.reporter(execReportOptions))
                    .pipe(rename(component + ".component.html")) // Name according with angular patter
                    .pipe(gulp.dest(appPaths['rootDir'] + "templates")); // Templates directory
        }
    },
    {
        options: {
            'app=[string]': 'Specify app by key "bundleControllerAction".',
            'component=[string]': 'Specify component name or "all" for all components.',
            'phpsessid=[string]': 'Specify the php session id of login.',
            '[watch]': 'Set watch mode (only used when a specific component is provided).'
        }
    }
);


// Build sass
gulp.task('buildSass', 'Build/generate css file from sass files.', function() {
        // Check parameters
        var app = (argv['app'] || currentAppName); // Use currentApp if "buildAll" was called

        if (!app) {
            console.log('[Error] "app" not defined!');
            return null;
        }

        // Set variables
        var AppsModule = require(__dirname + '/angular_cli_conf/apps.module'),
            appsModule = new AppsModule(),
            appPaths = appsModule.getAppPaths(app),
            sassSrcDir = (appPaths['rootDir'] + "../scss/src/"),
            sassInFile = (sassSrcDir + "main.scss"),
            sassOutFile = (sassSrcDir + "../dist/");

        // Watch mode (only allowed when component != 'all')
        if (argv['watch']) {
            return watch(sassSrcDir + '**', function () {
                gulp.src(sassInFile)
                    .pipe(sass({outputStyle: 'compressed'}).on('error', sass.logError))
                    .pipe(rename("styles.css"))
                    .pipe(gulp.dest(sassOutFile));
            });
        }

        return gulp.src(sassInFile)
            .pipe(sass({outputStyle: 'compressed'}).on('error', sass.logError))
            .pipe(rename("styles.css"))
            .pipe(gulp.dest(sassOutFile));
    },
    {
        options: {
            'app=[string]': 'Specify app by key "bundleControllerAction".',
            '[watch]': 'Set watch mode.'
        }
    }
);

// Build sass
// NOTE: We use a counter saved in a tmp file, to knows what is the current app to build, so even if the
// "out of memory" issue occurs and the process breaks, we are able to continue the process.
gulp.task('buildAll', 'Build all app/modules of determined process.', function() {
        // Check if process is already defined (if "buildAll" is on recursive call)
        if (!process) {
            process = argv['process']; // Get process from arguments
            if (process) {
                // Set first letter uppercase
                process = ('build' + (process.charAt(0).toUpperCase() + process.slice(1)));
            } else {
                console.log('[Error] "process" not defined!');
                return null;
            }
        }

        // Set variables
        var AppsModule = require(__dirname + '/angular_cli_conf/apps.module'),
            appsModule = new AppsModule(),
            apps = appsModule.getApps(),
            appsArr = Object.keys(apps),
            totalApps = appsArr.length;

        // Disable debug
        noDebug = false;

        runSequence('getTmpAppIndexFile', function() {
            // Set global var
            if (!(currentAppName = appsArr[currentAppIndex])) {
                return null;
            }

            // Print feedback
            console.log('\n[App ' + (currentAppIndex + 1) + '/' + totalApps + '] ' + currentAppName + '...\n');

            runSequence(process, function() {
                ++currentAppIndex;
                runSequence('setTmpAppIndexFile', 'buildAll', function() {});
            });
        });
    },
    {
        options: {
            'process=[<ngApp, template, sass>]': 'Specify the process to build.'
        }
    }
);


// Set tmp app index to file to controls the build of all app/module
gulp.task('setTmpAppIndexFile', 'Set tmp app index to file to controls the build of all app/modules.', function() {
        var tmpFileName = (__dirname + '/angular_cli_conf/tmp_app_index.txt'),
            index = ((argv['index'] === undefined) ? currentAppIndex : argv['index']);

        return fs.writeFile(tmpFileName, index);
    },
    {
        options: {
            'index=[number]': 'Specify the app index.'
        }
    }
);

// Get tmp app index from file to controls the build of all app/module
gulp.task('getTmpAppIndexFile', 'Get tmp app index from file to controls the build of all app/modules.', function() {
        var tmpFileName = (__dirname + '/angular_cli_conf/tmp_app_index.txt'),
            hasDebug = ((noDebug === null) ? true : noDebug); // Use noDebug if "buildAll" was called

        // Get only from file if global var currentAppIndex is not defined yet
        currentAppIndex = parseInt((currentAppIndex === null) ? fs.readFileSync(tmpFileName).toString() : currentAppIndex);

        if (hasDebug) {
            console.log("[Debug] Current app index: " + currentAppIndex);
        }

        return true;
    }
);