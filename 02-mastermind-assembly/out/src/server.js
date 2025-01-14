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
        // res.status(200).json({ user: 'Zinhle Keswa' });
        const parentElement = document.getElementById("body");
        const childElement = document.createElement("button");
        childElement.textContent = "Bosso";
        childElement.addEventListener("click", () => { console.log("You did it baby girl"); });
        parentElement === null || parentElement === void 0 ? void 0 : parentElement.append(childElement);
        res.sendFile(path.join(__dirname, '../pages', 'index.html')); // Adjust the path as necessary
        // res.status(200).send("Hello there! ");
        console.log("We inside!! ");
    });
    app.listen(5600, () => {
        console.log("Server has started...");
        console.log('Server running on http://localhost:5600');
    });
    // return app;
}
startServer();
