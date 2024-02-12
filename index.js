                   //  lecture 1 using object
// const product={
//     Name: "pen",
//     price:200,
//     rating:4,
//     offer:5,
// }
// console.log(product);

// const profile={
//     Name:"rabi",
//     IsFollow:"true",
//     followers:2457,
//     following:6,
// }
// console.log(profile);


                                                        //  Lecture  2   using operators
// let a=4;
// let b=4;
// console.log(a+b);

                 // Exponentiation 
// let a=4;
// let b=4;
// console.log(a**b);

                    // increment 
// let a=4;
// console.log("a=" ,a );
// a=a+1;
// console.log(a);

                    //  decrement
// let a=4;
// // console.log("a=" ,a );
// a--;
// console.log(a);

                     // post
// let a= 5;
// console.log("a++=" ,a++);
// console.log(a);

                   // pre
// let a= 5;
// console.log("++a=" ,++a);
// console.log(a);

                   // Assignment Operators
// let a=2;
// a +=3;    // a = a+3
// console.log(a);

// let a=2;
// a -=3;    // a = a-3
// console.log(a);

// let a=2;
// a *=3;    // a = a*3
// console.log(a);

// let a=2;
// a /=3;    // a = a/3
// console.log(a);

// let a=4;
// a %=3;    // a = a%3
// console.log(a);


                // conditional statement
// let age=16;
// if(age >= 18 ){
//     console.log("you can vote");
// }

// if(age <= 17 ){
//     console.log("you cannot vote");
// }

                  // if <-> else

// let mode = "dark";
// let color;
// if (mode==="dark"){
//     color="black";
// } 
// else{
//     color="white";
// }
// console.log(mode);

                   // prompt

// let num= prompt("enter your number");
// if(num % 5===0){
//     console.log(num,"num is multiple of 5");
// } else{
//     console.log(num,"num is not multiple of 5");
// }

// let score =100;
// let grade;
// if(score >=90 && score<=100){
//     grade="A";
// }else if(score >=70 && score<=89){
//  grade="B"
// }if(score <=50 && score >=60){
//     grade="C"
// }
// console.log(grade);


                                              //  lecture 3  using loops and string

               //    for loop

// for (let count=0; count<=100; count++){
//     console.log("apna college");
// }
    //  calculate sum of 1 to 5
//     let sum =0;
//     let n=5;
// for (let i=0; i<=5; i++){
//     sum = sum +i         // sum =0 +1 =1  then i++ ma update ho kr 2 ho jay ga
// }
// console.log(sum);

              //  while loop

    
// let i=1;
// while( i<=10){
//     console.log("apna college ")
//   i++;
// }

             // for- of loop

// let string="rabbia";
// for( let i of  string){
//     console.log(i); 
// }    

           //    for-in Loop

//  let student ={
//     name:"rabbia",
//     age:22,
//     cgpa:3.42,
// };     
// for (let i in student){
//     console.log(i,student[i]);
// }
          //   print all even numbers 0 to 100
// let i=0;                                      
// while( i<=100 ){ 
//     console.log(i);
//     i++;
// }--------------------------------------------------// asy b kr sakhty ha or while loop se b kr sakhty ha
// let num=0;
// for(let num=0; num<=20;num++){
// if(num%2===0){
//     console.log(num);
// }else{
// }
// }
        //    practics Q2
// let gameNum=24;
// let userNum=prompt("enter guess number");
// while(userNum != gameNum){
//      userNum=prompt("enter guess number");
// }
// console.log("congratulation");

    //   practice Q
// let fullName = prompt("enter your name");
// let username = "@" + fullName + fullName.length;
// console.log(username);
 


                                                  //    Lecture 4 Array

        //   loop over on array

// let books=[ "stories", "islamic","pak","hath","english"];
// for(let index=0; index<books.length;index++)
// console.log(books[index]);

    //   practices Q
    // let marks=[23,34,56,67,89,90];
    // let sum =0;
    // for(let val of marks){
    //     sum = sum + val
    // }
    // let avg = sum /marks.length;
    // console.log(`avg marks of the class-${avg}`);

    //   practices Q
    //   let items = [258, 645, 300, 900];

    //   for (let i=0; i<items.length; i++){
    //     let offer= items[i]/10;
    //     items[i] -=offer;
    //     console.log(items);
    //   }
  

                    // Array method

            //  push()

//    let fruit=["manago","apple","banana"];
//    fruit.push("grapes");
//    console.log(fruit);         
 
          //  pop()
          
// let fruit=["manago","apple","banana"];
//   fruit.pop();
//   console.log(fruit); 

        // unshif()

// let fruit=["manago","apple","banana"];
// fruit.unshift("Grapes");
// console.log(fruit);
        
        //  splice()

// let num=[1,2,3,4,5,6,7];
// num.splice(2,2,108,7090);

        //    practices Q

// let companies=["bloom","microsoft","uber","google"];
// // companies.shift(1);
// // companies.splice(2 , 1 , ola);
// companies.push("Amazon");



                                        //  lecture 5   function and method

                // practices Q
                
// function vowels(str){
//         let count=0;
//         for(let char of str){
//                 if(char==="a" || char==="a" || char==="e" || char==="i" || char==="o" || char==="u" )
//        {count++}
//         }
//        return count; 
// }


        //  for each loop array

let num=[18,98,90]
num.forEach((num)=>{
        console.log(num**num);
})

