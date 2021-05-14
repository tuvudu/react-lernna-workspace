var path = require("path");

const { override, babelInclude, addWebpackAlias } = require("customize-cra");

module.exports = function (config, env) {
  return Object.assign(
    config,
    override([
      addWebpackAlias({
        "~": path.resolve(__dirname, "src"),
      }),
      babelInclude([path.resolve("src"), path.resolve("../../packages")]),
    ])(config, env)
  );
};
