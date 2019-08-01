// QUESTION # 4
/*
for (let i = 1; i < 10 ; i++){
    console.log(i);
}




QUESTION # 2



QUESTION # 3
*/
let i = 1;
let z = 2;

for (i = 1; i < 11; i++) {
    table = z * i;
    console.log(z + " * " + i + " = " + table);
}



let y = 1;
let k = 3;

for (y = 1; y < 11; y++) {
    table = y * k;
    console.log(k + " * " + y + " = " + table + "\n");
}


let p = 1;
let o = 4;

for (p = 1; p < 11; p++) {
    table = p * o;
    console.log(o + " * " + p + " = " + table + "\n");
}
/*

let s = 1;
let l = 5;

for (s = 1; s < 11; s++) {
    table = s * l;
    console.log(l + " * " + s + " = " + table + "\n");
}


let q = 1;
let g = 6;

for (q = 1; q < 11; q++) {
    table = q * g;
    console.log(g + " * " + q + " = " + table + "\n");
}


let t = 1;
let h = 7;

for (t = 1; t < 11; t++) {
    table = t * h;
    console.log(h + " * " + t + " = " + table + "\n");
}


let m = 1;
let n = 8;

for (m = 1; m < 11; m++) {
    table = m * n;
    console.log(n + " * " + m + " = " + table + "\n");
}


let c = 1;
let v = 9;

for (c = 1; c < 11; c++) {
    table = c * v;
    console.log(v + " * " + c + " = " + table + "\n");
}

QUESTION # 4



let students = [
    {
        name: "Amna",
        hobbies: ["eating", "cooking"]
    },
    {
        name: "Daniyal",
        hobbies: ["arts", "shopping"]
    },
    {
        name: "Fahad",
        hobbies: ["coding", "cooking"]
    },
    {
        name: "Hajra",
        hobbies: ["sleep", "reading"]
    }
];
for(let i = 0; i <= students.length ; i++){
console.log( "Hobbies  of " + students[i].name    +  "\n"    + students[i].hobbies[0]  + "\n" + students[i].hobbies[1]  )   ;
}
process.stdout.write

//QUESTION # 5

let rows = 9;
let col = 9;
for (let i = 0; i <= rows; i++) {
    for (let z = 0; z < i; z++)
        document.write( "* ");
    document.write("</br>");
}

function stairSeries() {
    let n = 6;
    let space, num, hash, stair;

    for (let i = 1; i < n; i++) {
        space = n - 1 - i;
        hash = i + 1;
        stair = ' '.repeat(space) + '#'.repeat(hash) + '1', '2', '3', '4', '5', '6'.repeat(num);
        console.log(stair);
    }
}

stairSeries();

function stairSeries() {
    let n = 6;
    let space, num, hash, stair , equal;

    for (let i = 1; i < n; i++) {
        space = n - 1 - i;
        hash = i + 1;
        num = i + 1;
        equal = i + 1;
        stair = ' '.repeat(space) + '#'.repeat(hash) + '1', '2', '3', '4', '5', '6'.repeat(num) + '='.repeat(equal);
        console.log(stair);
    }
}

stairSeries();


let rows = 9;
let col = 9;

for (let i = 1; i <= rows; i++) {
    for (let z = 1; z <= (rows - i); z++) {
        document.write("&nbsp");
    }
    for (let p = 1; p <= i; p++){
        document.write(p);

    }
    document.write("</br>")
}
QUESTION # 9 


let rows = 9;


for (let i= 1; i <= rows; i++) {
    for (let q = 1; q <= i; q++) {
        document.write(q);

    }
    document.write("</br>")
}




let rows = 1;


for (let i= 9; i <= rows; i--) {
    for (let q = 9; q <= i; q--) {
        document.write(q);

    }
    document.write("</br>")
}


function stairSeries() {
    let n = 6;
    let space, num, hash, stair , equal;

    for (let i = 1; i < n; i++) {
        space = n - 1 - i;
        hash = i + 1;
        num = i + 1;
        equal = i + 1;
        stair = ' '.repeat(space) + '#'.repeat(hash) + '1', '2', '3', '4', '5', '6'.repeat(num) + '='.repeat(equal);
        console.log(stair);
    }
}

stairSeries();
*/

function stairSeries() {
    let n = 6;
    let   hash;

    for (let i = 1; i < n; i++) {
        //space = n - 1 - i;
        hash = i + 1;
        
         //' '.repeat(space) + '#'.repeat(hash) ;
        console.log( '#'.repeat(hash) );
    }
}

stairSeries();
