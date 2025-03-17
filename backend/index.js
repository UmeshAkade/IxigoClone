// // backend/index.js
// const express = require("express");
// const cors = require("cors");
// const app = express();

// app.use(cors());
// app.use(express.json());

// app.post("/api/login", (req, res) => {
//   const { mobileNumber } = req.body;

//   if (!mobileNumber) {
//     return res.status(400).json({ success: false, message: "Mobile number is required" });
//   }

//   res.json({ success: true, message: "OTP sent successfully!" });
// });

// const PORT = 5000;
// app.listen(PORT, () => {
//   console.log(`Backend running at http://localhost:${PORT}`);
// });
// backend/index.js
const express = require("express");
const cors = require("cors");
const app = express();

app.use(cors());
app.use(express.json());

let generatedOTP = ""; // Store OTP temporarily (in real-world apps, use Redis or a database)

app.post("/api/login", (req, res) => {
  const { mobileNumber } = req.body;

  if (!mobileNumber) {
    return res.status(400).json({ success: false, message: "Mobile number is required" });
  }

  // Generate a random 6-digit OTP
  generatedOTP = Math.floor(100000 + Math.random() * 900000).toString();
  console.log("Generated OTP:", generatedOTP); // For testing purposes, log OTP in the console

  res.json({ success: true, message: "OTP sent successfully!" });
});

// Verify OTP Route
app.post("/api/verify-otp", (req, res) => {
  const { otp } = req.body;

  if (otp === generatedOTP) {
    return res.json({ success: true, message: "OTP verified successfully!" });
  } else {
    return res.status(400).json({ success: false, message: "Invalid OTP. Please try again." });
  }
});

const PORT = 5000;
app.listen(PORT, () => {
  console.log(`Backend running at http://localhost:${PORT}`);
});
