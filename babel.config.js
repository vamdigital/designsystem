module.exports = api => {
  api.cache(true);

  return {
    presets: [
      [
        '@babel/env',
        {
          targets: {
            browsers: 'Last 2 Chrome versions, Firefox ESR',
            node: '8.9'
          }
        }
      ],
      [
        '@babel/react',
        {
          development: process.env.BABEL_ENV !== 'build'
        }
      ]
    ],
    env: {
      build: {
        ignore: [
          '**/*.spec.jsx',
          '**/*.spec.js',
          '**/*.story.jsx',
          '__snapshots__',
          '__tests__',
          '__stories__'
        ]
      }
    },
    ignore: ['node_modules']
  };
};
