/**
 * Package: maskedInput
 * User: austinrivas
 * Date: 5/26/13
 * Time: 5:31 PM
 */


// Give our package a description
Package.describe({
  summary: "Masked Input plugin for jQuery",
  version: "1.0.6",
  git: "https://github.com/Sewdn/meteor-maskedInput.git"
});

// Tell Meteor what to do with our package at bundle time
Package.on_use(function (api) {

    // The api.use method allows us to depend on other
    // packages that ship with meteor or are in our project's
    // package directory
    api.versionsFrom("METEOR@0.9.0");
    api.use("jquery", "client");


    // Add templates.html and client.js files ONLY on
    // the client
    api.add_files(["lib/jquery.maskedInput.js","lib/maskedInput.js"], "client");
});

Package.on_test(function (api) {
    api.use(['sewdn:masked-input', 'tinytest', 'test-helpers'], ['client', 'server']);
    api.add_files('tests/_tests.js', ['client', 'server']);
});