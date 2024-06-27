// Write a simple asynchronous TS function fetchGreeting that returns a 
//greeting message after 2-sec delay using setTimeout?

const fetchGreeting=(callback:any)=>{
        setTimeout(()=>{
            callback ()
        }, 2000)
}

fetchGreeting(()=>{
    console.log("Hello! Good Morning Thursday Class")
})

