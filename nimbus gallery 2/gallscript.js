

var txt="Lorem ipsum dolor sit amet.";
var i=0;
function typing() {
    
    if(i < txt.length)
    {
    document.getElementById('type').innerHTML+=txt.charAt(i);
    i++;
    setTimeout(typing,150);
    }
}
typing();