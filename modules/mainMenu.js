"use strict";
exports.mainMenu = function (urls) {
    var menu;
    return {
        initializeControls : function (controls) {
            menu = controls.menu;
            controls.banner.attr('href', urls.home);
            controls.homeLink.attr('href', urls.home);
            controls.sandboxLink.attr('href',  urls.sandbox);
            controls.usercollectionLink.attr('href',  urls.usercollection);
            controls.addLink.attr('href',  urls.add);
            controls.adminLink.attr('href',  urls.admin);
            controls.signinLink.attr('href', urls.poundsign);
            controls.signoutLink.attr('href', urls.poundsign);
        },
        setActiveMenu : function (url) {
            var child;
            menu.children('li').removeClass();
            child = menu.find('a[href="' + url + '"]');
            child.parent().addClass('active');
        }
    };
};
