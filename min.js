// this is using promise to avoid callback Hell 
console.log(`start`)
// here is the promise
let subscribe = new Promise( (resolve,reject)=>{
   
    setTimeout( (  )=>{
        const result = false;
        if(result){resolve(`You are a subscriber to this channel`)}
        else{ reject(new Error(`Subscribe First `))}
    },300)
})
console.log(`stop`)

// this is how to  invoke  a promise  this is the syntax
// subscribe.then(
//     ()=>{}
// ).catch(
//     ()=>{}
// ).finally(
//     console.log()
// )

subscribe.then(
    (res)=>console.log(res)
).catch(
    (err)=>console.error(err)
).finally(
    console.log(`Alway follow me `)
)