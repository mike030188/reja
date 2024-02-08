console.log("TASK ishga tuwdi");
// A - TASK


// *** EVENT LOOP && CALLBACK FUNCTION ***

console.log("Jack Ma maslahatlari");
const list=[
    "yaxshi talaba bo`ling", // 0-20 age
    "togri boshliq tanlang va koproq hato qiling", // 20-30 age
    "uzingizni iwingizni bowlang", // 30-40 age
    "siz kuchli bolgan narsalarni qiling", // 40-50 age
    "yowlarga investisiya qiling", // 50-60 age
    "endi dam oling, baribir foydasi yoq", // 60-~ age
];

function maslahatBering(a, callback) {
    if (typeof a !== "number") callback("insert a number", null); // callback (null, data)
    else if (a <= 20) callback(null, list[0]);
    else if (a > 20 && a <= 30) callback(null, list[1]);
    else if (a > 30 && a <= 40) callback(null, list[2]);
    else if (a > 40 && a <= 50) callback(null, list[3]);
    else if (a > 50 && a <= 60) callback(null, list[4]);
    else {
        setTimeout(function() {
          callback(null, list[5]);
        }, 5000);
    }
}

console.log("passed here-0");
maslahatBering(36, (err, data) => {
    if(err) console.log("ERROR:", err);
    else {
        console.log("javob:", data); // endi bu yerda "javob" || qaytgan qimatni uzini korsatadi holos!
    }
});

console.log("passed here-1");
