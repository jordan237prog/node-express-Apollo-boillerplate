const config = {
  // eslint-disable-next-line no-undef
  port: process.env.PORT || '4000',

  // eslint-disable-next-line no-undef
  env: process.env.NODE_ENV || 'development',

  api: {
    url: 'http://www.mocky.io/v2/5aa722ea2f0000e8048ea463',
    
    graphqlEndPoint: {
      dev: 'http://localhost:4000/graphql',
      production: 'http://localhost:4000/graphql',
    },
  },
};

export default config;
