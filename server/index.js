const express = require("express");
const cors = require("cors");
require("dotenv").config();
require("colors");
const morgan = require("morgan");
const helmet = require("helmet");
const connectDB = require("./database/mongodb");
const userRoutes = require("./routes/auth/auth");
const appointmentRoutes = require("./routes/appointment/appointment")

const app = express();

app.use(express.json());
app.use(cors({
    origin: 'http://localhost:3000',
    methods: 'GET,POST,PUT,DELETE',
    allowedHeaders: 'Content-Type,Authorization',
    credentials: true
}));
app.use(morgan("dev"));
app.use(helmet());
app.use("/api/v1/auth", userRoutes);
app.use("/api/v1/appointment", appointmentRoutes)

app.get("/", (req, res) => {
    res.send("<h1>Maitri Dental Care</h1>");
});
app.use((err, req, res, next) => {
    console.error(err.stack);
    res.status(500).send('Something broke!');
});
connectDB();
const port = process.env.PORT || 4000;
const mode = process.env.MODE || "production";

app.listen(port, () => {
    console.log(`Server Running on ${mode} mode at http://localhost:${port}`.bgMagenta.white);
});