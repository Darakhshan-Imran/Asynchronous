const fetchwithError=(email:any)=>{
    return new Promise((resolve, reject)=>{
        setTimeout(()=>{
            if(email==="abc@yahoo.com"){
            resolve("Data fetched Successfully")
            }else{
                reject("Data fetch failed")}
        }, 1000)
        
    })
}
fetchwithError("abcd@yahoo.com").then((response)=>{
    console.log(response)
})
.catch((error)=>{
    console.log(error)

})