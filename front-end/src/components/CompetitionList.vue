<template>
<div class="wrapper">
  <div id="navbar" class='not-sticky'>
    <a href="#competitions">Competitions</a>
    <a href="#fan-event-sub">Local Submission</a>
  </div>
  <div id = "competitions" class="competitions">
    <div class="competition" v-for="competition in competitions" :key="competition.id">
      <SingleCompetition :competition="competition" />
    </div>
  </div>
  <form class="stat-submit-form" id="fan-event-sub" v-on:submit.prevent="addCompetition">
      <h4>You can submit your own event too as a fan submission - help us keep track of local games and scores below!</h4>
      <p>Event and winner names required!<p>
      <div class='stat-row'>
        <label for = "new_event_name">Event Name</label> 
        <input id="new_event_name" v-model="new_event_name">
      </div>
      <div class='stat-row'>
        <label for = "new_event_date">Event Date</label> 
        <input id="new_event_date" v-model="new_event_date">
      </div>
      <div class='stat-row'>
        <label for = "new_event_">Event Type</label> 
        <v-select id="new_event_type" v-model="new_event_type" :options="['American Football', 'Track & Field', 'Wrestling', 'Baseball',
              'Basketball', 'Hockey', 'Tennis', 'International Football (Soccer)', 'Swimming', 'Other']"></v-select>
      </div>
      <div class='stat-row'>
        <label for = "new_winner_first_name">Winner First Name</label> 
        <input id="new_winner_first_name" v-model="new_winner_first_name">
      </div>
      <div class='stat-row'>
        <label for = "new_winner_la st_name">Winner Last Name</label> 
        <input id="new_winner_last_name" v-model="new_winner_last_name">
      </div>
      <div class='stat-row'>
         <label for = "new_sponsor">Sponsor Name</label> 
        <input id="new_sponsor" v-model="new_sponsor">
      </div>
      <div class='stat-row'>
        <label for = "new_sponsor_catch_phrase st_name">Sponsor Slogan</label> 
        <input id="new_sponsor_catch_phrase" v-model="new_sponsor_catch_phrase">
      </div>
      <br />
      <button type="submit">Add New Competition</button>
  </form>
</div>
</template>

<script>
import axios from 'axios';
import SingleCompetition from '@/components/SingleCompetition.vue';
import 'vue-select/dist/vue-select.css';
import "toastify-js/src/toastify.css";
import Toastify from 'toastify-js';

export default {
  name: 'CompetitionList',
  components: {
    SingleCompetition,
  },
  data() {
    return {
      new_winner_first_name: '',
      new_winner_last_name: '',
      new_event_type: '',
      new_event_date: '',
      new_sponsor: '',
      new_event_name: '',
      new_sponsor_catch_phrase: '',
      competitions: [],
    }
  },
  created() {
    this.getCompetitions();
    window.addEventListener('scroll', this.handleScroll);
  },
  destroyed () {
    window.removeEventListener('scroll', this.handleScroll);
  },
  methods: {
    handleScroll () {
      var navbar = document.getElementById("navbar");
      var menuheader = document.getElementById("menu-header");
      
      var headerHeight = menuheader.offsetHeight;
      if (window.pageYOffset >= headerHeight) {
        navbar.classList.add("sticky");
      } else {
        navbar.classList.remove("sticky");
      }
    },
    async addCompetition() {
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
        await axios.post("/api/competition", {
          winner_first_name: this.new_winner_first_name,
          winner_last_name: this.new_winner_last_name,
          event_date: this.new_event_date,
          event_type: this.new_event_type,
          sponsor: this.new_sponsor,
          event_name: this.new_event_name,
          sponsor: this.new_sponsor,
          sponsor_catch_phrase: this.new_sponsor_catch_phrase
        });
        this.new_winner_first_name = '';
        this.new_winner_last_name = '';
        this.new_event_date = '';
        this.new_event_type = '';
        this.new_sponsor = '';
        this.new_event_name = '';
        this.new_sponsor_catch_phrase = '';

        this.getCompetitions();
        return true;
      } catch (error) {
        console.log(error);
      }
    },
    async getCompetitions() {
      try {
        let response = await axios.get("/api/competition");
        this.competitions = response.data.competitions;
        return true;
      } catch (error) {
        console.log(error);
      }
    },
  }
}
</script>

<style scoped>
#navbar {
  overflow: hidden;
  background-color: #C5C6C7;
  border-top: 2px solid blue;
  border-bottom: 2px solid blue;
  z-index: 1;
}

#navbar a {
  float: left;
  display: block;
  color: black;
  text-align: center;
  padding: 14px;
  text-decoration: none;
}

.not-sticky {
  display: none;
}

.sticky {
  display: block;
  position: fixed;
  top: 0;
  width: 100%;
}

#new_event_type {
  min-width: 250px;
}

.wrapper {
  display: flex;
  align-items: center;
  justify-content: center;
  flex-direction: column;
}
.competitions {
  margin-top: 20px;
  display: flex;
  flex-wrap: wrap;
  justify-content: space-around;
}

.competitions * {
  margin: 5px;
}

.stat-submit-form {
  width: 60%;
  margin: 30px;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
}

.stat-row {
  width: 60%;
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: space-between;
  padding: 5px;
}

.stat-row * {
  margin: 5px;
}

button {
  padding: 3px;
}

@media only screen and (max-width: 600px) {
  .stat-submit-form {
    width: 90%;
    margin: 0px;
    padding: 5px;
  }

  .stat-row {
    width: 100%;
    display: flex;
    flex-direction: row;
    align-items: center;
    justify-content: space-between;
    padding: 5px;
  }

}

</style>