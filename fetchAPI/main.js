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