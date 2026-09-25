const express = require("express");

const app = express();
const PORT = 3000;

app.get("/", (req, res) => {
const html = [
"<!DOCTYPE html>",
"<html>",
"<head>",
"<title>Black Friday Store</title>",
"<style>",
"body { margin:0; font-family:Arial; background:#111; color:white; text-align:center; }",
"header { background:#e63946; padding:30px; }",
"h1 { font-size:45px; margin:0; }",
".sale { font-size:24px; margin-top:10px; }",
".products { display:flex; justify-content:center; gap:25px; margin:50px; }",
".card { background:white; color:#111; width:220px; padding:25px; border-radius:15px; }",
".price { color:#e63946; font-size:25px; font-weight:bold; }",
"button { background:#e63946; color:white; border:0; padding:12px 25px; border-radius:8px; }",
"</style>",
"</head>",
"<body>",
"<header>",
"<h1>🔥 BLACK FRIDAY 🔥</h1>",
"<div class='sale'>UP TO 70% OFF</div>",
"</header>",
"<h2>Today's Hot Deals</h2>",
"<div class='products'>",
"<div class='card'><h2>💻 Lap</h2><p>High-performance laptop</p><div class='price'>$799</div><button>Buy Now</button></div>",
"<div class='card'><h2>📱 phone</h2><p>Latest smartphone</p><div class='price'>$499</div><button>Buy Now</button></div>",
"<div class='card'><h2>🎧 Head ps</h2><p>Wireless headphones</p><div class='price'>$99</div><button>Buy Now</button></div>",
"</div>",
"</body>",
"</html>"
].join("");

res.send(html);
});

app.get("/health", (req, res) => {
res.status(200).json({ status: "ok" });
});

app.listen(PORT, () => {
console.log("🔥 Black Friday Store running on port " + PORT);
});
