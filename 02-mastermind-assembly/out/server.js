import express from 'express';
function startServer() {
    var app = express();
    app.get("/", (req, res) => {
        // res.status(200).json({ user: 'Zinhle Keswa' });
        res.status(200).send("Hello there! ");
        console.log("We inside!! ");
    });
    app.listen(5600, () => {
        console.log("Server has started...");
        console.log('Server running on http://localhost:5600');
    });
    return app;
}
startServer();
