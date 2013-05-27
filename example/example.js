if (Meteor.isClient) {
    Proxino.key = "1WSzwlGhsocB-hDA0-iHUg";
    Proxino.track_errors();
}

if (Meteor.isServer) {
  Meteor.startup(function () {
    // code to run on server at startup
  });
}
