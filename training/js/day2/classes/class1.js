// class className{
//     // Class Methods
//     constructor(){}
//     method1(){}
//     method2(){}
//     ......
// }


class Project {
    constructor(title, type, pid){
        this.title = title,
        this.type = type,
        this.pid = pid
    }
    getTitle(){
        console.log(this.title)
    }
}

let proj = new Project("Protractor", "Testing", 1);
proj.getTitle();


// function Project(title, type, pid){
//     this.title = title,
//     this.type = type,
//     this.pid = pid
// }


function makeProject(props){
    return class{
        constructor(){}
        createProject(){
            console.log(props)
        }
    }
}



