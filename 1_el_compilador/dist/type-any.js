"use strict";
// ===explicito===
let userId;
userId = 1;
userId = '1';
// === inferido ===
let otherId;
otherId = 1;
otherId = '1';
otherId = true;
console.log('otherId', otherId);
let surprise;
