<template>
  <div class="competitions-home">
    <h1>Previously Hosted Track Meets</h1>
    <CompetitionList :competitions='competitions' />
  </div>
</template>

<script>
// @ is an alias to /src
import CompetitionList from '@/components/CompetitionList.vue'

export default {
  name: 'Competitions',
  components: {
    CompetitionList
  },
  computed: {
    competitions(){
      return this.$root.$data.competitions;
    }
  }
}
</script>

<style scoped>
h1 {
  margin: 30px;
}
</style>