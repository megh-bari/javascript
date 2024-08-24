// const myArr = []
// %DegugPrint(myArr)

//* Array -  continues, holey
// * SMI (Small Integer)
//* Packed Element
// * Double (float, string, function)

const arry = [1, 2, 3, 4, 5];
// * PACKED_SMI_ELEMENT

arry.push(6.0);
// * PACKED_DOUBLE_ELEMENT

arry.push("7");

arry[10] = 11;
// * HOLEY_ELEMENTS

console.log(arry);
console.log(arry.length);
console.log(arry[9]);

// * bound check
// * hasOwnProperty(arry, 9)
// * hasOwnProperty(arry.prototype, 10)
// * hasOwnProperty(Object.prototype, 10)

// ! Holes are very expensive in JS

const newArry = [1,2,3,4,5]
console.log(newArry[2])

// * SMI > DOUBLE > PACKED_ELEMENT  = CONTINUES
// * HOLE_SMI > HOLE_DOUBLE > HOLE_PACKED = HOLEY

const array = new Array(3)
// * Just 3 holes. HOLEY_SMI_ELEMENTS
array[0] = '1' //* HOLEY_ELEMENTS
array[1] = '2' //* HOLEY_ELEMENTS
array[2] = '3' //* HOLEY_ELEMENTS
console.log(array) 

const newArray = []
newArray.push('1')//* PACKED_ELEMENTS
newArray.push('2')//* PACKED_ELEMENTS
newArray.push('3')//* PACKED_ELEMENTS
newArray.push('4')//* PACKED_ELEMENTS
console.log(newArray)

const arryNew = [1,2,3,4,5]
arryNew.push(NaN) //* DOUBLE_ELEMENTS
arryNew.push(Infinity)//* DOUBLE_ELEMENTS
console.log(arryNew)

