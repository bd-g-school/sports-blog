<template>
  <div class="wrapper">
    <div v-if="stats.length == 0">
      <h4>No stats yet to display - submit yours today!</h4>
    </div>
    <div v-else>
      <div v-for="stat in stats" :key='stat.id'>
        <div class="flex-column">
          <hr class="gray-hr">
          <p class="stat-info">{{stat.stat}}</p>
          <p><i>-- {{stat.name}}</i></p>
          <div class="flex-row">
            <button @click="verify(stat)">Verify!</button>
            <button @click="debunk(stat)">Debunk!</button>
          </div>
          <div class="reviewCheck">
            <p>Verified by {{stat.verified}} and debunked by {{stat.debunked}}</p>
            <div v-if="stat.verified > stat.debunked">
              <p>Most likely true!</p>
            </div>
            <div v-else-if="stat.verified < stat.debunked">
              <p>Ehhh, better Google this one to double check</p>
            </div>
            <div v-else>
              <p>Looks like there is some disagreement here - verify or debunk this stat to help others know if it's true!</p>
            </div>
          </div>
        </div>
      </div>  
    </div> 
    <hr class='blue-hr'>
    <form class="stat-submit-form" v-on:submit.prevent="addStat">
        <p><input v-model="addedName" placeholder="Name"></p>
        <textarea v-model="addedStat"></textarea>
        <br />
        <button type="submit">Submit My Stat</button>
    </form>
  </div>    
</template>

<script>
import axios from 'axios';
import "toastify-js/src/toastify.css";
import Toastify from 'toastify-js';

export default {
  name: 'StatSubmission',
  data () {
    return {
      addedName: '',
      addedStat: '',
      stats: []
    }
  },
  created(){
    this.getStats();
  },
  methods: {
    async addStat() {
      if (this.addedName == '' || this.addedStat == ''){
        Toastify({
          text: "Fill in all fields!",
          duration: 3000,
          backgroundColor: "#0000EE",
          gravity: "bottom", 
          position: 'right', 
          stopOnFocus: true
        }).showToast();
        return;
      }
      try {
        await axios.post("/api/stat", {
          name: this.addedName,
          stat: this.addedStat
        });
        this.addedName = '';
        this.addedStat = '';

        this.getStats();
        return true;
      } catch (error) {
        console.log(error);
      }
    },
    async getStats() {
      try {
        let response = await axios.get("/api/stat");
        this.stats = response.data.stats;
        return true;
      } catch (error) {
        console.log(error);
      }
    },
    async verify(stat){
      try {
        await axios.put("/api/stat/" + stat._id, {
          isVerification: true
        });
        this.getStats();
        return true;
      } catch (error) {
        console.log(error);
      }
    },
    async debunk(stat){
      try {
        await axios.put("/api/stat/" + stat._id, {
          isDebunked: true
        });
        this.getStats();
        return true;
      } catch (error) {
        console.log(error);
      }
    },
  },
}
</script>


<style scoped>
button {
    font-family: 'Montserrat', sans-serif;
    font-size: 1em;
    margin: 2px;
}

.gray-hr {
  height: 0px;
  border: 1px solid gray;
  width: 70%;
}

.blue-hr {
  border: 2.5px solid blue;
  width: 75%;
  margin: 20px;
  margin-left: auto;
  margin-right: auto;
  
}

textarea {
    width: 100%;
    max-width: 500px;
    height: 100px;
}

.wrapper {
  width: 100%;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
}
.stat-info {
  font-size: 1.6em;
  width: 80%;
}

.stat-submit-form {
  width: 80%;
  max-width: 500px;
  margin: 30px;
  display: flex;
  flex-direction: column;
  align-items: flex-start;
}

.flex-column {
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
}
.flex-row {
  display: flex;
  flex-direction: row;
  justify-content: center;
  align-items: center;
}

.reviewCheck {
  font-size: .8em;
}

.reviewCheck * {
  margin: 0px;
  padding: 0px;
}
</style>
