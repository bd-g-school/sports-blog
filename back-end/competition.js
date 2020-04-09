const express = require("express");
const mongoose = require('mongoose');

const competitionSchema = new mongoose.Schema({
  id: String,
  winner_first_name: String,
  winner_last_name: String,
  event_date: String,
  event_type: String,
  sponsor: String,
  event_name: String,
  sponsor_catch_phrase: String,
});

const Competition = mongoose.model('Competition', competitionSchema);

const router = express.Router();

router.post('/', async (req, res) => {
  if (!req.body.winner_first_name || !req.body.winner_last_name ||
      !req.body.event_name)
    return res.status(400).send({
      message: "Event and winner names required"
    });

  try {
    const competition = new Competition({
      winner_first_name: req.body.winner_first_name,
      winner_last_name: req.body.winner_last_name,
      event_date: req.body.event_date,
      event_type: req.body.event_type,
      sponsor: req.body.sponsor,
      event_name: req.body.event_name,
      sponsor_catch_phrase: req.body.sponsor_catch_phrase
    });
    await competition.save();

    return res.send({
      competition: competition
    });
  } catch (error) {
    console.log(error);
    return res.sendStatus(500);
  }
});

router.put('/:id', async (req, res) => {
  try{
    if (!req.body.winner_first_name || !req.body.winner_last_name ||
      !req.body.event_name)
      return res.status(400).send({
        message: "Event and winner names required"
      });

    await Competition.updateOne({ _id: req.params.id }, {
      winner_first_name: req.body.winner_first_name,
      winner_last_name: req.body.winner_last_name,
      event_date: req.body.event_date,
      event_type: req.body.event_type,
      sponsor: req.body.sponsor,
      event_name: req.body.event_name,
      sponsor_catch_phrase: req.body.sponsor_catch_phrase
    });
    res.sendStatus(200);
  } catch (error) {
    console.log(error);
    return res.sendStatus(500);
  }
});

router.delete('/:id', async (req, res) => {
  try {
    await Competition.deleteOne({
      _id: req.params.id
    });
    res.sendStatus(200);
  } catch (error) {
    console.log(error);
    res.sendStatus(500);
  }
});

router.get('/', async (req, res) => {
  try {
    let competitions = await Competition.find();
    res.send({
      competitions: competitions
    });
  } catch (error) {
    console.log(error);
    res.sendStatus(500);
  }
});

module.exports = {
  routes: router,
  model: Competition
};