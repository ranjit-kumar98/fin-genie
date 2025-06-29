const express = require("express")
const cors = require("cors")
require("dotenv").config();

const app = express()
app.use(cors());
app.use(express.json());

app.get("/", (req,res) => {
    res.send("FinGenie Backend is running");
});

const PORT = process.env.PORT || 5000;

app.listen(PORT, () => {
    console.log(`Server is running on port ${PORT}`);
    
});
