if (Meteor.isClient) {
    Proxino.key = "1WSzwlGhsocB-hDA0-iHUg";
    Proxino.track_errors();

    Template.maskDateInput.rendered = function () {
        $(".mask_date").mask("9999/99/99",{completed:function(){alert("You typed the following: "+this.val());}});
    };

    Template.maskPhoneInput.rendered = function () {
        $(".mask_phone").mask("(999) 999-9999",{completed:function(){alert("You typed the following: "+this.val());}});
    };

    Template.maskSerialNumInput.rendered = function () {
        $(".mask_serialNumber").mask("9999-9999-99",{completed:function(){alert("You typed the following: "+this.val());}});
    };

    Template.maskProductNumInput.rendered = function () {
        $(".mask_productNumber").mask("aaa-9999-a",{completed:function(){alert("You typed the following: "+this.val());}});
    };
}

if (Meteor.isServer) {
  Meteor.startup(function () {
    // code to run on server at startup
  });
}
