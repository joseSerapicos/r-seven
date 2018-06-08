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
        // BckHomeBundle
        home: { bundle: 'home', controller: 'default', action: 'index', dependencies: ['app'] },
        // BckSysadminBundle
        // BckAdminBundle
        adminModuleIndex: { bundle: 'admin', controller: 'module', action: 'index', dependencies: ['app'] },
        adminUserIndex: { bundle: 'admin', controller: 'user', action: 'index', dependencies: ['app'] },
        adminUserProfile: { bundle: 'admin', controller: 'user', action: 'profile', dependencies: ['app'] },
        adminUserGroupAclDetail: { bundle: 'admin', controller: 'user-group-acl', action: 'detail', dependencies: ['app'] },
        adminStoreDetail: { bundle: 'admin', controller: 'store', action: 'detail', dependencies: ['app'] },
        adminSettingsIndex: { bundle: 'admin', controller: 'settings', action: 'index', dependencies: ['app'] },
        // BckUserBundle
        userUserGroupDetail: { bundle: 'user', controller: 'user-group', action: 'detail', dependencies: ['app'] },
        // BckEntitiesBundle
        entitiesEntityDetail: { bundle: 'entities', controller: 'entity', action: 'detail', dependencies: ['app'] },
        entitiesClientIndex: { bundle: 'entities', controller: 'client', action: 'index', dependencies: ['app'] },
        entitiesSupplierIndex: { bundle: 'entities', controller: 'supplier', action: 'index', dependencies: ['app'] },
        entitiesEntityGroupDetail: { bundle: 'entities', controller: 'entity-group', action: 'detail', dependencies: ['app'] },
        // BckServicesBundle
        servicesRegularServiceDetail: { bundle: 'services', controller: 'regular-service', action: 'detail', dependencies: ['app'] },
        // BckBookingBundle
        bookingBasicBookingIndex: { bundle: 'booking', controller: 'basic-booking', action: 'index', dependencies: ['app'] },
        bookingBasicBookingDetail: { bundle: 'booking', controller: 'basic-booking', action: 'detail', dependencies: ['app'] },
        bookingRegularBookingIndex: { bundle: 'booking', controller: 'regular-booking', action: 'index', dependencies: ['app'] },
        bookingRegularBookingDetail: { bundle: 'booking', controller: 'regular-booking', action: 'detail', dependencies: ['app'] },
        // Accounting
        accountingDocumentTypesIndex: { bundle: 'accounting', controller: 'document-types', action: 'index', dependencies: ['app'] },
        accountingClientDocumentIndex: { bundle: 'accounting', controller: 'client-document', action: 'index', dependencies: ['app'] },
        accountingSupplierDocumentIndex: { bundle: 'accounting', controller: 'supplier-document', action: 'index', dependencies: ['app'] },
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