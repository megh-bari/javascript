// ** Reduce

const num = [1,2,3]

let newNum = num.reduce((acc, cur)=>{
    // console.log(`acc:${acc} , current value:${cur}`)
    return acc + cur
}, 0)

// console.log(newNum)


const shoppingCard = [
    {
        course: "Js Course",
        price: 2999
    },
    {
        course: "MERN Course",
        price: 8999
    },
    {
        course: "DevOps Course",
        price: 9999
    },
]

const priceToPay = shoppingCard.reduce((acc, item )=>{
return acc + item.price
},0)

console.log(`Shop Now: ${priceToPay}`)