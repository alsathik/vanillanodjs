const controller = require("./controller");

const route =async (req, res) => {
    if (req.url === "/" && req.method === "GET") {
        res.statusCode = 200;
        res.setHeader("Content-Type", "text/plain");
        res.end("Hello");
    } else if (req.url === "/" && req.method === "POST") {
        var customers =await controller.GetAllCustomers();
        res.statusCode = 200;
        res.end(customers);
    }
    else {
        res.statusCode = 404;
        res.end(JSON.stringify({ "Message": "URL Not Found" }));
    }
}

module.exports = route;