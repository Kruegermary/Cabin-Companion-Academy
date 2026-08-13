// Cabin Companion Academy 2.0
// Main Application Controller

const App = {

    init() {

        console.log("🏡 Cabin Companion Academy starting...");

        this.load();

    },

    load() {

        console.log("✨ App Loaded");

    }

};

document.addEventListener("DOMContentLoaded", () => {

    App.init();

});