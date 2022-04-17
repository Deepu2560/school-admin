const express = require("express");

const app = express();

// useing express middleware for getting data in json form
app.use(express.json());

// getting connect function form config/db
const connect = require("./src/Config/db");

// getting router from Controller files
const teacherController = require("./src/Controllers/teacher_controller");

const classController = require("./src/Controllers/classes_contoller");

app.use("/teacher", teacherController);

app.use("/classes", classController);

/* app.listen to start server on 8080 port */
app.listen(8080, async () => {
  try {
    await connect();
    console.log("connected to server");
  } catch (error) {
    console.log("ERROR:", error);
  }
});
