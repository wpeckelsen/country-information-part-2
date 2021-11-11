/*
console.log("lorem");
import axios from "axios";

async function countryInfoFunction() {

  try {

    const countryInfoResult = await axios.get(
      "https://restcountries.com/v2/all"
    );

    function regionColorFunction(country) {
      if (country === "Asia") {
        return "asia";
      } else if (country === "europe") {
        return "europe";
      } else if (country === "africa") {
        return "africa";
      } else if (country === "oceania") {
        return "oceania";
      } else if (country === "americas") {
        return "americas";
      }
    }

    const countryNames = document.getElementById("countryDiv");

    const sorter = countryInfoResult.data;
    sorter.sort((a, b) => {
      return a.population - b.population;
    });

    countryNames.innerHTML = countryInfoResult.data.map((country) => {
        return `


<div class="flex">

<div id="countryItem">
<img src="${country.flags.svg}" alt="country flag" class="flag"/>
<h3 class="${regionColorFunction(country.region)}"> ${country.name}</h3> 

<ul>
<li>${country.name} is located in: ${country.region}.</li>
<li>It has a total population of ${country.population} people</li>
<li>The capital is ${country.capital}</li>
<li>you can pay with ${country.currencies.name} and ${country.currency[1]}</li>
</ul>

</div>

</div>
`;}).join("");

    console.log(countryInfoResult);

  }

  catch (e) {console.error(e);}

}

countryInfoFunction();
*/
