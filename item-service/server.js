const express = require("express");
const app = express();

app.get("/health", (req, res) => {
  res.json({ status: "Item Service OK" });
});

app.get("/items", (req, res) => {
  res.json([
    { id: 1, name: "Laptop", price: 1500 },
    { id: 2, name: "Phone", price: 800 }
  ]);
});

app.listen(3000, () => console.log("Item Service running"));