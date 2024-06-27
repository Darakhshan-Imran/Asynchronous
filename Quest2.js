"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const simulateTask = () => {
    console.log("Task Started");
};
setTimeout(() => {
    console.log("Task Completed");
}, 1000);
simulateTask();
