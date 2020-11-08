// login function

function userLogin(uname, pw){
    return new Promise( (resolve, reject) => {
        setTimeout(() => {
            resolve({ username: uname });
        }, 5000)
    })
}

function getUserProjects(uname){
    return new Promise( (resolve, reject) => {
        setTimeout(() => {
            resolve(["projects", "project2", "project3"]);
        }, 5000)
    })
}

function getProjectDetails(project){
    return new Promise( (resolve, reject) => {
        setTimeout(() => {
            resolve("project details");
        }, 5000)
    })
}

//async await 

async function displayUser(){
    try {
        let loggedInUser = await userLogin("bvsrao", "123456");
        let projects = await getUserProjects(loggedInUser);
        let projectDtails = await getProjectDetails(projects[0]);
        console.log(projectDtails)
    } catch (error) {
        console.log(error.message)
    }
}

const ig = new Promise( (resolve, reject) => {
    setTimeout(() => {
        console.log("Instagram Data");
        resolve({photos: ["pic1", "pic2", "pic3"]})
    }, 5000)
});

const fb = new Promise( (resolve, reject) => {
    setTimeout(() => {
        console.log("Facebook Data");
        resolve({photos: ["post1", "post2", "post3"]})
    }, 5000)
});

Promise
    .all([ig,fb])
    .then( (result) => {
        let instagram = result[0];
        let facebook = result[1];
        console.log("Instagram: ", instagram);
        console.log("Facebook: ", facebook)
    })

// displayUser()
// Promise
// userLogin("bvsrao", "123564")
//     .then( user => getUserProjects(user))
//     .then( projects => getProjectDetails(projects[0]))
//     .then( details => console.log(details))
//     .catch( err => console.log(err));

// userLogin("bvsrao", "12354", (user) => {
//     console.log("user from login function", user);
//     getUserProjects(user, (projects) => {
//         console.log("projects from getUserProjects", projects);
//         getProjectDetails(projects[0],  (details) => {
//             console.log(details);
//         })
//     })
// })

// A

