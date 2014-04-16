// 99 bottles problem with a twist, created without the help of google by Andrew Benavides

var bottles = prompt("Hi there! How many bottles you want to drink?(enter a number)");


for ( var i = bottles; i > 0; i -= 1){
	document.write( bottles + " bottles of beer on the wall " + bottles + " bottles of beer, you take one down and pass it around " +  (bottles - 1)  + " bottles of beer on the wall!" + "\n");
    if ( i % 3 === 0 ){
			document.write("\t[hiccup]\t");
    }
        bottles -= 1;
  }