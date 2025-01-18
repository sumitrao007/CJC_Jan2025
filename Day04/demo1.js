//Optional parameter Functions
function add1(a, b) {
    console.log("Value of a " + a);
    console.log("Value of b " + b);
    console.log("Addition of a+b " + (a + b));
}
// add1(10);
// add1(10,20);
function add2(a, b) {
    console.log("Value of a " + a);
    console.log("Value of b " + b);
    console.log("Addition of a+b " + (a + b));
}
// add2(12);
// Default parameter Functions
function add3(a, b) {
    if (b === void 0) { b = 20; }
    console.log("Value of a " + a);
    console.log("Value of b " + b);
    console.log("Addition of a+b " + (a + b));
}
// add3(78)
// add3(78,10)
function add4(a, b) {
    if (a === void 0) { a = 50; }
    console.log("Value of a " + a);
    console.log("Value of b " + b);
    console.log("Addition of a+b " + (a + b));
}
// add4(60,45);
function add5(a, b) {
    if (a === void 0) { a = 50; }
    console.log("Value of a " + a);
    console.log("Value of b " + b);
    console.log("Addition of a+b " + (a + b));
}
add5();
