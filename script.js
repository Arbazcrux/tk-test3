// // write your JS code here
//  let myPrice = 5.99;


//  function addFunction() {
//  	// for (var i = myPrice.length; i >= 100; i++) {
 	
	 		
//  	// }
// 	let price = document.querySelector("#netP");
//  	price.innerHTML = `<b>`+'$'+myPrice+`</b>`;
//  	mYprice++;
//  }


    // var count = 5.99;
    // var countEl = document.querySelector("#netP");
    // price = document.querySelector("b");
    // function plus(){
    //     count++;
    //     price.innerHTML = count;
    // }
    // function minus(){
    //   if (count > 1) {
    //     count--;
    //     price.innerHTML = count--;
    //   }  
    // }


    let i = 0;
    let cost = 5.99;
    function plus(){
    	
    	document.querySelector("#mybtn2").innerHTML =1 + i++ ;
    	document.querySelector("#netP").innerHTML =`$` + cost * i ;

    }

    function minus(){
		if (i > 0)
		i =  	
    	document.querySelector("#mybtn2").innerHTML = i-- -1;
    	document.querySelector("#netP").innerHTML = cost * i;

    }