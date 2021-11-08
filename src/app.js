console.log("lorem");
import axios from "axios";

async function countryInfoFunction() {
  try {
    const countryInfoResult = await axios.get(
      "https://restcountries.com/v2/all"
    );

    const countryNames = document.getElementById("countryDiv");

    const sorter = countryInfoResult.data;
    sorter.sort((a, b) => {
      return a.population - b.population;
    });

    countryNames.innerHTML = countryInfoResult.data
      .map((country) => {
        return `

<div class="flex">
<li id="countryItem">
<img src="${country.flags.svg}" alt="country flag" class="flag"/>
<p class="${regionColorFunction(country.region)}"> ${country.name}</p> 
<p>Total population of: ${country.population}</p>
<p>located in: ${country.region}.</p>
</li>

</div>

`;
      })
      .join("");
    console.log(countryInfoResult);
  } catch (e) {
    console.error(e);
  }
}

countryInfoFunction();

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
