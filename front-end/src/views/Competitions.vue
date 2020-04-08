<template>
  <div class="competitions-home">
    <div id="navbar" class='not-sticky'>
      <a href="#football-games">Football Games</a>
      <a href="#track-meets">Track Meets</a>
    </div>
    <h1 id = "football-games">Previously Hosted Football Games</h1>
    <CompetitionList :competitions='football_competitions' />
    <h1 id = "track-meets">Previously Hosted Track Meets</h1>
    <CompetitionList :competitions='track_competitions' />
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
    football_competitions(){
      return this.$root.$data.football_competitions;
    },
    track_competitions(){
      return this.$root.$data.track_competitions;
    },
  },
  created () {
    window.addEventListener('scroll', this.handleScroll);
  },
  destroyed () {
    window.removeEventListener('scroll', this.handleScroll);
  },
  methods: {
    handleScroll () {
      var navbar = document.getElementById("navbar");
      var menuheader = document.getElementById("menu-header");
      // var sticky = navbar.offsetTop;
      var headerHeight = menuheader.offsetHeight;
      if (window.pageYOffset >= headerHeight) {
        navbar.classList.add("sticky");
      } else {
        navbar.classList.remove("sticky");
      }
    }
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