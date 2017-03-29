var port = process.env.PORT || 3000;
module.exports = {
  port: port,
  secret: "Best Secret Ever",
  massive_uri: 'postgres://qitcebls:wNPWW8n3b-7ELfdFy3CLZCxcszNybbcK@babar.elephantsql.com:5432/qitcebls',
  authConfig: {
    domain: 'beauhtml.auth0.com',
    clientID: '176dABpIOjqBMJ349MOCWAvUgbdebwe3',
    clientSecret: 'J6THpYgbPhhDiV4KXK5-XO__3H08zkWloo603fFWYmPBqmusL_1wVz1PujVBP8h5',
    callbackURL: process.env.CALLBACK_URL || "http://localhost:" + port + '/api/auth/callback'
  }

  // domain: '<your_auth0_domain>',
  // clientID: '<your_client_id>',
  // clientSecret: '<your_client_secret>',
  // callbackURL: 'http://localhost:3000/auth/callback'
  // }
}
