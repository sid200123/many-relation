const express = require("express");
const { sequelize, Actor, Movie, ActorMovies } = require("./models");
const app = express();
const cors = require("cors");
const port = 4000;

app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use(cors());

app.post("/actor", async (req, resp) => {
  try {
    const actor = await Actor.create(req.body);
    resp.status(201).json(actor);
  } catch (err) {
    resp.status(500).send(err);
  }
});

app.post("/movie", async (req, resp) => {
  try {
    const movie = await Movie.create(req.body);
    resp.status(201).json(movie);
  } catch (err) {
    resp.status(500).send(err);
  }
});

// app.post("/ActorMovie", async (req, resp) => {
//   try {
//     const ActorMovie = await ActorMovies.create(req.body);
//     resp.status(201).json(ActorMovie);
//   } catch (err) {
//     resp.status(500).send(err);
//   }
// });

app.get("/actors", async (req, resp) => {
  try {
    const actors = await Actor.findAll({
      include: [Movie],
    });
    resp.status(200).json(actors);
  } catch (err) {
    resp.send(err);
  }
});

app.get("/movies", async (req, resp) => {
  try {
    const actors = await Movie.findAll({
      include: [Actor],
    });
    resp.status(200).json(actors);
  } catch (err) {
    resp.send(err);
  }
});

app.get("/actorsMovie", async (req, resp) => {
  try {
    const actors = await ActorMovies.findAll();
    resp.status(200).json(actors);
  } catch (err) {
    resp.send(err);
  }
});

app.listen(port, async () => {
  console.log(`Example app listening on port ${port}!`);
  await sequelize.authenticate();
  console.log("Database Connected");
});
