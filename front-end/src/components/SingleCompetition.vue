<template>
<div>
  <div v-if="!isUpdating" class = "competition">
    <input id="button" type="button" value="X" @click="deleteCompetition">
    <div class="title">
      <h3>{{competition.event_name}}</h3>
      <h6>{{competition.event_date}}</h6>
    </div>
    <div class='winner'>
      <h5>Winner:<br/>{{competition.winner_first_name}} {{competition.winner_last_name}}</h5>
    </div>
    <div class="sponsor">
      <h5>Event Sponsor:<br/>{{competition.sponsor}}</h5>
      <p>{{competition.sponsor_catch_phrase}}</p>
    </div>
    <div class='buttons'>
      <button @click="edit">Edit</button>
    </div>
  </div>

  <div v-else class = "competition">
    <input id="button" type="button" value="X" @click="deleteCompetition">
    <div class="title">
      <input v-model="new_event_name">
      <input v-model="new_event_date">
    </div>
    <div class='winner'>
      <h5>Winner:<br/><input v-model="new_winner_first_name"> <input v-model="new_winner_last_name"></h5>
    </div>
    <div class="sponsor">
      <h5>Event Sponsor:<br/><input v-model="new_sponsor"></h5>
      <p><input v-model="new_sponsor_catch_phrase"></p>
    </div>
    <div class='buttons'>
      <button @click="save">Save</button>
      <button @click="cancel">Cancel</button>
    </div>
  </div>
</div>
</template>

<script>
import axios from 'axios';
import Toastify from 'toastify-js';

export default {
  name: "SingleCompetition",
  data(){
    return {
      isUpdating: false,
      new_winner_first_name: this.competition.winner_first_name,
      new_winner_last_name: this.competition.winner_last_name,
      new_event_type: this.competition.event_type,
      new_event_date: this.competition.event_date,
      new_sponsor: this.competition._sponsor,
      new_event_name: this.competition.event_name,
      new_sponsor_catch_phrase: this.competition.sponsor_catch_phrase
    }
  },
  props: {
    competition: Object,
  },
  methods: {
    async deleteCompetition() {
      try {
        await axios.delete("/api/competition/" + this.competition._id);
        this.$parent.getCompetitions();
      } catch (error) {
        console.log(error);
      }
    },
    edit() {
      this.isUpdating = true;
    },
    async save() {
      if (this.new_winner_first_name == '' || this.new_winner_last_name == '' || this.event_name == ''){
        Toastify({
          text: "Event and winner names required!",
          backgroundColor: "#0000EE",
          duration: 3000,
          gravity: "bottom", 
          position: 'right', 
          stopOnFocus: true
        }).showToast();
        return;
      }
      try {
        await axios.put("/api/competition/" + this.competition._id, {
          winner_first_name: this.new_winner_first_name,
          winner_last_name: this.new_winner_last_name,
          event_date: this.new_event_date,
          event_type: this.new_event_type,
          sponsor: this.new_sponsor,
          event_name: this.new_event_name,
          sponsor_catch_phrase: this.new_sponsor_catch_phrase
        });
        this.$parent.getCompetitions();
        this.isUpdating = false;
      } catch (error) {
        console.log(error);
      }
    },
    cancel() {
      this.isUpdating = false;
      this.new_winner_first_name = this.competition.winner_first_name;
      this.new_winner_last_name = this.competition.winner_last_name;
      this.new_event_type = this.competition.event_type;
      this.new_event_date = this.competition.event_date;
      this.new_sponsor = this.competition._sponsor;
      this.new_event_name = this.competition.event_name;
      this.new_sponsor_catch_phrase = this.competition.sponsor_catch_phrase;
    },
    async editCompetition() {
      try {
        await axios.delete("/api/competition/" + this.competition._id);
        this.$parent.getCompetitions();
      } catch (error) {
        console.log(error);
      }
    },
  },
}
</script>

<style scoped>

.competition {
  background-color: #e6e6e6;
  padding: 0px;
  display: flex;
  align-items: center;
  justify-content: center;
  flex-direction: column;
  width: 220px;
  margin: 30px;
  min-height: 200px;
  position: relative;
}

.title {
  align-items: center;
  justify-content: center;
  flex-direction: column;
  margin: 10px;
  width: 200px;
  min-height: 80px;
  display: flex;
  align-items: center;
  justify-content: center;
}

.winner {
  width: 200px;
  padding: 10px;
  border-top: solid blue 1px;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
}

.sponsor {
  border-top: solid blue 1px;
  display: flex;
  align-items: center;
  justify-content: center;
  flex-direction: column;
  width: 200px;
  min-height: 120px;
}

.sponsor p {
  font-size: .7em;
}

#button {
    line-height: 12px;
    width: 18px;
    font-size: 8pt;
    margin-top: 2px;
    margin-right: 2px;
    position: absolute;
    top: 0;
    right: 0;
}

.buttons {
  display: flex; 
  flex-direction: row;
  justify-content: center;
  align-items: center;
  margin: 3px;
}

</style>