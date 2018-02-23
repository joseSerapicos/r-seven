// Plugins
var gulp = require('gulp-help')(require('gulp')), // gulp with help
    argv = require('yargs').argv,
    copy = require('gulp-copy'),
    exec = require('gulp-exec'),
    rename = require('gulp-rename'),
    watch = require('gulp-watch'),
    env = 'DEV'; // Environment ['DEV', 'PROD']


// Tasks
// Build ng app
gulp.task('buildNgApp', 'Build angular app/module in DEV mode.', function() {
        // Check app
        var app = argv['app'];
        var noBuild = argv['noBuild'] || false; // false by default
        if (!app) {
            console.log('"app" argument is mandatory!');
            return null;
        }

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

        // Set variables
        var AppsModule = require(__dirname + '/angular_cli_conf/apps.module'),
            appsModule = new AppsModule(),
            apps = appsModule.getApps(),
            command = ((env == 'DEV') ?
                    "./node_modules/.bin/ng build --dev" :
                    "./node_modules/.bin/ng build --prod --output-hashing=none"
            );

        switch (app) {
            case 'all':
                var appsArr = Object.keys(apps),
                    totalApps = appsArr.length,
                    // "range" argument is necessary in order to allow the user to split the apps to avoid
                    // the "out of memory" issue
                    appsRange = (argv['range'] ? argv['range'].split("-") : [1, 10]),
                    appsStart = (((appsRange[0] > 0) &&  (appsRange[0] <= totalApps))
                            ? appsRange[0]
                            : null
                    ),
                    appsEnd = ((appsRange[1] < totalApps)
                            ? appsRange[1]
                            : totalApps
                    ),
                    runTask = (function(appIndex) {
                        var appName = appsArr[appIndex];

                        // Print feedback
                        console.log(
                            '\n[App (' + appsStart + '/' + totalApps + '): '
                            + appName + ']\n'
                        );

                        // Debug command
                        console.log("\n[Exec: " + command + "]\n");

                        var ngConf = appsModule.getConf(appName),
                            taskTarget = null;

                        // Check conf
                        if (ngConf && !noBuild) {
                            taskTarget = gulp.src('') // No source is necessary
                                .pipe(exec(command, execOptions))
                                .pipe(exec.reporter(execReportOptions));
                        }

                        if (appsStart < appsEnd) {
                            appsStart++;
                            taskTarget.on('end', function() { return runTask(appsStart - 1); });
                        }

                        return taskTarget;
                    });

                // Start execution
                if (appsStart) {
                    return runTask(appsStart - 1);
                }

                return null;
            default:
                var ngConf = appsModule.getConf(app),
                    taskTarget = null,
                    appPaths = appsModule.getAppPaths(app);

                // Watch mode (only allowed when app != 'all')
                if (argv['watch']) {
                    command += ' --watch';
                }

                // Debug command
                console.log("\n[Exec: " + command + "]\n");

                // Check conf
                if (ngConf) {
                    // Set index page
                    gulp.src(__dirname + '/angular_cli_conf/index.html')
                        .pipe(copy(__dirname + '/' + appPaths['rootDir'] + 'src', {prefix: 1}));

                    // Execute command
                    if (!noBuild) {
                        taskTarget = gulp.src('') // No source is necessary
                            .pipe(exec(command, execOptions))
                            .pipe(exec.reporter(execReportOptions));
                    }
                }

                return taskTarget;
        }
    },
    {
        options: {
            'app=[string]': 'Specify app by key "bundleControllerAction" or "all" for all apps.',
            'range=[number-number]': 'Set range for "app=all" (to determine the index range of apps to execute to avoid the "out of memory" issue).',
            'noBuild=[boolean]': 'Do not build app, only generates the config file.',
            'watch=[boolean]': 'Set watch mode (does not show output, so consider to use another alternative).'
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
            'app=[string]': 'Specify app by key "bundleControllerAction" or "all" for all apps.',
            'range=[number-number]': 'Set range for "src=all" (to determine the index range of apps to execute to avoid the "out of memory" issue).'
        }
    }
);


// Build template
gulp.task('buildTemplate', 'Build/generate template for angular component.', function() {
        // Check parameters
        var defaultParameters = require(__dirname + '/angular_cli_conf/gulp_parameters.default.json'),
            app = argv['app'],
            component = (argv['component'] || defaultParameters['component']),
            phpSessId = (argv['phpsessid'] || defaultParameters['phpsessid']);
        if (!app || !component || !phpSessId) {
            console.log('"app", "component" and "phpsessid" arguments are mandatory!');
            return null;
        }

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

        // Set variables
        var AppsModule = require(__dirname + '/angular_cli_conf/apps.module'),
            appsModule = new AppsModule(),
            appPaths = appsModule.getAppPaths(app),
            templates = require(appPaths['rootDir'] + "templates.json"),
            commandOptions = "-H 'Accept-Encoding: gzip, deflate, sdch' -H 'Accept-Language: en-US,en;q=0.8,pt;q=0.6,es;q=0.4' -H 'Upgrade-Insecure-Requests: 1' -H 'User-Agent: Mozilla/5.0 (X11; Linux x86_64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/54.0.2840.100 Safari/537.36' -H 'Accept: text/html,application/xhtml+xml,application/xml;q=0.9,image/webp,*/*;q=0.8' -H 'Cache-Control: max-age=0' -H 'Cookie: PHPSESSID=" + phpSessId + "' -H 'Connection: keep-alive' --compressed";

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
                            '\n[Component (' + (currentComponentIndex + 1) + '/' + totalComponents + '): '
                            + componentName + ']\n'
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

                return null;
            default:
                var viewsPath = appPaths['rootDir'] + '../../../../views/**';

                // Watch mode (only allowed when component != 'all')
                if (argv['watch']) {
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
            'watch=[boolean]': 'Set watch mode (only used when a specific component is defined).'
        }
    }
);