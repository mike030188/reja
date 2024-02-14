console.log("Web Serverni boshlash");
const express = require('express'); // EXTERNAL package
const app = express(); // application variable
const fs = require('fs'); // CORE package

const mongodb = require("mongodb"); // EXTERNAL package


// MongoDB chaqiriw...
const db = require("./server").db(); // shu "db" => orqali biz MongoDB da ma`lumotlarni uqiw, edit, delete qilishimiz mumkin

let user;
fs.readFile("database/user.json", "utf8", (err, data) => {
    if (err) {
        console.log("ERRORR", err);
    } else {
        user = JSON.parse(data) // Converts a JavaScript Object Notation (JSON) string into an object.
    }
});


// *** Express Server qurish bosqichlari ***

// 1 Kirish code
app.use(express.static("public")); // bu clientga faqat public folderlarni korsatish
app.use(express.json()); // bu json formatni objectga aylantirib berish
app.use(express.urlencoded({extended: true})); // HTML forum dan kelgan habarlarni express qabul qilishi un, aks holda "ignore qiladi"

// 2 Session code (in this project session is not applied)


// 3 View code. 
// BSSR (BackEnd Server Side Rendering => BackEndda view (FrontEnd) yasash). Bu "Traditional" usul xisoblanadi! => EJS dan foydalanamiz
app.set("views", "views"); // bu yerda "views"-> folder nomi
app.set("view engine", "ejs");

// 4 Routing code (Web sahifani o`rnatilgan portda korinishini ta`minlaydi)
// app.get("/hello", function (req, res) {
//     res.end(`<h1 style="background: red">HELLO WORLD!</h1>`);
// });
// app.get("/gift", function (req, res) {
//     res.end(`<h1 style="background: green">Siz sovgalar sahifasidasiz</h1>`);
// });

// bu yerda "post" => O`zi bn ma`lumotni olib kelib Database ga o`sha ma`lumotni yozish un kk
app.post("/create-item", (req, res) => {
    console.log("user entered / create-item");
    // TODO: code with db here
    console.log(req.body);
    // res.end("success");
    const new_reja = req.body.reja;
    db.collection("plans").insertOne({ reja: new_reja }, (err, data) => {
        // *** modern way with (axios) ***
        console.log(data.ops);
        res.json(data.ops[0]);

        // *** traditional way ***
        // if (err) {console.log("err");
        // res.end("something went wrong");
        // } else {
        //     res.end("successfully added");
        // } 
    });   

    // console.log(req.body);
    // console.log(req);  => 3 qism korinadi
    // res.json({test: "success"});
});

/***  delete operations ***/
app.post("/delete-item", (req, res) => {
    const id = req.body.id; //frontendan post qilingan bodyni id sini qiymatini qabul qilib olyapmiz
    // console.log(id);//-> 64607a25d3f1af06501b6e3c
    /*** databasedan biz tanlagan rejani o'chirish ***/
    db.collection("plans").deleteOne({ _id: new mongodb.ObjectId(id)}, function (err, data) {
      res.json({state: "success"});
    })
  });

/***  edit operations ***/
app.post("/edit-item", (req, res) => {
    const data = req.body;
    console.log(data);
    db.collection("plans").findOneAndUpdate(
      { _id: new mongodb.ObjectId(data.id) },
      { $set: { reja: data.new_input } },
      function (err, data) {
        res.json({ state: "success" });
      });
  });
  /***  Hamma rejalarni o'chirish ***/
  app.post("/delete-all", (req, res) => {
    if (req.body.delete_all) {
      db.collection("plans").deleteMany(function () {
        res.json({ state: "Hamma rejalar o'chirildi" });
      });
    }
  });

app.get('/author', (req, res) => {
    res.render("author", { user: user })
});

// bu yerda "get" => Database dan ma`lumotni olish (o`qish) un kk
app.get("/", function (req, res) {
    console.log("user entered /");
    db.collection("plans")
        .find()
        .toArray((err, data) => {
            if (err) {
                console.log(err); // agar err bo`lsa clientni kuttirmasdan procesni end qilsin
                res.end("something went wrong");
            } else {
                // console.log(data);
                res.render("reja", { items: data });
            }
    })
});

module.exports = app;

