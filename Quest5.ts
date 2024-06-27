const executeSequentially=()=>{
   const fetchData=()=>{
    return new Promise((resolve)=>{
            resolve("Fetched Successfully")
        })
    }
    fetchData().then((response)=>{
        console.log(response)
    });
    
    const processData=()=>{
    return new Promise((resolve)=>{
        resolve("Data is processing")
    })      
    
}
processData().then((response)=>{
    console.log(response)
})
}
executeSequentially();
