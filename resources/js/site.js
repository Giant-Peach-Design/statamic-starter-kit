// This is all you.

import Router from "./Router";

import common from "./routes/common";

const routes = new Router({
    common,
});

function ready(func) {
    if (
        document.attachEvent
            ? document.readyState === "complete"
            : document.readyState !== "loading"
    ) {
        func();
    } else {
        document.addEventListener("DOMContentLoaded", func);
    }
}

ready(function () {
    routes.loadEvents();
});
