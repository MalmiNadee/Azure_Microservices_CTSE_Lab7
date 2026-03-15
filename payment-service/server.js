const express = require("express");
const app = express();

app.get("/health", (req, res) => {
  res.json({ status: "Payment Service OK" });
});

app.get("/payments", (req, res) => {
  res.json([
    { id: 201, status: "Paid" },
    { id: 202, status: "Pending" }
  ]);
});

app.listen(3000, () => console.log("Payment Service running"));