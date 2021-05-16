for (var i = 0, j = 0; i < 5, j < 9; i++, j++) {
    console.log(i, j);
}

function O() {    
    this.x = 1;  
    this.print = function() {        
        console.log(this.x);    
    }
}
var o = new O() 
var print = o.print
print() 
var n = { x: 2, print: print }
n.print()