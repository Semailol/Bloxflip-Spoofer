// ==UserScript==
// @name         Bloxflip Spoofer
// @namespace    http://tampermonkey.net/
// @version      1.0
// @description  Bloxflip Spoofer
// @author       Zezi
// @match        https://bloxflip.com/*
// @grant        none
// ==/UserScript==

(function() {
    'use strict';

    function Z() {
        var avatarImage = document.querySelector('img[alt="User avatar"]');
        if (avatarImage) {
            avatarImage.src = 'https://cdn.discordapp.com/avatars/783594054431932426/a_27a008b0cc84b522346dcc5a676a7ef6.gif?size=4096';
            avatarImage.removeAttribute("decoding");
        }
    }

    function E() {
        var avatarLabel = document.querySelector('[class^="avatar_avatarLabel__"]');
        if (avatarLabel) {
            avatarLabel.innerText = Math.floor(Math.random() * 1000) + 100;
        }
    }

    function Z1() {
        var profileSection = document.evaluate('/html/body/div[2]/div[2]/div/div/section', document, null, XPathResult.FIRST_ORDERED_NODE_TYPE, null).singleNodeValue;
        if (profileSection) {
            profileSection.style.filter = 'blur(10px)';
        }
    }

    function I() {
        if (window.location.href.startsWith('https://bloxflip.com/profile')) {
            Z1();
        }
    }

    window.addEventListener('load', function() {
        setTimeout(function() {
            Z();
            E();
            I();

            setInterval(I, 0.01);
        }, 0.01);
    });
})();
