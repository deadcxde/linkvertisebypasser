// ==UserScript==
// @name         Linkvertise Bypass
// @namespace    http://tampermonkey.net/
// @version      1.1
// @updateURL    https://raw.githubusercontent.com/deadcxde/linkvertisebypasser/main/bypasser.js
// @downloadURL  https://raw.githubusercontent.com/deadcxde/linkvertisebypasser/main/bypasser.js
// @description  Bypass Key System
// @author       Deadcxde
// @match        *://*/*
// @icon         https://www.google.com/s2/favicons?sz=64&domain=tampermonkey.net
// @grant        none
// ==/UserScript==

// Функция для раскодировки строки из base64
function decodeBase64(string) {
    return atob(string);
}

function makeid(length) {
    let result = '';
    const characters = 'ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz01234567891';
    const charactersLength = characters.length;
    let counter = 0;
    while (counter < length) {
      result += characters.charAt(Math.floor(Math.random() * charactersLength));
      counter += 1;
    }
    return result;
}
function makeidlower(length) {
    let result = '';
    const characters = 'abcdefghijklmnopqrstuvwxyz012345678';
    const charactersLength = characters.length;
    let counter = 0;
    while (counter < length) {
      result += characters.charAt(Math.floor(Math.random() * charactersLength));
      counter += 1;
    }
    return result;
}

// Функция, которая будет выводить текущую ссылку в консоль и раскодировать вторую часть из base64
function logAndDecodeURL() {
    const url = window.location.href;
    if (url.includes("480518/hohohubcheckpoint1")) {
        setTimeout(() => window.location.href = "https://hohohubv-ac90f67762c4.herokuapp.com/api/step?step=2", 10000);
    }
    if (url.includes("480518/hohohubcheckpoint2")) {
        setTimeout(() => window.location.href = "https://hohohubv-ac90f67762c4.herokuapp.com/api/step?step=3", 10000);
    }
    if (url.includes("480518/hohohubcheckpoint3")) {
        setTimeout(() => window.location.href = "https://hohohubv-ac90f67762c4.herokuapp.com/api/step?step=4", 10000);
    }
    if (url.includes("580726/fluxus1")) {
        setTimeout(() => window.location.href = "https://flux.li/android/external/check1.php?hash=DEADCXDEooo" + makeid(12) + "&utm_source=linkvertise.com", 4000);
    }
    if (url.includes("580726/fluxus") && !url.includes("580726/fluxus1")) {
        setTimeout(() => window.location.href = "https://flux.li/android/external/main.php?hash=DEADCXDEooo" + makeid(12) + "&utm_source=linkvertise.com", 10000);
    }
    // if (url.includes("external/main.php") || url.includes("external/check1.php")) {
    //     if (document.querySelector("body").innerHTML.includes("Trying to bypass the Fluxus key system will get you banned from using Fluxus")) {
    //         setTimeout(() => window.location.reload(), 10000);
    //     }
    // }
    if (url.includes("s?mK6Z") || url.includes("codex-gateway-2") || url.includes("codex-gateway-1")) {
        window.location.href = "https://mobile.codex.lol/?page=tasks";
    }
    if (url.includes("76138/arceus-x-neo-key-system-1")) {
        window.location.href = "https://spdmteam.com/api/keysystem?step=1&advertiser=linkvertise&OS=android";
    }
    if (url.includes("76138/arceus-x-neo-key-system-2")) {
        window.location.href = "https://spdmteam.com/api/keysystem?step=2&advertiser=linkvertise&OS=android";
    }
    if (url.includes("76138/arceus-x-neo-key-system-3")) {
        window.location.href = "https://spdmteam.com/api/keysystem?step=3&advertiser=linkvertise&OS=android";
    }
    if (url.includes("r=") && url.includes("dynamic?")) {
        const parts = url.split("r=");
        const encodedPart = parts[1].split("%3D")[0];
        const decodedPart = decodeBase64(encodedPart);
        window.location.href = decodedPart;
    }
    if (url.includes("r=") && url.includes("loot-link")) {
        const parts = url.split("r=");
        const encodedPart = parts[1].split("%3D")[0];
        const decodedPart = decodeBase64(encodedPart);
        window.location.href = decodedPart;
    }
}

function clickButtonDelta() {
    const button = document.querySelector('button'); // Замените "your_button_id" на ID вашей кнопки
    if (button && !button.disabled ) {
        if (button.innerHTML === "Continue") {
            button.click();
        }
    }
}


// Вызываем функцию при загрузке страницы
logAndDecodeURL();

// Слушаем событие изменения URL и вызываем функцию при изменении
window.addEventListener("hashchange", logAndDecodeURL, false);
window.addEventListener("popstate", logAndDecodeURL, false);
