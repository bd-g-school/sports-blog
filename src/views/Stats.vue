<template>
  <div class="stats-page">
    <h1>Behold, the Greatest Stats Ever!</h1>
    <p>Not really. But hey, we tried. <br/> Scroll to the bottom to submit your own!</p>
    <hr>
    <StatSubmission :stats='stats' />
  </div>
</template>

<script>
// @ is an alias to /src
import StatSubmission from '@/components/StatSubmission.vue'

export default {
  name: 'Stats',
  components: {
    StatSubmission
  },
  computed: {
    stats(){
      return this.$root.$data.stats;
    }
  }
}
</script>

<style scoped>
h1 {
  margin: 30px;
}

hr {
  border: 2.5px solid blue;
  width: 75%;
  margin: 20px;
  margin-left: auto;
  margin-right: auto;
  
}
</style>