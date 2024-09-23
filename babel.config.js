module.exports = function (api) {
  api.cache(true);
  return {
    presets: ['babel-preset-expo'],
    plugins: [
      '@babel/plugin-transform-async-generator-functions',
      '@babel/plugin-transform-object-rest-spread'
    ]
  };
};
