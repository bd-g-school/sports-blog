const express = require("express");
const mongoose = require('mongoose');

const statSchema = new mongoose.Schema({
  id: String,
  name: String,
  stat: String,
  verified: Number,
  debunked: Number
});

const Stat = mongoose.model('Stat', statSchema);

const router = express.Router();

router.post('/', async (req, res) => {
  if (!req.body.name || !req.body.stat)
    return res.status(400).send({
      message: "Name and stat are required"
    });

  try {
    const stat = new Stat({
      name: req.body.name,
      stat: req.body.stat,
      debunked: 0,
      verified: 0
    });
    await stat.save();

    return res.send({
      stat: stat
    });
  } catch (error) {
    console.log(error);
    return res.sendStatus(500);
  }
});

router.delete('/:id', async (req, res) => {
  try {
    console.log("deleting");
    await Stat.deleteOne({
      _id: req.params.id
    });
    res.sendStatus(200);
  } catch (error) {
    console.log(error);
    res.sendStatus(500);
  }
});

router.put('/:id', async (req, res) => {
  try {
    if (req.body.isVerification){
      await Stat.updateOne({ _id: req.params.id }, {
        $inc: { verified: 1 }
      });
    }
    else if (req.body.isDebunked){
      await Stat.updateOne({ _id: req.params.id }, {
        $inc: { debunked: 1 }
      });
    }
    
    res.sendStatus(200);
  } catch (error) {
    console.log(error);
    res.sendStatus(500);
  }
});


router.get('/', async (req, res) => {
  try {
    let stats = await Stat.find();
    res.send({
      stats: stats
    });
  } catch (error) {
    console.log(error);
    res.sendStatus(500);
  }
});

module.exports = {
  routes: router,
  model: Stat
};