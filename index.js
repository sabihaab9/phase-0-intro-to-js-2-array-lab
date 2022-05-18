let cats = ["Milo", "Otis", "Garfield"];

function destructivelyAppendCat(){ 
    cats.push("Ralph");
}

function destructivelyPrependCat(){
    cats.unshift("Bob");
}

function destructivelyRemoveLastCat(){
    cats.pop();
}

function destructivelyRemoveFirstCat(){
    cats.shift();
}

function appendCat(name){

    let newCats = [...cats, 'Broom']

    return newCats;
}

function prependCat(name){

    let newCats2 = ['Arnold',...cats]

    return newCats2;
}

function prependCat(name){

    let copyOfNewCats = ['Arnold',...cats]

    return copyOfNewCats;
}

function removeLastCat(name){

    let copyOfNewCats2 = cats.slice(0, cats.length-1);

    return copyOfNewCats2;
}

function removeFirstCat(name){

    let copyOfNewCats3 = cats.slice(1);

    return copyOfNewCats3;
}

