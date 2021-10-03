<template>
  <div class="weather-card">
    <div
      v-if="!loading.weather && !loading.user"
      class="flex-column">
      <b-form-input v-model="search" @change="updateCity" placeholder="Search a city" />
      <span class="weather-title">{{ !updated ? `${userInfo.city}, ${userInfo.country}` : userInfo.city }}</span>
      <div class="weather-info">
        <div class="weather-icon-container">
          <iframe class="weather-icon" :src="weather.image" :alt="weather.description" />
          <span>{{ weather.description }}</span>
        </div>
        <div class="weather-section">
          <span class="weather-temperature">{{ weather.temperature }}</span>
          <div class="weather-wind-container">
            <span class="text-center">Wind</span>
            <span class="weather-wind">{{ weather.wind }}</span>
          </div>
        </div>
      </div>
      <hr>
      <span class="weather-subtitle">Forecast</span>
      <div class="forecast-container">
        <div
          v-for="item in weather.forecast" :key="item.day"
          class="forecast-day-container">
          <span class="forecast-day">{{ getDateAddingDays(item.day) }}</span>
          <span class="forecast-temperature">{{ formatTemperature(item.temperature) }}</span>
          <span class="forecast-wind-title">Wind</span>
          <span class="forecast-wind">{{ item.wind }}</span>
        </div>
      </div>
    </div>
    <b-spinner v-else type="grow" class="loading"></b-spinner>
  </div>
</template>

<script>
import axios from 'axios'
import constants from '../utils/constants.js'
import utils from '../utils/functions.js'
export default {
  name: 'Home',
  data () {
    return {
      loading: {
        user: false,
        weather: false
      },
      // Loaded from ip
      userInfo: {
        city: null,
        region: null,
        country: null
      },
      weather: {
        temperature: null,
        wind: null,
        description: null,
        image: null,
        forecast: []
      },
      search: null,
      updated: false
    }
  },

  beforeMount () {
    this.loadWeather()
  },
  methods: {
    // Fed using https://wttr.in/
    loadWeather () {
      this.loading.user = true
      this.loading.weather = true
      try {
        axios.get('https://api.techniknews.net/ipgeo/').then((response) => {
          this.userInfo.city = response.data.city
          this.userInfo.region = response.data.region
          this.userInfo.country = response.data.country
          this.loading.user = false
          if (this.userInfo.city != null) {
            axios
              .get(
                `https://goweather.herokuapp.com/weather/${this.userInfo.city}`
              )
              .then((response) => {
                this.weather.temperature = this.formatTemperature(response.data.temperature)
                this.weather.wind = response.data.wind
                this.weather.description = response.data.description
                this.weather.image = this.getVectorPath(this.weather.description)
                this.weather.forecast = response.data.forecast
                this.loading.weather = false
              }).catch((error) => {
                this.makeToast('NOT FOUND', `Couldn't find city '${this.userInfo.city}'`, 'danger')
              })
          }
        })
      } catch (error) {
        this.makeToast('ERROR', `Couldn't get your location`, 'warning')
        this.loading.user = false
        this.loading.weather = false
      }
    },

    updateCity () {
      this.loading.weather = true
      const oldWeather = { ...this.weather }
      if (this.search) {
        axios
          .get(
            `https://goweather.herokuapp.com/weather/${this.search}`
          )
          .then((response) => {
            this.weather.temperature = this.formatTemperature(response.data.temperature)
            this.weather.wind = response.data.wind
            this.weather.description = response.data.description
            this.weather.image = this.getVectorPath(this.weather.description)
            this.weather.forecast = response.data.forecast
            this.userInfo.city = utils.capitalizeFirstLetter(this.search)
            this.loading.weather = false
            this.updated = true
          }).catch((error) => {
            this.makeToast('NOT FOUND', `Couldn't find city '${this.search}'`, 'danger')
            this.weather = { ...oldWeather }
            this.loading.weather = false
          })
      } else {
        this.loadWeather()
      }
    },

    // Removes '+' if it's found
    formatTemperature (temperature) {
      return temperature.split('+').length === 1 ? temperature : temperature.split('+')[1]
    },

    // Returns the path to the svg file, so it can be loaded dynamically
    getVectorPath (name) {
      const svg = constants.weatherTypes.find(type => type.name === name).icon
      return require( `../assets/svg/${svg}.svg`);
    },

    getDateAddingDays (days = 0) {
      days = parseInt(days)
      const date = new Date();
      date.setDate(date.getDate() + days);
      return utils.capitalizeFirstLetter(utils.parseDate(date));
    },

    makeToast(title, message, variant) {
      this.$bvToast.toast(message, {
        title: title,
        variant: variant,
        solid: true
      })
    }
  }
}
</script>

<style scoped>
.weather-card {
  color: white;
  width: 600px;
  height: 470px;
  border: 2px solid black;
  border-radius: 5px;
  background-color: rgb(134, 180, 144);
  box-shadow: 3px 7px 14px -6px #000000;
}

.loading {
  color: white;
  height: 150px;
  width: 150px;
  margin: 0 auto;
  margin-top: 150px
}

.search {
  margin-bottom: 20px;
}

.weather-title {
  font-size: 28px;
  text-align: center;
}

.weather-subtitle {
  font-size: 26px;
  text-align: center;
}

.weather-temperature {
  font-size: 55px;
  text-align: center;
}

.weather-wind {
  font-size: 20px;
  text-align: center;
}

.weather-info {
  display: flex;
  justify-content: space-around;
  align-items: center;
  margin-bottom: 0px;
}

.weather-icon-container {
  display: flex;
  flex-direction: column;
  align-items: center;
}

iframe {
  border-width: 0
}

.weather-section {
  width: 300px;
  display: flex;
  justify-content: space-around;
  align-items: center;
}

.weather-wind-container {
  display: flex;
  flex-direction: column;
  align-content: center;
}

.weather-icon {
  width: 200px;
  height: 200px;
  margin-top: -30px;
  margin-bottom: -10px;
}

hr {
  border: 0;
  clear: both;
  display: block;
  width: 98%;               
  background-color: #ffffff85;
  height: 1px;
}

.forecast-container {
  display: flex;
  flex-direction: row;
  justify-content: space-around;
}

.forecast-day-container {
  width: 180px;
  display: flex;
  flex-direction: column;
  align-items: center;
}

.forecast-day {
  font-size: 20px;
}

.forecast-temperature {
  font-size: 20px;
}

.forecast-wind {
  font-size: 18px;
}

.forecast-wind-title {
  font-size: 16px;
}

.flex-row {
  display: flex;
  flex-direction: row;
}

.flex-column {
  display: flex;
  flex-direction: column;
}

@media only screen and (max-width: 610px) {
  .weather-card {
    width: 300px;
    height: 780px;
  }

  .weather-title {
    font-size: 20px;
  }

  .weather-subtitle {
    margin-top: -10px;
    margin-bottom: 10px;
  }

  .weather-info {
    flex-direction: column;
  }

  hr {
    width: 90%;
  }

  .forecast-container {
    flex-direction: column;
    align-items: center;
  }

  .forecast-day-container {
    margin-top: 5px;
    padding-bottom: 5px;
  }

  .forecast-day-container:not(:last-child) {
    border-bottom: 1px solid #ffffff85;
  }
}
</style>
