// * Javascript is Synchronous (thi, hai or hamesha ke liye rahegi)

// * Two types code are written in JS : blocking code and Non blocking code

function resolvedAfterTwoSecond() {
    return new Promise((resolve)=>{
        setTimeout(()=>{
            resolve("Resolved!")
        },2000)
    })
}

async function asynCall() {
    console.log('calling')
    const result = await resolvedAfterTwoSecond()
    console.log(result)
}

asynCall()


// * example: fetching data from API

async function fetchUserData() {
    try {

        let response = await fetch('https://jsonplaceholder.typicode.com/users/1')

        if (!response.ok) {
            throw new Error("Network response was not ok");
        }

        let userData = await response.json()

        return userData
        
    } catch (error) {
        console.error('Error fetching user data', error)
        throw error
    }
}

fetchUserData().then(userData =>{
    console.log("User Data: ", userData)
}).catch(error =>{
    console.error('Failed to fetch user data', error)
})