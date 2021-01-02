function add()  {
    var counter = parseInt(document.getElementById("counter").value);
    counter += 1;
    document.getElementById("counter").value = counter;
}

function sub()  {
    var counter = parseInt( document.getElementById("counter").value);
    counter -= 1;
    if (counter < 0) {
        counter = 0;
    }
    document.getElementById("counter").value = counter;
}