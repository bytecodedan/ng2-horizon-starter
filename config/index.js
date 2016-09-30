module.exports = {
  horizon: {
    db: 'horizon_app',
    token_secret: 'myAwesomeSecret',
    servers: [
      {
        host: '127.0.0.1',
        port: 28015
      }
    ]
  },
  server: {
    host: '127.0.0.1',
    port: '8181'
  }
};
