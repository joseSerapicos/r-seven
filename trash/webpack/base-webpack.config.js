var CommonsChunkPlugin = require("webpack/lib/optimize/CommonsChunkPlugin");

module.exports = {
  dirName: '',
  pathToPublic: '/../../',
  config: {
    entry: {},
    output: {
      path: null,
      filename: "[name].js",
      sourceMapFilename: "[file].map"
    },
    devtool: 'source-map',
    resolveLoader: {
      modulesDirectories: null
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
      new CommonsChunkPlugin({
        name: "common"
        //chunks: [] // If not defined it calculates the chucks automatically (one chunck per entry)
      })
    ],
    watch: true // or webpack --watch
  },

  /**
   * Initialize configuration
   * @param dirName ("__dirname" variable that return the full path)
   * @param controller (controller of the feature)
   * @param action (action of the feature)
     */
  init: function(dirName, controller, action) {
    var featurePath = controller;

    this.dirName = dirName;
    if (action) {
      this.pathToPublic += '../';
      featurePath += ('/' + action);
    }

    this.config.entry['main'] = (this.dirName + "/main.ts");
    this.config.output.path = (this.dirName + this.pathToPublic + 'js-generated/' + featurePath);
    this.config.resolveLoader.modulesDirectories = [this.dirName + this.pathToPublic + '../../../../node_modules'];
  },

  /**
   * Add entry (module)
   * @param Bundle (in format CamelCase with the "Bundle" prefix)
   * @param controller (in format my-module)
   * @param action (in format my-action)
   */
  addEntry: function(Bundle, controller, action) {
    var name = (action ? action : controller),
        featurePath = controller;

    if (action) {
      this.featurePath += ('/' + action);
    }

    this.config.entry[name] = (
        this.dirName + this.pathToPublic + '../../../'
        + Bundle + '/Resources/public/' + featurePath + '/ts/main.ts'
    );
  }
};