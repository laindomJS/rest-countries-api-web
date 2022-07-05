const urlAll = 'https://restcountries.com/v3.1/all';

export async function getAllCountries() {
  const res = await fetch(urlAll); 
  const data = await res.json();
  // console.log(data);
  return data;
}


