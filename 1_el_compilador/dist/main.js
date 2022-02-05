"use strict";
// === Number ===
//explicito
let phone;
phone = 5;
//implicito
let phone2 = 5;
phone2 = 6;
// === Boolean ===
//explicito
let isPro;
isPro = true;
//implicito
let isPro2 = false;
isPro2 = true;
// === String ===
//explicito
let username;
username = 'ruprosperi';
//implicito
let username2 = 'ruprosperi2';
//template string
let userInfo;
userInfo = `
    Username: ${username}
    Phone: ${phone}
    IsPro: ${isPro}
`;
console.log('UserInfo', userInfo);
