Package.describe({
  summary: "Masked Input plugin for jQuery",
  version: "1.4.0_1",
  upstreamVersion: "1.4.0",
  git: "https://github.com/Sewdn/meteor-masked-input.git",
  name: "sewdn:masked-input"
});

// Tell Meteor what to do with our package at bundle time
Package.on_use(function (api) {

    // The api.use method allows us to depend on other
    // packages that ship with meteor or are in our project's
    // package directory
    api.versionsFrom("METEOR@1.0.0");
    api.use("jquery", "client");


    // Add templates.html and client.js files ONLY on
    // the client
    api.add_files(["lib/jquery.maskedInput.js","lib/maskedInput.js"], "client");
});

Package.on_test(function (api) {
    api.use(['sewdn:masked-input', 'tinytest', 'test-helpers'], ['client', 'server']);
    api.add_files('tests/_tests.js', ['client', 'server']);
});