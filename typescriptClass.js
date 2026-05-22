"use strict";
class TypeScript {
    version;
    constructor(version) {
        this.version = version;
    }
    displayinfo() {
        console.log(this.version);
    }
}
const info = new TypeScript("6.0.3");
info.displayinfo();
//non prameterised constructor with return type
