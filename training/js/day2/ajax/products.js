var http = new XMLHttpRequest();
var url = "products.json";
var method = "GET";

http.onreadystatechange = function(){
    if(this.readyState == 4 && this.status == 200){
        var data = JSON.parse(this.responseText);
        
        var output = "";
        for(product of data){
            output += "<div class='prod'>"+
                            "<img src='"+ product["image"] +"'>"+
                            "<div class='title'>"+product["title"]+"</div>"+
                            "<div class='text'>"+product["cat"]+"</div>"+
                            "<div class='text'>"+product["price"]+"</div>"+
                        "</div>";
        }

        output += "<div class='clear'></div>"
        var el = document.getElementById("topoffers");
        el.innerHTML = output;
    }
}
http.open(method, url, true);
http.send(); 