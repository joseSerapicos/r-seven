var webpack = require("webpack");

module.exports = function() {
    var self = this;

    /**
     * Sources.
     * Object with sources.
     * The key used in sources object represents the identifier of specific source (use camelCase),
     * this identifier is used to determine the source dependencies (chunks).
     * Source object attributes: {
     *     bundle: 'bundle' (camelCase)
     *     controller: 'controller' (camelCase)
     *     action: 'action' (camelCase)
     *     dependencies: ['base'] (array of dependencies to merge with source)
     * }
     */
    self.sources = {
        // AppBundle
        app: { bundle: 'app', controller: 'app', action: null, dependencies: null },
        dataBox: { bundle: 'app', controller: 'data-box', action: null, dependencies: ['app'] },
        treeView: { bundle: 'app', controller: 'tree-view', action: null, dependencies: ['app'] },
        calendar: { bundle: 'app', controller: 'calendar', action: null, dependencies: ['app'] },
        note: { bundle: 'app', controller: 'note', action: null, dependencies: ['app'] },
        file: { bundle: 'app', controller: 'file', action: null, dependencies: ['app'] },
        image: { bundle: 'app', controller: 'image', action: null, dependencies: ['app'] },
        video: { bundle: 'app', controller: 'video', action: null, dependencies: ['app'] },
        // HomeBundle
        home: { bundle: 'home', controller: 'default', action: 'index', dependencies: ['app'] },
        // SysadminBundle
        // AdminBundle
        adminModuleIndex: { bundle: 'admin', controller: 'module', action: 'index', dependencies: ['app'] },
        adminUserIndex: { bundle: 'admin', controller: 'user', action: 'index', dependencies: ['app'] },
        adminUserProfile: { bundle: 'admin', controller: 'user', action: 'profile', dependencies: ['app'] },
        adminUserGroupAclDetail: { bundle: 'admin', controller: 'user-group-acl', action: 'detail', dependencies: ['app'] },
        adminStoreDetail: { bundle: 'admin', controller: 'store', action: 'detail', dependencies: ['app'] },
        adminSettingsIndex: { bundle: 'admin', controller: 'settings', action: 'index', dependencies: ['app'] },
        // UserBundle
        userUserGroupDetail: { bundle: 'user', controller: 'user-group', action: 'detail', dependencies: ['app'] },
        // EntitiesBundle
        entitiesEntityDetail: { bundle: 'entities', controller: 'entity', action: 'detail', dependencies: ['app'] },
        entitiesClientIndex: { bundle: 'entities', controller: 'client', action: 'index', dependencies: ['app'] },
        entitiesSupplierIndex: { bundle: 'entities', controller: 'supplier', action: 'index', dependencies: ['app'] },
        entitiesEntityGroupDetail: { bundle: 'entities', controller: 'entity-group', action: 'detail', dependencies: ['app'] },
        // ServicesBundle
        servicesServiceDetail: { bundle: 'services', controller: 'service', action: 'detail', dependencies: ['app'] },
        // BookingBundle
        bookingTravelBookingIndex: { bundle: 'booking', controller: 'base-booking', action: 'index', dependencies: ['app'] },
        bookingTravelBookingDetail: { bundle: 'booking', controller: 'base-booking', action: 'detail', dependencies: ['app'] },
        bookingServiceBookingIndex: { bundle: 'booking', controller: 'base-booking', action: 'index', dependencies: ['app'] },
        bookingServiceBookingDetail: { bundle: 'booking', controller: 'base-booking', action: 'detail', dependencies: ['app'] }
    };

    /**
     * Configuration to use in webpack.
     */
    self.config = {
        entry: {},
        output: {
            path: null,
            filename: "[name].js",
            sourceMapFilename: "[file].map"
        },
        devtool: 'source-map',
        resolveLoader: {
            modulesDirectories: [__dirname + '/../node_modules']
        },
        module: {
            loaders: [
                {
                    test: /\.ts$/,
                    loader: 'ts-loader'
                }
            ]
        },
        resolve: {
            extensions: ['', '.webpack.js', '.web.js', '.ts', '.js']
        },
        plugins: [
            new webpack.optimize.CommonsChunkPlugin({
                name: "common"
                //chunks: [] // If not defined it calculates the chucks automatically (one chunk per entry)
            })
        ],
        watch: false
    };

    /**
     * Get configuration
     * @param source (specify source by key "bundleControllerAction")
     */
    self.getConfig = function(source) {
        // Set source
        source = self.sources[source];
        // Add entry
        self.addEntry('main', source);
        // Set output path
        self.config.output.path = (
            __dirname
            + '/../src/'
            + self.ucfirst(source['bundle'])
            + 'Bundle/Resources/public/'
            + (source['controller'] ? (source['controller'] + '/') : '')
            + (source['action'] ? (source['action'] + '/') : '')
            + 'webpack_generated/'
        );

        return self.config;
    };

    /**
     * Get sources
     */
    self.getSources = function() {
        return self.sources;
    };

    /**
     * Upper case first character
     * @param string
     * @returns {string}
     */
    self.ucfirst = function(string) {
        return (string.charAt(0).toUpperCase() + string.slice(1));
    };

    /**
     * Add entry (recursive function)
     * @param key
     * @param source
     */
    self.addEntry = function(key, source) {
        self.config.entry[key] = (
            __dirname
            + '/../src/'
            + self.ucfirst(source['bundle'])
            + 'Bundle/Resources/public/'
            + (source['controller'] ? (source['controller'] + '/') : '')
            + (source['action'] ? (source['action'] + '/') : '')
            + 'ts/main.ts'
        );

        // Dependencies
        if (source['dependencies'] && (source['dependencies'].length > 0)) {
            for (var i = 0; i < source['dependencies'].length; i++) {
                self.addEntry(source['dependencies'][i], self.sources[source['dependencies'][i]]);
            }
        }
    };
};