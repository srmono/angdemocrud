// login function

function userLogin(uname, pw, callback){
    setTimeout(() => {
        //user details from server
        callback({ username: uname });
    }, 5000)
}

function getUserProjects(uname, callback){
    setTimeout(() => {
        callback(["projects", "project2", "project3"])
    }, 5000)
}

function getProjectDetails(project, callback){
    setTimeout(() => {
        callback("project details");
    }, 5000)
}

userLogin("bvsrao", "12354", (user) => {
    console.log("user from login function", user);
    getUserProjects(user, (projects) => {
        console.log("projects from getUserProjects", projects);
        getProjectDetails(projects[0],  (details) => {
            console.log(details);
        })
    })
})

