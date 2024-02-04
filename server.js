console.log("Web Serverni boshlash");
const express = require('express'); // EXTERNAL package
const app = express(); // application variable
const http = require('http'); // CORE package

// *** Express Server qurish bosqichlari ***

// 1 Kirish code
app.use(express.static("public")); // bu clientga faqat public folderlarni korsatish
app.use(express.json()); // bu json formatni objectga aylantirib berish
app.use(express.urlencoded({extended: true})); // HTML forum dan kelgan habarlarni express qabul qilishi un, aks holda "ignore qiladi"

// 2 Session code (in this project session is not applied)


// 3 View code. 
// BSSR (BackEnd Server Side Rendering => BackEndda view (FrontEnd) yasash). Bu "Traditional" usul xisoblanadi! => EJS dan foydalanamiz
app.set("view", "views"); // bu yerda "views"-> folder nomi
app.set("view engine", "ejs");

// 4 Routing code (Web sahifani o`rnatilgan portda korinishini ta`minlaydi)
app.get("/hello", function (req, res) {
    res.end(`<h1 style="background: red">HELLO WORLD!</h1>`);
});
app.get("/gift", function (req, res) {
    res.end(`<h1 style="background: green">Siz sovgalar sahifasidasiz</h1>`);
});

const server = http.createServer(app);
let PORT = 3000;
server.listen(PORT, function () {
    console.log(`The server is running successfully on port: ${PORT}`);
});
