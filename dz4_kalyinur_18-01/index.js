var triangle = "*";
while(triangle.length <=7 ){
    console.log(triangle + "\n" ); 
    triangle += "*";
}




for (var i = 1; i<=100; i++ ){
    if (i % 15 == 0)  {
        console.log("FizzBuzz");
    }   else if (i % 3 == 0)  {
        console.log("Fizz");
    }   else if (i % 5 == 0)  {
        console.log("Buzz");
    } else{
        console.log(i);
    }
}



var chessBoard = "";
var size = 8;
for (var i = 0; i < size; i++) {
    for (var j = 0; j < size; j++) {
      if ((i + j) % 2 == 0) chessBoard += " ";
      else chessBoard += "#";
    }
    chessBoard += "\n";
  }
  console.log(chessBoard);