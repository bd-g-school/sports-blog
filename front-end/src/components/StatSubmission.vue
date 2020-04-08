<template>
  <div class="wrapper">
    <div v-if="stats.length == 0">
      <h4>No stats yet to display - submit yours today!</h4>
    </div>
    <div v-else>
      <h4>Crazy Stats!</h4>
      <div v-for="stat in stats" :key='stat.id'>
          <hr>
          <p>{{stat.text}}</p>
          <p><i>-- {{stat.author}} on {{stat.time}}</i></p>
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
export default {
  name: 'StatSubmission',
  props: {
    stats: Array,
  },
  methods: {
    addStat() {
      var	now = new Date();
			this.stats.push({
        author: this.addedName,
        text: this.addedStat,
        time: now.toDateString() + " " + now.toLocaleTimeString()
			});
			this.addedName = '';
			this.addedStat = '';
		},
  },
  computed: {
    addedName: {
      get(){
        return this.$root.$data.addedName;
      },
      set(newName){
        this.$root.$data.addedName = newName;
      } 
    },
    addedStat: {
      get(){
        return this.$root.$data.addedStat;
      },
      set(newStat) {
        this.$root.$data.addedStat =  newStat;
      }
    },
  }
}
</script>


<style scoped>
button {
    font-family: 'Montserrat', sans-serif;
    font-size: 1em;
    margin: 2px;
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

.stat-submit-form {
  width: 80%;
  max-width: 500px;
  margin: 30px;
  display: flex;
  flex-direction: column;
  align-items: flex-start;
}
</style>
