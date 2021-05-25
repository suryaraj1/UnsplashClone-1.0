const express = require("express");
const app = express();
const port = process.env.PORT || 3080;

app.use(express.json());
app.use(
  express.urlencoded({
    extended: false,
  })
);

app.get("/", (req, res) => {
  res.send("Hello World");
});

app.listen(port, () => console.log(`Server listening on port ${port}`));
