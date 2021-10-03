<template>
  <div class="home">
    <h1 class="home-title">The typical Weather App</h1>
    <WeatherCard class="card"/>
  </div>
</template>

<script>
import WeatherCard from '../components/WeatherCard.vue'
export default {
  name: 'Home',
  components: {
    WeatherCard
  },
  data () {
    return {
    }
  }
}
</script>

<style scoped>
  .home {
    padding-top: 50px;
    height: 100vh;
    width: 100vw;
    background-color: rgb(194, 222, 240);
  }

  .home-title {
    color: black;
    text-align: center;
    margin-bottom: 30px;
  }

  .card {
    margin: 0 auto;
  }
</style>