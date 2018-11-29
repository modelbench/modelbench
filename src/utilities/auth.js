import auth0 from "auth0-js";

export default class Auth {
  auth0 = new auth0.WebAuth({
    domain: "modelbench.auth0.com",
    clientID: "JmMQ0Q1TBw6Ry2D19zp13Jty2eW48C1Z",
    redirectUri: "http://localhost:3000/callback",
    responseType: "token id_token",
    scope: "openid"
  });

  login() {
    this.auth0.authorize();
  }
}
