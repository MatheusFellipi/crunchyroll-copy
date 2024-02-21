module.exports = function (api) {
  api.cache(true);
  return {
    presets: ['babel-preset-expo'],
    plugins: [
      [
        "module-resolver",
        {
          alias: {
            "@assets": "./assets",
            "@services": "./src/services",
            "@navigation": "./src/navigation",
            "@components": "./src/components",
            "@utils": "./src/utils",
            "@constant": "./src/constant",
            "@context": "./src/context",
            "@hook": "./src/hook",
            "@shared": "./src/shared",
            "@custom-types": "./src/types"
          }
        }
      ],
    ]
  };
};
