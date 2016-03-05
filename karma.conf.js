// Karma configuration
// Generated on Fri Jan 23 2015 17:22:58 GMT-0500 (EST)
var webpackConfig = require('./webpack.config.js');
webpackConfig.devtool = 'inline-source-map';
delete webpackConfig.entry.TimerApp;

module.exports = function(config) {
    config.set({

        // base path that will be used to resolve all patterns (eg. files, exclude)
        basePath: '',

        // List of test frameworks you want to use. Typically, you will set this to ['jasmine'], ['mocha'] or ['qunit']...
        // Please note just about all frameworks in Karma require an additional plugin/framework library to be installed (via NPM).
        // available frameworks: https://npmjs.org/browse/keyword/karma-adapter
        frameworks: ['mocha','chai'],

        // list of files / patterns to load in the browser
        files: [
            'build/vendors.js',
            'node_modules/angular-mocks/angular-mocks.js',
            'build/TimerApp.js',
            'bower_components/chai/chai.js',
            'src/*.spec.js',
            'src/**/*.spec.js'
        ],

        // list of files to exclude
        exclude: [
        ],
        // enable / disable watching file and executing tests whenever any file changes
        autoWatch: true,

        // start these browsers
        // available browser launchers: https://npmjs.org/browse/keyword/karma-launcher
        browsers: ['Chrome' /*,'PhantomJS'*/],

        // Continuous Integration mode
        // if true, Karma captures browsers, runs the tests and exits
        singleRun: false,

        // preprocess matching files before serving them to the browser
        // available preprocessors: https://npmjs.org/browse/keyword/karma-preprocessor
        //preprocessors: {
        //    'tests/*.spec.js':['webpack','sourcemap'],
        //    'tests/**/*.spec.js':['webpack','sourcemap']
        //},

        // karma watches the test entry points
        // (you don't need to specify the entry option)
        // webpack watches dependencies
        // webpack configuration
        webpack: webpackConfig,

        webpackMiddleware: {
            // webpack-dev-middleware configuration
            // i. e.
            noInfo: true
        },
        //: List of plugins to load. A plugin can be a string (in which case it will be required by Karma)
        // or an inlined plugin - Object. By default, Karma loads all sibling NPM modules which have a name
        // starting with karma-*.
        //Default: ['karma-*']
        //plugins: [
        //    'karma-webpack
        //    ,'karma-sourcemap-loader"
        //    ,'karma-mocha'
        //    ,'karma-chrome-launcher'
        //    ,'karma-phantomjs-launcher'
        //    ,'karma-chai'
        //    ,'karma-html-reporter'
        //
        //],

        // test results reporter to use
        // possible values: 'dots', 'progress'
        // available reporters: https://npmjs.org/browse/keyword/karma-reporter
        reporters: ['mocha'],
        htmlReporter: {
            outputDir: 'karma_html', // where to put the reports
            templatePath: null, // set if you moved jasmine_template.html
            focusOnFailures: true, // reports show failures on start
            namedFiles: false, // name files instead of creating sub-directories
            pageTitle: null, // page title for reports; browser info by default
            urlFriendlyName: false, // simply replaces spaces with _ for files/dirs
            reportName: 'tests-report', // report summary filename; browser info by default
            // experimental
            preserveDescribeNesting: false, // folded suites stay folded
            foldAll: false // reports start folded (only with preserveDescribeNesting)
        },
        // web server port
        port: 9876,

        // enable / disable colors in the output (reporters and logs)
        colors: true,

        // level of logging
        // possible values: config.LOG_DISABLE || config.LOG_ERROR || config.LOG_WARN || config.LOG_INFO || config.LOG_DEBUG
        logLevel: config.LOG_INFO,



        // Helps to address an issue on TravisCI where activity can time out
        browserNoActivityTimeout: 30000,
        browserDisconnectTimeout: 2000,
        //Enable or disable colors in the output (reporters and logs).
        colors:true

    });
};
