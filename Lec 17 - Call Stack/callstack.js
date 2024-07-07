function one() {
    console.log("One"); // 5
    two(); // 6 (calls two)
}

function two() {
    console.log("Two"); // 3 and 7
    three(); // 4 (calls three inside two) and 8 (calls three inside two)
}

function three() {
    console.log("Three"); // 1, 4 (inside two), and 8 (inside two)
}

three(); // 1 (Prints "Three")
two();   // 2 (Prints "Two" and calls three)
one();   // 5 (Prints "One" and calls two)
