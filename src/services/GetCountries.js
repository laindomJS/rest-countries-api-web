const urlAll = 'https://restcountries.com/v3.1/all';
const urlCountry = `https://restcountries.com/v3.1/name`;

export async function getAllCountries() {
  const res = await fetch(urlAll); 
  const data = await res.json();
  // console.log(data);
  return data;
}

export async function getCountry(country) {
  const res = await fetch(`${urlCountry}/${country}`);
  const data = await res.json();
  // console.log(data);
  return data;
}
