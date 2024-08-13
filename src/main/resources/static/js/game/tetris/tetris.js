
let SPACE = 0;
let O_MINO = 1
let I_MINO = 2
let L_MINO = 3
let J_MINO = 4
let S_MINO = 5
let T_MINO = 6
let Z_MINO = 7
let BLOCK = 8;

let shape = [
    {
        name : "oMino",
        shape : [
            [O_MINO,O_MINO],
            [O_MINO,O_MINO]
        ],
        color : "Yellow"
    },
    {
        name : "iMino",
        shape : [
            [SPACE,SPACE,SPACE,SPACE],
            [I_MINO,I_MINO,I_MINO,I_MINO],
            [SPACE,SPACE,SPACE,SPACE]
        ],
        color : "Mint"
    },
    {
        name : "lMino",
        shape : [
            [L_MINO,SPACE,SPACE],
            [L_MINO,SPACE,SPACE],
            [L_MINO,L_MINO,L_MINO],
        ],
        color : "Blue"
    },
    {
        name : "jMino",
        shape : [
            [SPACE,SPACE,J_MINO],
            [SPACE,SPACE,J_MINO],
            [J_MINO,J_MINO,J_MINO],
        ],
        color : "Orange"
    },
    {
        name : "sMino",
        shape : [
            [SPACE,SPACE,SPACE],
            [SPACE,S_MINO,S_MINO],
            [S_MINO,S_MINO,SPACE],
        ],
        color : "Green"
    },
    {
        name : "tMino",
        shape : [
            [SPACE,SPACE,SPACE],
            [SPACE,T_MINO,SPACE],
            [T_MINO,T_MINO,T_MINO],
        ],
        color : "Purple"
    },
    {
        name : "zMino",
        shape : [
            [SPACE,SPACE,SPACE],
            [Z_MINO,Z_MINO,SPACE],
            [SPACE,Z_MINO,Z_MINO],
        ],
        color : "Red"
    },
]

let map = [];
let point = 0;
let xSize = 20;
let ySize = 30;

let currentShape = [];
let nextShape = [];
let previousShape = [];
let saveShape = [];
let previousDropShape = [];

let $tetrisMap = document.getElementById("tetris-map");

let init = () => {
    setMap();
}

let play = () => {

}

let rotate = () => {

}

let down = () => {

}

let setMap = () => {
    for (let i = 0; i < ySize; i++) {
        let arr = [];
        for (let j = 0; j < xSize; j++) {
            if (i == 0) {
                arr.push(BLOCK);
            } else if (i == ySize - 1) {
                arr.push(BLOCK);
            } else {
                if (j == 0) {
                    arr.push(BLOCK)
                } else if (j == xSize - 1) {
                    arr.push(BLOCK);
                } else {
                    arr.push(SPACE);
                }
            }
        }
        map.push(arr);
    }

    for (let i = 0; i < ySize; i++) {
        let $tr = document.createElement("tr");
        for (let j = 0; j < xSize; j++) {
            let $td = document.createElement("td");
            $td.append(map[i][j]);
            $tr.append($td);
        }
        $tetrisMap.append($tr);
    }
}

let moveRight = () => {

}

let moveLeft = () => {

}

let saveBlock = () => {

}

let reverse = () => {

}

init();