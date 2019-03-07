export default {
  oidc: {
    clientId: '0oabx2bjh8wj8Oq96356',
    issuer: 'https://dev-720285.okta.com/oauth2/default',
    redirectUri: 'http://localhost:8080/implicit/callback',
    scope: 'openid profile email'
  },
  resourceServer: {
    messagesUrl: 'http://localhost:8000/api/messages'
  }
}
