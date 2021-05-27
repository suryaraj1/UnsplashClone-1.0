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

app.use("/api/photos", photos);

if (process.env.NODE_ENV == "production") {
  app.use(express.static("frontend/build"));
  app.get("*", (req, res) => {
    res.sendFile(path.resolve(__dirname, "frontend", "build", "index.html"));
  });
}

app.listen(port, () => console.log(`Server listening on port ${port}`));
