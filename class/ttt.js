const Cursor = require("./cursor");
const Screen = require("./screen.js");

class TTT {
    constructor() {
        this.playerTurn = 'O'
        this.grid = [[" ", " ", " "],[" ", " ", " "],[" ", " ", " "]];
        this.cursor = new Cursor();
        this.screen = this.initScreen();
       
    }
   initScreen() {
    let screen = new Screen();
    screen.initialize();
    return screen;
   }
}
const newT = new TTT();
console.log(newT.cursor instanceof Cursor);
module.exports = TTT;