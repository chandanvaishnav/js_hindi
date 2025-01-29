const promiseOne = new Promise(function (resolve, reject) {
    // do an async task
    //db calls, cryptography, network
    setTimeout(function () {
        resolve
        console.log('async task is compleate')
        resolve()
    }, 1000)
})

promiseOne.then(function () {
    console.log("promises consumed");

})

new Promise(function (resolve, reject) {
    setTimeout(function () {
        console.log("async task 2")
        resolve()
    }, 1000)
}).then(function () {
    console.log("async 2 resolve")
})

const promisethree = new Promise(function (resolve, reject) {
    setTimeout(function () {
        resolve({ username: "chai", email: "chai@example" })
    }, 1000)
})

promisethree.then(function (user) {
    console.log(user)
})

const promisefour = new Promise(function (resolve, reject) {
    setTimeout(function () {
        let error = true
        if (!error) {
            resolve({ username: "chandan", password: "12345" })
        } else {
            reject('ERROR: somthing went wrong')
        }

    }, 1000)
})

promisefour
    .then((user) => {
        console.log(user);
        return user.username
    })
    .then((username) => {
        console.log(username)
    })
    .catch(function (error) {
        console.log(error)
    })
    .finally(() => console.log("promises either reject or resolve"))


const promisefive = new Promise(function (resolve, reject) {
    setTimeout(function () {
        let error = true

        if (!error) {
            resolve({ username: "javascript", password: "1234" })
        } else {
            reject('Error:Js went wrong')
        }
    })
})

async function consumepromisefive() {
    try {
        const responce = await promisefive
        console.log(responce)
    } catch (error) {
        console.log(error)
    }
}
consumepromisefive()

/*async function getallusers() {
    try {
        const responce = await fetch('https://jsonplaceholder.typicode.com/users')
        console.log(responce)
        const data = await responce.json()
        console.log(data)
    } catch (error) {
        console.log("error", error);

    }
}
getallusers()*/

fetch('https://api.github.com/users/hiteshchoudhary')
    .then((Response) => {
        return Response.json()
    })
    .then((data) => {
        console.log(data)
    })
    .catch((error) => console.log(error))