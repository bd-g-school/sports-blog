<template>
<div class="wrapper">
  <div class="competitions">
    <div class="competition" v-for="competition in competitions" :key="competition.id">
      <div class="title">
        <h3>{{competition.event_name}}</h3>
      </div>
      <div class='winner'>
        <h5>Winner: {{competition.winner_first_name}} {{competition.winner_last_name}}</h5>
        <img :src="competition.winner_avatar">
      </div>
      <div class="sponsor">
        <h5>Event Sponsor: {{competition.sponsor}}</h5>
        <p>{{competition.sponsor_catch_phrase}}</p>
      </div>
    </div>
  </div>
</div>
</template>

<script>
export default {
  name: 'CompetitionList',
  props: {
    competitions: Array
  },
}
</script>

<style scoped>
.wrapper {
  display: flex;
  align-items: center;
  justify-content: center;
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

.competition {
  background-color: #e6e6e6;
  padding: 0px;
  display: flex;
  align-items: center;
  justify-content: center;
  flex-direction: column;
  width: 250px;
  margin: 30px;
}

.title {
  border: solid blue 1px;
  border-radius: 8px;
  margin: 10px;
  width: 220px;
}

.title h1{ 
  display: flex;
  align-items: center;
  justify-content: center;
}

.winner {
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
}

.winner img {
  border: 2px solid #333;
  height: 250px;
  width: 200px;
  object-fit: cover;
  margin-bottom: 15px;
  margin-top: 15px;
}

.sponsor {
  border: solid blue 1px;
  border-radius: 8px;
  display: flex;
  align-items: center;
  justify-content: center;
  flex-direction: column;
  width: 200px;
}

.sponsor p {
  font-size: .7em;
}

</style>