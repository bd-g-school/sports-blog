<template>
  <div class="competitions-home">
    <CompetitionList />
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
}
</script>

<style scoped>
h1 {
  margin: 30px;
}
#navbar {
  overflow: hidden;
  background-color: #C5C6C7;
  border-top: 2px solid blue;
  border-bottom: 2px solid blue;
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
</style>