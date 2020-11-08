const promise = new Promise( (resolve, reject) => {
    setTimeout(() => {
        //console.log("username available");
        //resolve({user: "venkat"});
        reject(new Error("no user")); 
    }, 5000)
});

promise
    .then( user => console.log(user))
    .catch(err => console.log(err))
