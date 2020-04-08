<template>
  <div class="home">
    <h1>Brent's Sports Blog</h1>
    <h5>Home to extremely limited and often dated sports news and events</h5>
    <img class="home-image" src="../assets/various-sports.png">
    <h6>You should probably just go to ESPN...</h6>
  </div>
</template>

<script>
export default {
  name: 'Home',
  components: {
   
  },
  computed: {

  }
}
</script>

<style scoped>
h1 {
  margin: 20px;
  font-size: 6em;
}

h5 {
  margin: 20px;
}

h6 {
  margin: 20px;
}

.home-image {
  width: 50%;
}

@media only screen 
and (max-device-width: 600px){ 
  .home-image {
    width: 80%;
  }
}
</style>
