require("dotenv").config();
const express = require("express");
const cors = require("cors");
const connectDB = require("./Database/Connection"); 
const todoRoutes = require("./Routes/TodoRoutes");  

const app = express();

// Middleware
app.use(express.json());
app.use(cors());

// Connect DB
connectDB();

// Routes
app.use("/todolist", todoRoutes);

const PORT = process.env.PORT || 8000;
app.listen(PORT, () => {
  console.log(`🚀 Server is running on port ${PORT}`);
});
