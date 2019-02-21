define("Breakout", ["require", "exports"], function (require, exports) {
    "use strict";
    Object.defineProperty(exports, "__esModule", { value: true });
    class Breakout extends Phaser.Game {
        constructor() {
            super();
            console.log("Hello, World! from Phaser-" + Phaser.VERSION);
        }
    }
    exports.Breakout = Breakout;
});
define("index", ["require", "exports", "Breakout"], function (require, exports, Breakout_1) {
    "use strict";
    Object.defineProperty(exports, "__esModule", { value: true });
    new Breakout_1.Breakout();
});
//# sourceMappingURL=index.js.map