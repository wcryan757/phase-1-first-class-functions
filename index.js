function receivesAFunction(spy) {
console.log(spy());

}

function returnsANamedFunction() {
    return function fn() {

    }
}
function returnsAnAnonymousFunction() {
    return function () {

    }
}