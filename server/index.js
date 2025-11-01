require("dotenv").config();
const express = require("express");
const cors = require("cors");
const connectDB = require("./Database/Connection"); 
const todoRoutes = require("./Routes/TodoRoutes");  

const app = express();

// Middleware
app.use(cors());
app.use(express.json());

// Connect DB
connectDB();

// Routes
app.use("/todolist", todoRoutes);

const PORT = process.env.PORT || 8000;
app.listen(PORT, () => {
  console.log(`🚀 Server is running on port ${PORT}`);
});
