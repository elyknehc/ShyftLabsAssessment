const express = require("express");
const bodyParser = require("body-parser");
const mongoose = require("mongoose");
const studentRoutes = require("./routes/studentRoutes");
const cors = require("cors");
const app = express();
const uri =
	"mongodb+srv://Kyle:IJtnrAArZWYT8QLP@cluster0.ilrudfr.mongodb.net/?retryWrites=true&w=majority";

mongoose
	.connect(uri, {
		useNewUrlParser: true,
		useUnifiedTopology: true,
	})
	.then(() => console.log("Connected to MongoDB..."))
	.catch((err) => console.error("Could not connect to MongoDB...", err));

app.use(bodyParser.json());

app.use(cors());

app.use("/students", studentRoutes);

const PORT = process.env.PORT || 3000;
app.listen(PORT, () => {
	console.log(`Server is running on port ${PORT}`);
});
