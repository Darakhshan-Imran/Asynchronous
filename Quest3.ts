const fetchData=()=>{
    return new Promise((resolve)=>{
        setTimeout(()=>{
            resolve("Data fetched Successfully")

        }, 1000)
        
    })
}
fetchData().then((response)=>{
    console.log(response)
})