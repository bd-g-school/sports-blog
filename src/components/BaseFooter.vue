<template>
  <div class="footer-container">
    <hr class="footer-divide">
    <div class="footer">
      <li class = "info"><a class = "footer-link source-link" target="_blank"
        href="https://github.com/bd-g/sports-blog/tree/cp3">
        Click Here for Source Code</a>
      </li>
    </div>
    <hr class="footer-divide">
  </div>
</template>

<script>
export default {
  name: 'BaseFooter',
}
</script>

<style scoped>
* {
  margin: 0;
  padding: 0;
  font-family: 'Lato' sans-serif;
}
.footer-container {
  left: 0;
  bottom: 0;
  width: 100%;
  height: 85px;
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
  background-color: #e6e6e6;
}
.footer-divide {
  width: 60%;
  height: 1px;
  margin-left: auto;
  margin-right: auto;
  background-color: blue !important;
  margin: 6px;
}
.footer {
  list-style: none;
}
.info {
  text-align: center;
}
.footer-link {
  margin: 4px;
  font-size: 90%;
  text-align: center;
  text-decoration: none;
  color: black;
}
.source-link {
  font-size: 70%;
}
.footer-link:hover{
  background-color: transparent;
  text-decoration: underline;
  color: black;
}
</style>