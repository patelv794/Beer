function myFunction() {
    var input, filter, ul, li, a, i;
    input = document.getElementById("myInput");
    filter = input.value.toUpperCase();
    ul = document.getElementById("myUL");
    li = ul.getElementsByTagName("li");
    for (i = 0; i < li.length; i++) {
        a = li[i].getElementsByTagName("a")[0];
        if (a.innerHTML.toUpperCase().indexOf(filter) > -1) {
            li[i].style.display = "";
        } else {
            li[i].style.display = "none";

        }
    }
}



/*function addQ() {
   if( document.myform.customer.value == "" ){
      alert("Enter some value!");
      return; }
   cookievalue= escape(document.myform.customer.value) + 
                ";";
   document.cookie = "name=" + cookievalue;
   
}

*/

function setCookie(name, value, price, image, days)
{
    var x = new Date();
    x.setTime(x.getTime() + (days * 24 * 60 * 60 * 1000));
    document.cookie = name + "=" + value + "=" + price + "=" + image + "; expires=" + x.toGMTString() + "; path=/";
  //var value =  document.getElementById('').value;
}


function setColor(k,v){
 document.getElementById(k).style.backgroundColor = v;
}

function getCookie()  {
    /*var cookievalue = "", str = document.cookie;
    var A = str.split(";");
    for (var i = 0; i < A.length; i++) {
        var B = A[i].split("=");
        var c2f = "";
        if (i != 0) {
            c2f = " " + cookie2find; }
        else {
            c2f = cookie2find; }
        if (B[0] == c2f) {
            cookievalue = B[1];
break; }
    }
    return cookievalue;*/
    var allCookie = document.cookie;
    document.write(allCookie);
}





// 
// //Give you the price of the products.
// function priceBeer(t){
// 
// 
// 	 var x = document.getElementsByClassName("price");
//     document.cookie = "Price: "+(innerHTML = x[t].innerHTML);
//     
// }
// function nameBeer(v) {
//     
//     console.log(document.getElementsByTagName("p")[v].innerHTML);
//     
// 
// }
// //add the quantity of the products 
// function addQ(v){  
// //var beerName = document.getElementByTagName("P");
// //var x = document.getElementsByClassName("price");
// //document.cookie = "Price: "+(innerHTML = x[0].innerHTML);
// 
// document.cookie ="QTY= " +  (document.getElementsById("txtName")[v].value);
// //document.cookie ="QTY= " + document.getElementById("txtName").value;
// //document.cookie ="Name= " + document.getElementByTagName("I")[v].innerHTML;
// 
// //document.cookie =" Image= " + document.getElementByClassName("image").value;
// 
// }
// 
// 
// 
// 
// /*
// function beer(){
// 
//  console.log(document.getElementById('beerName'));
//  console.log(document.getElementById('image'));
//  
//  
//  
//  
//  
//  //to load image in console and only extension image will display not from the local storage.  
// //console.log('%c       ', 'font-size: 100px; background: url(beer/modelo24oz.jpg) no-repeat;');
// 
// }*/