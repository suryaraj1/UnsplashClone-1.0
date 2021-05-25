const express = require("express");
const app = express();
const port = process.env.PORT || 3080;
const photos = require("./routes/api/photos");

app.use(express.json());
app.use(
  express.urlencoded({
    extended: false,
  })
);

app.get("/", (req, res) => {
  res.send("Hello World");
});

app.use("/api/photos", photos);

app.listen(port, () => console.log(`Server listening on port ${port}`));
