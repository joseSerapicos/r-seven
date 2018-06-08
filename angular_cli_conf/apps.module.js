// Plugins
var webpack = require("webpack"),
    fs = require('fs'),
    apps = require(__dirname + '/apps.json'),
    ngConf = require(__dirname + '/.angular-cli.default.json'),
    tsConf = require(__dirname + '/tsconfig.default.json');


// Configuration module
module.exports = function() {
    var self = this;

    /**
     * Get and set ng configuration file dynamically
     * @param app (key in "apps")
     */
    self.getConf = function(app) {
        // Set paths
        var appPaths = self.getAppPaths(app);

        // Set ng conf file. Only one entry is used (0)
        ngConf['apps'][0]['root'] = (appPaths['rootDir'] + "src");
        ngConf['apps'][0]['outDir'] = (appPaths['rootDir'] + "dist");
        ngConf['apps'][0]['index'] = ("index.html");
        ngConf['apps'][0]['environmentSource'] = (__dirname + "/environments/environment.ts");
        ngConf['apps'][0]['environments']['dev'] = (__dirname + "/environments/environment.ts");
        ngConf['apps'][0]['environments']['prod'] = (__dirname + "/environments/environment.prod.ts");
        ngConf['apps'][0]['polyfills'] = (__dirname + "/../polyfills.ts");
        ngConf['apps'][0]['tsconfig'] = ("../tsconfig.json");
        ngConf['lint'][0]['project'] = ("../tsconfig.json");

        // Check if app is correctly configured.
        var ngInFile = (ngConf['apps'][0]['root'] + '/' + ngConf['apps'][0]['main']);
        if (!fs.existsSync(ngInFile)) {
            console.log("\n[Warning] Entry not found for app '" + app + "'.\n");
            return null;
        }

        fs.writeFile(__dirname + "/../.angular-cli.json", JSON.stringify(ngConf), function(err) {
            if(err) { console.log(err); return null; }
        });

        // Set ts conf file.
        tsConf['extends'] = (appPaths['projectRootDirFromApp'] + "tsconfig.json");
        tsConf['include'] = [
            "./src/**/*",
            (appPaths['projectRootDirFromApp'] + "angular_cli_conf/environments/**/*"),
            (appPaths['projectRootDirFromApp'] + "polyfills.ts")
        ];

        fs.writeFile(appPaths['rootDir'] + "tsconfig.json", JSON.stringify(tsConf), function(err) {
            if(err) { console.log('[Error] ' + err); return null; }
        });

        return ngConf;
    };

    /**
     * Get apps
     * @returns {any|{}}
     */
    self.getApps = function() {
        return (apps || {});
    };

    /**
     * Get app bundle prefix
     * @param app
     * @returns {*}
     */
    self.getAppBundlePrefix = function(app) {
        if ((app in apps) && ('bundlePrefix' in apps[app])) {
            return apps[app]['bundlePrefix'];
        }

        return null;
    };

    /**
     * Get app paths
     * @param app
     * @returns {*}
     */
    self.getAppPaths = function(app) {
        // Check app
        if (!app in apps) {
            console.log('Unknown app: ' + app);
            return {};
        }
        appObj = apps[app];

        // Set paths
        return {
            rootDir: (
                './src/'
                + (appObj['bundlePrefix'] ? (self.ucFirst(appObj['bundlePrefix']) + '/') : '')
                + self.ucFirst(appObj['bundle'])
                + 'Bundle/Resources/public/'
                + (appObj['controller'] ? (appObj['controller'] + '/') : '')
                + (appObj['action'] ? (appObj['action'] + '/') : '')
                + 'ts/'
            ),
            projectRootDirFromApp: ( // Project Root Dir From App Root Dir
                '../../../../../'
                + (appObj['bundlePrefix'] ? '../' : '')
                + (appObj['controller'] ? '../' : '')
                + (appObj['action'] ? '../' : '')
            )
        };
    };

    /**
     * Upper case first character
     * @param string
     * @returns {string}
     */
    self.ucFirst = function(string) {
        return (string.charAt(0).toUpperCase() + string.slice(1));
    };
};