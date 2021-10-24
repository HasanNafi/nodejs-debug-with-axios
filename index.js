var axios = require('axios');

var url = "https://restcountries.com/v3.1/all";
axios.get(url).then(function(response) {

    let countryList = response.data;
    let status = response.status;
    console.log(countryList);
    console.log(status);


}).catch(function(error) {
    console.log("error");

})