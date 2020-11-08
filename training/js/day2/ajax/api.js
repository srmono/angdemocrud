var http = new XMLHttpRequest();
var url = "https://jsonplaceholder.typicode.com/posts"; // server.php
var method = "GET";

http.onreadystatechange = function(){
    if(this.readyState == 4 && this.status == 200){
        //console.log(this.responseText);
        var data = JSON.parse(this.responseText); // parse res as json
        ///console.log(data)
        var output = "";
        for(x of data){
            //console.log(x.title);
            output += "<div>Title: "+x.title+"</div><p>Body: "+x.body+"<p><hr>"
        }
        var el = document.getElementById("posts");
        el.innerHTML = output;
    }
}
http.open(method, url, true);
http.send(); 