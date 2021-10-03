const weatherTypes = [
  {
    name: 'Heavy rain and hail with thunderstorm',
    icon: 'c_3_thunderstorm'
  },
  {
    name: 'Heavy rain with thunderstorm',
    icon: 'c_3_thunderstorm'
  },
  {
    name: 'Light rain and hail with thunderstorm',
    icon: 'c_3_thunderstorm'
  },
  {
    name: 'Light rain and snow shower',
    icon: 'd_3_sleet'
  },
  {
    name: 'Light rain with thunderstorm',
    icon: 'c_3_thunderstorm'
  },
  {
    name: 'Light snow shower',
    icon: 'd_1_snow'
  },
  {
    name: 'Parftial fog',
    icon: 'd_4_fog'
  },
  {
    name: 'Rain and hail with thunderstorm',
    icon: 'c_3_thunderstorm'
  },
  {
    name: 'Rain with thunderstorm',
    icon: 'c_3_thunderstorm'
  },
  {
    name: 'Shallow fog',
    icon: 'd_4_fog'
  },
  {
    name: 'Smoke',
    icon: 'd_4_fog'
  },
  {
    name: 'Squalls',
    icon: 'd_3_sleet'
  },
  {
    name: 'Thunderstorm in vicinity',
    icon: 'c_3_thunderstorm'
  },
  {
    name: 'Snow',
    icon: 'd_1_snow'
  },
  {
    name: 'Rain',
    icon: 'c_1_rainy'
  },
  {
    name: 'Light Rain, Rain Shower',
    icon: 'c_1_rainy'
  },
  {
    name: 'Rain Shower',
    icon: 'c_1_rainy'
  },
  {
    name: 'Patches of fog',
    icon: 'd_4_fog'
  },
  {
    name: 'Drizzle',
    icon: 'c_1_rainy'
  },
  {
    name: 'Light drizzle',
    icon: 'c_1_rainy'
  },
  {
    name: 'Low drifting snow',
    icon: 'd_1_snow'
  },
  {
    name: 'Light rain and snow',
    icon: 'd_3_sleet'
  },
  {
    name: 'Shower in vicinity',
    icon: 'c_1_rainy'
  },
  {
    name: 'Rain with thunderstorm',
    icon: 'c_3_thunderstorm'
  },
  {
    name: 'Rain and snow shower',
    icon: 'd_3_sleet'
  },
  {
    name: 'Thunderstorm',
    icon: 'c_3_thunderstorm'
  },
  {
    name: 'Drizzle and rain',
    icon: 'c_1_rainy'
  },
  {
    name: 'Hail with thunderstorm',
    icon: 'c_3_thunderstorm'
  },
  {
    name: 'Haze',
    icon: 'd_4_fog'
  },
  {
    name: 'Light drizzle and rain',
    icon: 'c_1_rainy'
  },
  {
    name: 'Light rain and small hail/snow pallets with thunderstorm',
    icon: 'd_3_sleet'
  },
  {
    name: 'Clear',
    icon: 'a_1_sunny'
  },
  {
    name: 'Sunny',
    icon: 'a_3_very_sunny'
  },
  {
    name: 'Partly cloudy',
    icon: 'b_1_partly_cloudy'
  },
  {
    name: 'Cloudy',
    icon: 'b_2_cloudy'
  },
  {
    name: 'Overcast',
    icon: 'b_3_very_cloudy'
  },
  {
    name: 'Mist',
    icon: 'd_4_fog'
  },
  {
    name: 'Patchy rain possible',
    icon: 'c_1_rainy'
  },
  {
    name: 'Patchy snow possible',
    icon: 'd_1_snow'
  },
  {
    name: 'Patchy sleet possible',
    icon: 'd_3_sleet'
  },
  {
    name: 'Patchy freezing drizzle possible',
    icon: 'c_1_rainy'
  },
  {
    name: 'Thundery outbreaks possible',
    icon: 'c_3_thunderstorm'
  },
  {
    name: 'Blowing snow',
    icon: 'd_1_snow'
  },
  {
    name: 'Blizzard',
    icon: 'd_2_heavy_snow'
  },
  {
    name: 'Fog',
    icon: 'd_4_fog'
  },
  {
    name: 'Freezing fog',
    icon: 'd_4_fog'
  },
  {
    name: 'Patchy light drizzle',
    icon: 'c_1_rainy'
  },
  {
    name: 'Light drizzle',
    icon: 'c_1_rainy'
  },
  {
    name: 'Freezing drizzle',
    icon: 'c_1_rainy'
  },
  {
    name: 'Heavy freezing drizzle',
    icon: 'c_1_rainy'
  },
  {
    name: 'Patchy light rain',
    icon: 'c_1_rainy'
  },
  {
    name: 'Light rain',
    icon: 'c_1_rainy'
  },
  {
    name: 'Moderate rain at times',
    icon: 'c_1_rainy'
  },
  {
    name: 'Moderate rain',
    icon: 'c_1_rainy'
  },
  {
    name: 'Heavy rain at times',
    icon: 'c_2_heavy_rain'
  },
  {
    name: 'Heavy rain',
    icon: 'c_2_heavy_rain'
  },
  {
    name: 'Light freezing rain',
    icon: 'c_1_rainy'
  },
  {
    name: 'Moderate or heavy freezing rain',
    icon: 'c_1_rainy'
  },
  {
    name: 'Light sleet',
    icon: 'd_3_sleet'
  },
  {
    name: 'Moderate or heavy sleet',
    icon: 'd_3_sleet'
  },
  {
    name: 'Patchy light snow',
    icon: 'd_1_snow'
  },
  {
    name: 'Light snow',
    icon: 'd_1_snow'
  },
  {
    name: 'Patchy moderate snow',
    icon: 'd_1_snow'
  },
  {
    name: 'Moderate snow',
    icon: 'd_1_snow'
  },
  {
    name: 'Patchy heavy snow',
    icon: 'd_2_heavy_snow'
  },
  {
    name: 'Heavy snow',
    icon: 'd_2_heavy_snow'
  },
  {
    name: 'Ice pellets',
    icon: 'c_3_thunderstorm'
  },
  {
    name: 'Light rain shower',
    icon: 'c_1_rainy'
  },
  {
    name: 'Moderate or heavy rain shower',
    icon: 'c_2_heavy_rain'
  },
  {
    name: 'Torrential rain shower',
    icon: 'c_2_heavy_rain'
  },
  {
    name: 'Light sleet showers',
    icon: 'd_3_sleet'
  },
  {
    name: 'Moderate or heavy sleet showers',
    icon: 'd_3_sleet'
  },
  {
    name: 'Light snow showers',
    icon: 'd_1_snow'
  },
  {
    name: 'Moderate or heavy snow showers',
    icon: 'd_2_heavy_snow'
  },
  {
    name: 'Patchy light rain with thunder',
    icon: 'g_1_stormy'
  },
  {
    name: 'Moderate or heavy rain with thunder',
    icon: 'g_1_stormy'
  },
  {
    name: 'Patchy light snow with thunder',
    icon: 'd_1_snow'
  },
  {
    name: 'Moderate or heavy snow with thunder',
    icon: 'd_2_heavy_snow'
  }
]

export default { weatherTypes }