import express from 'express';
import path from 'path';
import { fileURLToPath } from 'url';
function startServer() {
    const __filename = fileURLToPath(import.meta.url); // get the resolved path to the file
    const __dirname = path.dirname(__filename);
    // console.log("Here you go: " + __dirname + "\\..\\pages\\index.html");
    var app = express();
    app.use(express.static("./"));
    app.use(express.static(path.join(__dirname, '../pages/index.html')));
    app.get("/", (req, res) => {
        res.sendFile(path.join(__dirname, '../pages', 'index.html')); // Adjust the path as necessary
    });
    app.get("/testing", (req, res) => {
        res.sendFile(path.join(__dirname, '../pages', 'updated.html')); // Adjust the path as necessary
    });
    app.listen(5600, () => {
        console.log("Server has started...");
        console.log('Server running on http://localhost:5600');
    });
    // return app;
}
startServer();
