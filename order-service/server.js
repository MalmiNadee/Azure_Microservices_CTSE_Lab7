const express = require("express");
const app = express();

app.get("/health", (req, res) => {
  res.json({ status: "Order Service OK" });
});

app.get("/orders", (req, res) => {
  res.json([
    { id: 101, item: "Laptop", qty: 1 },
    { id: 102, item: "Phone", qty: 2 }
  ]);
});

app.listen(3000, () => console.log("Order Service running"));