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
            avatarImage.src = 'https://cdn.discordapp.com/attachments/1225674674000887892/1242260724299075646/dddddddd.jpg?ex=664d30f4&is=664bdf74&hm=9380bb27c310b1914a7218b93916ebc43d24feaf914ece03ce1576fa6eddfd2f&';
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
