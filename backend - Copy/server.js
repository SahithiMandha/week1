const express = require("express");
const mongoose = require("mongoose");
const dotenv = require("dotenv");
const bodyParser = require("body-parser");
const cors = require("cors");

const authRoutes = require("./routes/authRoutes");

dotenv.config();

const app = express();
app.use(cors());
app.use(bodyParser.json());

// Routes
app.use("/api/auth", authRoutes);

// MongoDB connection
mongoose.connect("mongodb+srv://sahithi:sahithi@03@sample.nmqo8.mongodb.net/authDemo?retryWrites=true&w=majority", {
    useNewUrlParser: true,
    useUnifiedTopology: true,})
    .then(() => console.log("MongoDB connected"))
    .catch((err) => console.error("MongoDB connection failed", err));

const PORT = process.env.PORT || 5000;
app.listen(PORT, () => console.log(`Server running on port ${PORT}`));
