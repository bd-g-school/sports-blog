<template>
  <div id="app">
    <MenuHeader/>
    <router-view/>
    <BaseFooter/>
  </div>
</template>

<script>
import MenuHeader from '@/components/MenuHeader.vue'
import BaseFooter from '@/components/BaseFooter.vue'
export default {
  name: 'App',
  components: {
    MenuHeader,
    BaseFooter
  },
}
</script>

<style>
@import url('https://fonts.googleapis.com/css?family=Lato:300,400&display=swap');
#app {
  font-family: 'Lato', sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
}
* {
	margin: 0;
  padding: 0;
}

@import'~bootstrap/dist/css/bootstrap.css'
</style>