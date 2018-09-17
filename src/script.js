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

  // Initialize collapsible (uncomment the lines below if you use the dropdown variation)
  // var collapsibleElem = document.querySelector('.collapsible');
  // var collapsibleInstance = M.Collapsible.init(collapsibleElem, options);


// httpGetAsync('long.json', function(data){console.log(data)});

// Getting the webelements with data-tw-bind and setup an initial scope
// function twoWayBinding(){
//     console.log("I an here");
//     var elements = document.querySelectorAll('[data-tw-bind]');
//     console.log(elements);
//     var scope = {};
//     elements.forEach(function(element){
//         console.log("Hi", element.type);
//         if (element.type=='text' || element.type==="textarea"){
//             var propToBind = element.getAttribute('data-tw-bind');
//             element.onkeyup = function(){
//                 scope[propToBind] = element.value;
//             }
//         }
//     })

// }

// twoWayBinding();