function commonAjax(url, method, callback, el, title){
    var http = new XMLHttpRequest();
    http.onreadystatechange = function(){
        if(this.readyState == 4 && this.status == 200){
            callback(this.responseText, el, title)
        }
    }
    http.open(method, url, true);
    http.send(); 
}

function homeProduct(data, el, title){
    var products =  JSON.parse(data);
    var output = "<h1>"+title+"</h1>";
    for(product of products){
        output += "<div class='prod'>"+
                        "<img src='"+product["image"]+"'>"+
                        "<div class='title'>"+product["title"]+"</div>"+
                        "<div class='text'>"+product["cat"]+"</div>"+
                        "<div class='text'>"+product["price"]+"</div>"+
                    "</div>";
    }

    output += "<div class='clear'></div>"
    var outputEl = document.getElementById(el);
    outputEl.innerHTML = output;
}

var url1 = "topoffers.json";
var url2 = "fashion.json";

commonAjax(url1, "GET", homeProduct, "topoffers", "Today's Offers");
commonAjax(url2, "GET", homeProduct, "topfashion", "Top Fashion Deals");