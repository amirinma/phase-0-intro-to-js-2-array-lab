// Write your solution here!
const cats = ["Milo", "Otis", "Garfield"]
function destructivelyAppendCat(name){
    cats.push("Ralph");
}
function destructivelyPrependCat(name){
    cats.unshift("Bob");
}
function destructivelyRemoveLastCat(){
    cats.pop();
}
function destructivelyRemoveFirstCat(){
    cats.shift();
}
function appendCat(){
    const allCats = [...cats, "Broom"]
    return allCats;
}

function prependCat(name){
    const allCats = ["Arnold", ...cats];
    return allCats;
}

function removeLastCat(){
    const removeLast = cats.slice(0, cats.length-1);
    return removeLast;
}

function  removeFirstCat(){
    const removeFirst = cats.slice(1);
    return removeFirst;
}