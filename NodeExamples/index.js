var rect = require("./Rectangle"); //Path is not case sensitive

function solverect(l,b) {
    console.log("Solving for Rectangle of length : "+l+ "and for breadth: "+b);
  
    rect(l,b,(err ,rectangle)=>{
        if (err) {
            console.log("ERROR:  " ,err.message);
        }
        else{
            console.log("The area of the rectangle of dimensions l = "
            + l + " and b = " + b + " is " + rectangle.area());
        console.log("The perimeter of the rectangle of dimensions l = "
            + l + " and b = " + b + " is " + rectangle.perimeter()); 
           }       

     });
     console.log("This statement after the call to rect()");
};

solverect(5,3);
solverect(0,2);
solverect(-2,9);
solverect(3.2,6.0);