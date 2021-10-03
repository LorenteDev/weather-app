<template>
  <footer>
    <a
      href="https://github.com/LorenteDev"
      target="_blank"
      rel="noopener noreferrer">
        LorenteDev 🌈
    </a>
    <a
      href="https://github.com/robertoduessmann/weather-api"
      target="_blank"
      rel="noopener noreferrer">
      Weather API ⛅
    </a>
    <a
      href="https://github.com/philanri/weather-icons"
      target="_blank"
      rel="noopener noreferrer">
      Weather Icons 🖌️
    </a>
  </footer>
</template>

<style scoped>
  footer {
    height: 50px;
    background-color: #00000086;
    color: white;
    position: fixed;
    bottom: 0;
    width: 100vw;
    display: flex;
    justify-content: space-around;
  }

  a {
    color: white;
    text-decoration: none;
    margin-top: 10px;
  }

  a:hover {
    color: rgb(218, 218, 218);
    text-decoration: none;
  }
</style>
