const express = require("express");
const db = require("./database-mongo/index");
const app = express();

const port = 3000;

app.use(express.json());

app.use(express.static("client/dist"));

app.use("/users", require("./routes/users"));
app.use("/videos", require("./routes/videos"));

app.listen(port, () => {
  console.log(`server listening on port http://localhost:${port}`);
});
