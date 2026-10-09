// alert("Arslan");
// console.log("Hellow"); 
// let x= ['ali',"ahmed"," waris"]; 
// console.log(x); 
// let a=("T Shert ");
// let b=("Rs 2000");
// alert(a + " \n" + b);  

// prompt("Enter your Name")

// let num1=(300);
// let num2=(90);
// console.log(num1+num2);
// console.log(num1*num2);
// console.log(num1/num2);
// console.log(num1-num2);

// let fNum = Number(prompt("Enter Number One"));
// let LNum= Number(prompt("Enter Number Two "));
// console.log("Adition:"+(fNum+LNum )+
//     "\n subtraction:"+(fNum-LNum)+
//     "\n product:"+(fNum*LNum)
// );


// let Name=(prompt("Enter your Name "))
// alert("Wellcome Dear"+" "+Name); 

// console.log(fNum/LNum); 
// console.log(fNum*LNum); 
// console.log(fNum-LNum); 
// console.log(fNum+LNum); 


// let weather=prompt("Enter Weather");
// if(weather=="rainy"){
//     alert("bring your Umbrella");
// }
// else{
//    alert(" Have A Nice Day");
// }
 
// let time=new Date().toLocaleDateString("en-US",{month:"long"});
// alert(time);


// let username=prompt("Enter Youser Name");


// let n1=(132);
// let n2=(422);
// compare = n1!=n2;
// console.log(compare);
// if(!compare){
//     alert(n1);
// }
// else{
//     alert(n2);

// }

// v1='abc';
// v2='123';
// v3=true;
// if(v1=='abc' && v2=='123'){
//     alert("yes")
// }
// else{alert("No")}  


// founctions

// function evenoddcheker(n){
//     if(n%2==0){
//         alert("Even Number")
//     }
//     else{
//         alert("Odd Number")
//     }
// }
// s=prompt()
// evenoddcheker(s);


// function Name(M){
//     alert("Welcome Dear"+M)
// }
// e=prompt()
// Name(e);

// function cheklogin(username,password){
//     if(username=="abc" && password=="123"){
//         alert("Login success full")
//     }

//     else{
//         alert("login failed")
//     }
// }
// F=prompt();
// u=prompt();
// cheklogin(F,u);

// function cal(num1,num2,sym){
    
//     if(sym=="+"){
//         alert("Addition" +(num1 +num2))
//     }

//     else if (sym=="-"){
//         alert("Subtraction" +(num1 -num2))
//     }

//     else if (sym=="*"){
//         alert("Multiplication" +(num1 *num2))
//     }

//     else if (sym=="/"){
//         alert("dividion" +(num1 /num2))
//     }

//         else if (sym=="%"){
//         alert("remainder"+(num1%num2))
//     }

//     else{
//         alert("Enter A Valide Number")
//     }
// }
// cal(4,5,"+");
// cal(4,5,"-");
// cal(4,5,"*");
// cal(4,5,"/");
// cal(4,5,"%");


// function calgrad(){
// marks=prompt("enter marks")
//     if(marks>=90 && marks<=100)
//  { alert( "A+ Grade")}

//  else if ( marks>=80 && marks<=90)
//  {
//     alert("A Grade ")
//  }

//  else{
//     alert("Fail")
//  }
// }


 
// for(let A=0; A<3;A++){
//    calgrad();
// }

// for(let A=0; A<3;A++){
//    let user=prompt("Enter Your Name");
//    alert("Welcome Dear"+user)
// }

// N="y"
// do(N=="y"){
// {
//    N=prompt("enter y to continue")
// } while(N=="y");


// let A=document.getElementById("H");
// A.textContent="My name";
// A.style.color="blue"; 

              // founctions   

function pice(){
let b= document.getElementById("pic");
b.src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTfUyrLirEqrL7CjaamucbQGu5BVs2ovPKOLl2bIzfe5A&s=10"
}   
        let b=document.querySelector('.box');
        // alert(b)

function b1(c){
b.style.background=c;
    // c .style.backgroundColor="blue";
    // c .style.backgroundColor="red";
    // c .style.backgroundColor="yellow";
    // c .style.backgroundColor="pink";
}

    let a=document.querySelector("#calculater");
function n(){
    a.value=document.getElementById("but").innerHTML 
}


//  Arry  
         let arr=['Arslan','Ahmed','Ali'];
       arr[3]='Nasir';
       arr.push("khan");
       arr.push("mujeeb");
       arr.push("wasif");
       arr.push("wasif");
       arr.push("wasif");
       arr.push("rashid");
        arr.length;
        arr.reverse();
    //  alert(arr.length);

    // simpe arry
    //  for(let i=0;i<arr.length;i++){
    //     console.log(arr[i])
    //  }


    //   revers arry 
          for(let i=arr.length-1;i>=0;i--){
        console.log(arr[i])}

        
    //    alert(arr[3]+""+ arr.length);
        //  alert(arr[0]+" " +arr[2]);
        //  arr[1]='honda'
        //  alert(arr[0] +" "+arr[1]); 

          //  object method


          let car= [ 
            {name:"Buggati sheroon",
            colour:"BLACK",
            speed:'480Km/ph'} ,

            
            {name:"BMW",
            colour:"RED",
            speed:'120Km/ph'} ,

            
            {name:"RR",
            colour:"GREY",
            speed:'130Km/ph'}
         ]



     //  for(let i=0;i<car.length;i++){
    //    console.log(car[i].name + "\n"+ car[i].speed  + "\n"+ car[i].colour);
    // }


//  for each  loop
 car.forEach( c=>{
    console.log(c.name + "\n"+ c.speed  + "\n"+ c.colour  )
 })   

 let A= document.getElementById('cotaner')
 let bhtml=`<li> heloow </li> <li> hay bhai </li> <p> my name is arslan  <br> my father name is Aslam</p>`
 A.innerHTML=bhtml


