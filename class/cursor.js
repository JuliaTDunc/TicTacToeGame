class Cursor {
    constructor() {
        this.numRows = 3;
        this.numCols= 3;
        this.row = 0;
        this.col = 0;
        this.gridColor = "black";
        this.cursorColor = "yellow";
    }
    position = () => {
        return {"row": this.row, "col": this.col};
    }
}

module.exports = Cursor;