"use strict";
// Write a simple asynchronous TS function fetchGreeting that returns a 
//greeting message after 2-sec delay using setTimeout?
Object.defineProperty(exports, "__esModule", { value: true });
const fetchGreeting = (callback) => {
    setTimeout(() => {
        callback();
    }, 2000);
};
fetchGreeting(() => {
    console.log("Hello! Good Morning Thursday Class");
});
