module.exports = function(api) {
  api.cache(true);
  return {
    presets: ['babel-preset-expo'],
    plugins: [
      [
        'module-resolver',
        {
          root: ['./src'],
          alias: {
            '@services': './services',
            '@views': './views',
            '@components': './components',
            '@constants': './constants',
            '@utils': './utils',
          },
        },
      ],
    ],
  };
};
