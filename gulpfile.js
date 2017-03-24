// Plugins
var gulp = require('gulp-help')(require('gulp')), // gulp with help
    argv = require('yargs').argv,
    webpack = require('gulp-webpack');

// Configurations
var webpackConf = require('./gulp_tasks/webpack.conf');

// Tasks
gulp.task('webpack', 'Transpile ts (typescript) files in js.', function() {
        var source = argv['src'];

        if (!source) {
            console.log('"src" argument is mandatory!');
            return null;
        }

        switch (source) {
            case 'all':
                var sources = Object.keys((new webpackConf().getSources()) || {}),
                    totalSources = sources.length,
                    // "range" argument is necessary in order to allow the user to split the sources to avoid
                    // the "out of memory" issue
                    sourcesRange = (argv['range'] ? argv['range'].split("-") : [1, 10]),
                    sourcesStart = (((sourcesRange[0] > 0) &&  (sourcesRange[0] <= totalSources))
                        ? sourcesRange[0]
                        : null
                    ),
                    sourcesEnd = ((sourcesRange[1] < totalSources)
                            ? sourcesRange[1]
                            : totalSources
                    ),
                    runSource = (function(sourceIndex) {
                        console.log(
                            '\n[Executing (' + sourcesStart + '/' + totalSources + '): '
                            + sources[sourceIndex] + ']\n'
                        );

                        var config = new webpackConf().getConfig(sources[sourceIndex]),
                            taskTarget = gulp.src(config.entry['main']) // Fake entry, is ignored and used the entry in config
                                .pipe(webpack(config))
                                .pipe(gulp.dest(config.output.path));

                        if (sourcesStart < sourcesEnd) {
                            sourcesStart++;
                            taskTarget.on('end', function() { return runSource(sourcesStart - 1); });
                        }

                        return taskTarget;
                    });

                // Start execution
                if (sourcesStart) {
                    return runSource(sourcesStart - 1);
                }

                return null;
            default:
                var config = new webpackConf().getConfig(source);
                // Watch mode
                if (argv['watch']) {
                    config.watch = true;
                }
                return gulp.src(config.entry['main']) // Fake entry, is ignored and used the entry in config
                    .pipe(webpack(config))
                    .pipe(gulp.dest(config.output.path));
        }
    },
    {
        options: {
            'src=[string]': 'Specify source by key "bundleControllerAction" or "all" for all resources.',
            'watch=[boolean]': 'Put webpack in watch mode.',
            'range=[number-number]': 'Set range for "src=all" (to determine the index range of sources to execute to avoid the "out of memory" issue).'
        }
    }
);