'use strict';


module.exports = {
    entry: "./home", //What's module should be built.
    output: { //To pass
        filename: "build.js", //That's file is built.
        library: "home" //After home module building, he will be passed
    },

    watch: true, //Rebuilding while change

    devtool: "source-map" //For debugger
};