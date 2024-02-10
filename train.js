console.log("TASK ishga tuwdi");

// *** B - TASK ***

// Shunday function tuzing, u 1ta string parametrga ega bolsin, 
// hamda osha stringda qatnashgan raqamlarni sonini bizga return qilsin.
// MASALAN countDigits("ad2a54y79wet0sfgb9") 7ni return qiladi.

function countDigits(str) {
  
  const digitMatches = str.match(/\d/g);  // Regex syntax in JavaScript "/\d" matches a decimal digit character (i.e. 0-9). "g" - globally

  // Berilgan string ichidan raqamlar bor yoqligini check qilamiz
  if (digitMatches) {
    // raqamlar soni(uzunligi)ni return qil 
    return digitMatches.length;
  } else {
    // Agar raqam topolmasang, return 0
    return 0;
  }
}

const str = "ad2a54y79wet0sfgb9";
const raqamSoni = countDigits(str);
console.log(`Raqamlar soni: ${raqamSoni}`);

// *** A - TASK ***
// Shunday 2 parametrli function tuzing, hamda birinchi parametrdagi letterni
// ikkinchi parametrdagi sozda qatnashgan sonini return qilishi kerak boladi.
// MASALAN: countLetter("e", "engineer") => "3" ni return qiladi.

// function countLetter(letter, string) {
//   let count = 0; 
  
//   for(let i = 0; i < string.length; i++){
//     if (string.charAt(i) === letter) {
//         count++; 
//     }
//   }
//   return count; 
// }

// console.log(countLetter("e", "engineer")); 


// *** Asynchronous functionlarni qo`llash ***
// (we cannot use CORE modules inside of Async funtions) => uning o`rniga bowqa method qo`llaniladi!!!
// Async function proceeded after Sync functions!!!
// Async will use in "defination", .then && .catch || async/await will use in "call" 


// DEFINE                      CALL

// callback                    callback 
// async/await | promise       then/catch    => faqat single javoblarda iwlatish yaxwi
// async/await | promise       async/await   => javoblar ketma-ketligida

// console.log("Jack Ma maslahatlari");
// const list=[
//     "yaxshi talaba bo`ling", // 0-20 age
//     "togri boshliq tanlang va koproq hato qiling", // 20-30 age
//     "uzingizni iwingizni bowlang", // 30-40 age
//     "siz kuchli bolgan narsalarni qiling", // 40-50 age
//     "yowlarga investisiya qiling", // 50-60 age
//     "endi dam oling, baribir foydasi yoq", // 60-~ age
// ];

// // Defination qismi (async)ni iwlatamiz
// async function maslahatBering(a) {
//     if (typeof a !== "number") throw new Error("insert a number"); // instead of callback (null, data) => use "throw new Error(data)"
//     else if (a <= 20) return list[0]; // instead of callback => use return(data)
//     else if (a > 20 && a <= 30) return list[1];
//     else if (a > 30 && a <= 40) return list[2];
//     else if (a > 40 && a <= 50) return list[3];
//     else if (a > 50 && a <= 60) return list[4];
//     else {
//         // return list[5];

//         return new Promise((resolve, reject) => {
//             setTimeout(function() {
//                 resolve (list[5]);
//             }, 5000);
//         });       
//     }
// }


// // CALL qismi (.then && .catch)ni  || async/await iwlatamiz
// console.log("passed here-0");
// maslahatBering(20)
//     .then((data) => {
//         // maslahatBering(31)
//         //     .then((data) => {
//         //         console.log("javob:", data);
//         //     })
//         //     .catch((err) => {
//         //         console.log("ERROR:", err);
//         //     });
//         console.log("javob:", data);
//     })
//     .catch((err) => {
//         console.log("ERROR:", err);
//     });
// console.log("passed here-1");
// // yuqorida .then/.catch => may occur callback.hell - Promise.hell
// // bundan qutilish un biz quyidagicha methoddan foydalanamiz

// // async/await     (bu yerda javoblar ketma-ketlikda keladi)
// async function run() {
//     let javob = await maslahatBering(65);
//     console.log(javob);
//     javob = await maslahatBering(31);
//     console.log(javob);
//     javob = await maslahatBering(41);
//     console.log(javob);
// }
// run();

