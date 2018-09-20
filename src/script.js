function httpGetAsync(theUrl, callback)
{
    var xmlHttp = new XMLHttpRequest();
    xmlHttp.onreadystatechange = function() { 
        if (xmlHttp.readyState == 4 && xmlHttp.status == 200)
            callback(xmlHttp.responseText);
    }
    xmlHttp.open("GET", theUrl, true); // true for asynchronous 
    xmlHttp.send(null);
}
httpGetAsync('long.json', function(data){
    gameDetails = JSON.parse(data);
    var gameTitles = [];
    var treeContent = document.getElementById('tree-contents');
    // console.log(gameDetails);
    for (var i = 0; i < gameDetails.length; i++){
        gameTitles.push(gameDetails[i].title);
        treeContent.innerHTML += '<li class="collection-item"><p> <i class="inline-icon material-icons">folder</i> <a href="..." onClick="alert("hello world"); return false;">' +  gameDetails[i].title + '</a> </p> </li>';
    }
    
    // treeContent.innerHTML = data;
});