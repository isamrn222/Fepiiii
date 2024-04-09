const express = require("express");
const mongoose = require("mongoose");
require("dotenv").config();
const responRouter = require("./routes/responsabilidad");
const cors = require("cors");

// Settings
const app = express();
const port = process.env.PORT || 3001;

app.use(express.json());
app.use(cors());

// Middleware
app.use('/api', responRouter);

// Routes
app.get("/", (req, res) => {
  res.send("Welcome to my API");
});

// MongoDB connection
mongoose.connect(process.env.MONGODB_URI, {
  useNewUrlParser: true,
  useUnifiedTopology: true,
})
.then(() => console.log("Connected to MongoDB Atlas"))
.catch((error) => console.error(error));

app.listen(port, () => console.log("Server listening to", port));
