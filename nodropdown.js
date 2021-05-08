// ==UserScript==
// @name         AMQ special character inclusion
// @namespace    http://tampermonkey.net/
// @version      1.0
// @description  Bota letrinha bonitinha
// @author       YoshiNubao
// @match        https://animemusicquiz.com/*
// @downloadURL  https://github.com/YoshiNubao/Caracter-pra-jogador-de-nodropdown/raw/master/nodropdown.js
// @updateURL    https://github.com/YoshiNubao/Caracter-pra-jogador-de-nodropdown/raw/master/nodropdown.js
// @grant        none
// @copyright MIT license
// ==/UserScript==
// Based in Zol's Characters script 👍 : https://github.com/amq-script-project/AMQ-Scripts/blob/master/gameplay/amqSpecialCharacters.user.js
const letterMap = {
    U:"Ū", u:"ū",
    X:"×", x:"×",
    O:"Ō", o:"ō",
    S:"☆", s:"☆",
    D:"△", d:"△"
}

document.addEventListener("keydown", function(event) {
    const key = event.key
    const element = event.target
    if (!element || (element.tagName != "INPUT" && element.tagName != "TEXTAREA")) {
        return
    }
    if (event.ctrlKey && letterMap[key]) {
        event.preventDefault();
        const replacement = letterMap[key]
        let value = element.value
        const startPos = element.selectionStart // these are the start and end of a markup selection
        const endPos = element.selectionEnd // if these are equal they give the position of the cursor,
        // the position is given as how many characters are to the left of the cursor
        value = value.slice(0,startPos) + replacement + value.slice(endPos)
        element.value = value
        element.setSelectionRange(startPos+1, startPos+1)
        element.dispatchEvent(new InputEvent("input"))
    }
}, false);
