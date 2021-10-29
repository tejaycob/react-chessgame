import wPawn from "../img/white_pawn.png";
import bPawn from "../img/black_pawn.png";

export default class Pawn {
    constructor(player) {
        this.player = player;
        this.highlight = 0;
        this.possible = 0;
        this.icon =
            player === "w" ? (
            <img src={wPawn} className="piece" alt="wPawn"></img>
            ) : (
                <img src={bPawn} className="piece" alt="bPawn"></img>
            );
        this.ascii = player === "w" ? "p" : "P";
    }

    // function that defines piece's valid move shape
    can_move(start, end) {
        var start_row = 8 - Math.floor(start / 8);
        var start_col = (start % 8) + 1;
        var end_row = 8 - Math.floor(end / 8);
        var end_col = (end % 8) + 1;

        var row_diff = end_row - start_row;
        var col_diff = end_col - start_col;

        if (this.player === "w") {
            if (col_diff === 0) {
                if (row_diff === 1 || row_diff === 2) return true;
            } else if (col_diff === -1 || col_diff === 1) {
                if (row_diff === 1) return true;
            }
        } else {
            if (col_diff === 0) {
                if (row_diff === -2 || row_diff === -1) return true;
            } else if (col_diff === -1 || col_diff === 1) {
                if (row_diff === -1) return true;
            }
        }
        return false;
    }
}