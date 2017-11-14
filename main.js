var timeout=0;
function callme()
{
    alert("Hello Timeout!!");
}

window.onload = function() {
    timeoutId = setTimeout("callme()",2000);
}
