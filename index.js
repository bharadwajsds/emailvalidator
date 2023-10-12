console.log("this is my script");
let result = {

    "tag": "",
    "free": true,
    "role": false,
    "user": "bharadwajsds",
    "email": "bharadwajsds@gmail.com",
    "score": 0.64,
    "state": "deliverable",
    "domain": "gmail.com",
    "reason": "valid_mailbox",
    "mx_found": true,
    "catch_all": null,
    "disposable": false,
    "smtp_check": true,
    "did_you_mean": "",
    "format_valid": true

}
submitBtn.addEventListner("click", async(e) => {
    e.preventDefault()
    console.log("clicked!")
    let key = "ema_live_8AKqw5YHNnPeggd2O2NvbYrapgHSDcVhk5EHvpHj"
    let email = document.getElementById("username").value
    let url = `https://api.emailvalidation.io/v1/info?apikey=${key}&email=${email}`
    let res=await fetch(url)
    let response=await res.json()
    let str = ' '
    for (key in Object.keys(result)) {
        if(result[key]==" "){

        str = str + '<div>${key}: ${result[key]}</div>`
    }
}
    console.log(str)
    resultCont.innerHTML = str
})



