import webpack from "webpack";
import {BuildOptions} from "./types/config";
import {buildLoaders, buildPlugins, buildResolvers, buildDevServer} from "./index";

export function buildWebpackConfig (options: BuildOptions): webpack.Configuration {
  const {paths, mode, isDev} = options;
  return {
    mode: mode,
    entry: paths.entry,
    devtool: isDev && 'inline-source-map',
    stats: {
      children: true
    },
    module: {
      rules: buildLoaders(options),
    },

    plugins: buildPlugins(options),
    resolve: buildResolvers(),
    devServer: buildDevServer(options),

    output: {
      filename: '[name].[contenthash].js',
      path: paths.build,
      clean: true
    },
  }
}