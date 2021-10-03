function parseDate (date, language = 'default') {
  let options = { month: 'long', day: 'numeric' };
  return date.toLocaleString(language, options)
}

function capitalizeFirstLetter (str) {
  return str.charAt(0).toUpperCase() + str.slice(1)
}

export default { parseDate, capitalizeFirstLetter }