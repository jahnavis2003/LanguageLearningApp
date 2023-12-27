const express = require('express');
const cors = require('cors');
const AppRoutes = require("./routes/AppRoutes");
const app = express();
const PORT = 3090;

app.use(cors());
app.use(express.json()); //enables json format
app.use(express.urlencoded({extended: false})); //enables form-data and other formats
app.use('/api', AppRoutes);

app.listen(PORT,()=>{
    console.log("api is running on port ", PORT);
});
