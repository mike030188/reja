console.log("TASK-2 ishga tuwdi");

// // *** C - TASK ***
// // Shunday function tuzing, u 2ta string parametr ega bolsin, hamda
// // agar har ikkala string bir hil harflardan iborat bolsa true aks holda false qaytarsin
// // MASALAN checkContent("mitgroup", "gmtiprou") return qiladi true;

// function checkContent(str1, str2) {
//   // *** process sorting ***
//   const sortedString1 = str1.split("").sort().join("");
//   //   console.log("sortedStrin1", sortedString1);
//   const sortedString2 = str2.split("").sort().join("");

//   if (sortedString1 === sortedString2) {
//     return true;
//   } else {
//     console.log("Berilgan stringlar bir xil harflardan iborat emas!");
//     return false;
//   }
// }

// const str1 = "mitgroup";
// const str2 = "gmtiprou";

// const result = checkContent(str1, str2);
// console.log("result:", result);

// ===================================================================================

// // *** B - TASK ***

// // Shunday function tuzing, u 1ta string parametrga ega bolsin,
// // hamda osha stringda qatnashgan raqamlarni sonini bizga return qilsin.
// // MASALAN countDigits("ad2a54y79wet0sfgb9") 7ni return qiladi.

// function countDigits(string) {
//   const digitMatches = string.match(/\d/g);

//   if (digitMatches) {
//     return digitMatches.length;
//   } else {
//     return 0;
//   }
// }

// const string = "ad2a54y79wet0sfgb9";
// const raqamSoni = countDigits(string);
// // console.log(`Raqamlar soni: ${raqamSoni}`);
// console.log("Raqamlar soni:", raqamSoni);

// ===================================================================================

// // *** A - TASK ***
// // Shunday 2 parametrli function tuzing, hamda birinchi parametrdagi letterni
// // ikkinchi parametrdagi sozda qatnashgan sonini return qilishi kerak boladi.
// // MASALAN: countLetter("e", "engineer") => "3" ni return qiladi.

// function countLetter(letter, string) {
//   let count = 0;

//   for (let i = 0; i < string.length; i++) {
//     if (string.charAt(i) === letter) {
//       count++;
//     }
//   }
//   return count;
// }

// console.log(countLetter("e", "engineer"));
