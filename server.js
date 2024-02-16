const http = require('http'); // CORE package
const mongodb = require('mongodb');


// MongoDB connect (1-step) ... 2-step is connect to Server
let db;
const connectionString =
  "mongodb+srv://mike030188:zVniEljrW3IXEYwI@cluster0.lpbal5g.mongodb.net/Reja";

mongodb.connect(connectionString, 
    {
        useNewUrlParser: true,
        useUnifiedTopology: true,
    }, 
    (err, client) => {
        if (err) console.log("ERROR on connection MongoDB");
        else {
            console.log("MongoDB connection succeed");
            // console.log(client); "client" ni biz kelejakda juda kop iwlatamiz shuning un uni export qivolamiz
            module.exports = client;

            const app = require('./app'); 
            // Server connect (2-step)
            const server = http.createServer(app);
            let PORT = 3000;
            server.listen(PORT, function () {
                console.log(
                    `The server is running successfully on port: ${PORT}, http://localhost:${PORT}`
                );
            });
        }
    })

