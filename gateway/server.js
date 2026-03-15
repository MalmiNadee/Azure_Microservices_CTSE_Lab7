const express = require("express");
const app = express();
const PORT = 3000;

app.get("/", (req, res) => {
  res.send("🚀 API Gateway Running");
});

app.get("/health", (req, res) => {
  res.json({ status: "Gateway OK" });
});

app.get("/items", (req, res) => {
  res.json([{ id: 1, name: "Sample Item" }]);
});

app.get("/orders", (req, res) => {
  res.json([{ id: 101, item: "Sample Order" }]);
});

app.get("/payments", (req, res) => {
  res.json([{ id: 5001, status: "Paid" }]);
});

app.listen(PORT, () => console.log("Gateway running on port", PORT));