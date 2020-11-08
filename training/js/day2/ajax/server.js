var http = new XMLHttpRequest(); // init 0

http.onreadystatechange = function(){
    if(this.readyState == 4 && this.status == 200){
        //receive the data
        //console.log(this.responseText);
        var data = this.responseText;
        for(x in data){
            console.log(x);
        }
    }
}

//setup server
http.open("GET", "simple.txt", true); // 1
http.send(); // 2


// readyState
// 0 Request is not initialized
// 1 Server connection established
// 2 reqest recieved
// 3 Processing request
// 4 response is ready 

// Status code  status text 
// 200             OK 