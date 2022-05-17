function init() {

  const countryList = document.querySelector('#countries')
  const url = 'https://restcountries.eu/rest/v2/all'
  let countries = []

  async function getCountries() {
    try {
      const response = await window.fetch(url)
      countries = await response.json()
      displayCountries()
    } catch (err) {
      console.log('Something we wrong')
    }
  }

  function displayCountries() {
    const htmlList = countries.map(country => {
      return `
      <div id="country">
        <h2>${country.name}</h2>
        <h3>${country.nativeName}</h3>
        <img src=${country.flag}>
      </div>`
    })
    countryList.innerHTML = htmlList.join('')
  }


  getCountries()


}
window.addEventListener('DOMContentLoaded', init)