fetch("demo.json")
    .then(res => {
        console.log(res)
        return res.json()
    })
    .then(json => {
        console.log(json[5])
    })

fetch("https://developer.mozilla.org/en-US/docs/Web/API/Blob")
    .then(respo => console.log(respo.text))



let users = fetch("https://reqres.in/api/users", {
        method: "POST",
        headers: {
            "Content-Type": "application/json"
        },
        body: JSON.stringify({
            name: "User 1"
        })
    })
    .then(res => {
        if (res.ok) {
            console.log("Succesful")
            return res.json()
        } else {
            console.log("Not Succesful")
        }
    })
    .then(data => console.log(data.name))