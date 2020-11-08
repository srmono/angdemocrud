var http = new XMLHttpRequest();
var url = "user.json";
var method = "GET";

http.onreadystatechange = function(){
    if(this.readyState == 4 && this.status == 200){
        //console.log(this.responseText);
        var data = JSON.parse(this.responseText); // parse res as json
        for(x in data){
            console.log(data[x]);
        }
    }
}
http.open(method, url, true);
http.send(); 