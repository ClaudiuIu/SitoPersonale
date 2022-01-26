
let i = 0;
let start = Date.now();
function count() {

  document.getElementById("out").innerHTML="Done in " + (Date.now() - start) + " ms"+"/n";


}

let items = [];

    function inputToArray() {
        let str="";
        let boxvalue=(Date.now() - start);
        items.push(boxvalue);
        // console.log(items);
        str=str+","+boxvalue;
        document.getElementById('out').innerHTML=items;
        return false;
    }

    function printArray(){
    let str=""; 
    for(let i=0;i<items.length;i++)
    {
    str=str+" "+items[i].value;
    
    }
    return str;
    
    }
    
