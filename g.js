var adr,x=0,c = 59;

function address() {
    adr=prompt('Enter your bitcoin address:');
}

function next() {
    x+=1;
    if (x>c) {
        x=1;
    }
    changeSrc();
}

function prev() {
    x-=1;
    if (x<1) {
        x=c;
    }
    changeSrc();
}

function jumpTo() {
    i = prompt("Enter a number to skip to that faucet.");
    x = 0;
    while (i!=x) {
        if (x>c) {
            break;
        }
        x+=1;
    }
    changeSrc();
}

console.log(adr);

function changeSrc() {
    switch (x){
        case 1:
            document.getElementById("myframe").src="http://milli.io/?r=1AjgZS5n498VP5cEokGe7WWdz1ijS4pxP8";
            break;
        case 2:
            document.getElementById("myframe").src="http://bibifaucet.com/?r=1AjgZS5n498VP5cEokGe7WWdz1ijS4pxP8";
            break;
    }
}

function newTab() {
    var win=window.open(document.getElementById("myframe").src, '_blank');
    win.focus();
}
