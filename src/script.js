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
    // Make an ajax call and binf to the innerHTMl property
    // of the list with id(tree-contents) in the fixed sidebar
    gameDetails = JSON.parse(data);
    var ul = document.createElement('ul');
    ul.setAttribute('id','slide-out');
    ul.setAttribute('class', 'sidenav show-on-med-and-down collection sidenav-fixed')
    document.getElementById('rednderFolderList').appendChild(ul);
    gameDetails.forEach(renderGameList);

    function renderGameList(element){
        // set all the elemets required for creating the list
        var li = document.createElement('li');
        var p = document.createElement('p');
        var i = document.createElement('i');
        var a = document.createElement('a');
        

        // create the materialize icon of folder
        i.setAttribute('class', 'inline-icon material-icons');
        i.innerHTML = 'folder';

        // setattribute of 'a', 'li', and add innerHTML for anchor tag
        a.setAttribute('href', '#');
        li.setAttribute('class', 'collection-item');
        ul.appendChild(li);
        li.appendChild(p);
        p.appendChild(i);
        p.appendChild(a);
        a.innerHTML = element.title;

        // add a click event listener to the a tag 
        a.addEventListener("click", function(){
            var fileExpanded = document.getElementById('file-expanded-view');
            fileExpanded.innerHTML = JSON.stringify(element);
        });
    }
    
});