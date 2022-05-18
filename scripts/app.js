function init() {

  const countryList = document.querySelector('#countries')
  const url = 'https://restcountries.com/v3.1/all'
  let countries = []

  async function getCountries() {
    try {
      const response = await window.fetch(url)
      countries = await response.json()
      displayCountries()
    } catch (err) {
      console.log('Something went wrong')
    }
  }

  function displayCountries() {
    const htmlList = countries.map(country => {
      return `
      <div id="country">
        <h2>${country.name.common}</h2>
        <h3>${country.region}</h3>
        <img src=${country.flags.png}>
      </div>`
    })
    countryList.innerHTML = htmlList.join('')
  }


  getCountries()


}
window.addEventListener('DOMContentLoaded', init)