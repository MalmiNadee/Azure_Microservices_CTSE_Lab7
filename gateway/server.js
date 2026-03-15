const express = require("express");
const axios = require("axios");

const app = express();
const PORT = 3000;

app.get("/", (req, res) => {
  res.send("🚀 API Gateway Running");
});

app.get("/health", (req, res) => {
  res.json({ status: "Gateway OK" });
});

app.get("/items", async (req, res) => {
  try {
    const response = await axios.get("http://item-service:3000/items");
    res.json(response.data);
  } catch (err) {
    res.status(500).json({ error: "Item Service not reachable" });
  }
});

app.get("/orders", async (req, res) => {
  try {
    const response = await axios.get("http://order-service:3000/orders");
    res.json(response.data);
  } catch (err) {
    res.status(500).json({ error: "Order Service not reachable" });
  }
});

app.get("/payments", async (req, res) => {
  try {
    const response = await axios.get("http://payment-service:3000/payments");
    res.json(response.data);
  } catch (err) {
    res.status(500).json({ error: "Payment Service not reachable" });
  }
});

app.listen(PORT, () => console.log("Gateway running on port", PORT));