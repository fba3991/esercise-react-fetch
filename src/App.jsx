import { useEffect, useState } from 'react'
import CountryCard from './components/CountryCard'
import './App.css'
import SearchBar from './components/SearchBar'

function App() {
  const [countries, setCountries] = useState([])
  const [searchValue, setSearchValue] =useState();
  
  const onSearch =() =>{
   
      fetch(`https://restcountries.com/v3.1/name/${searchValue}`)
       .then(response => response.json())
       .then(obj =>{
             console.log(obj);
             setCountries(obj);
       })
         /* ogni volta che name cambia parte il fetch */
  }
  
  
  
  useEffect(() =>{
  fetch(`https://restcountries.com/v3.1/all`)
   .then(response => response.json())
   .then(obj =>{
         console.log(obj);
         setCountries(obj);
   })
  }, []) /* ogni volta che name cambia parte il fetch */
  return (
    <>
      <div>
        {/* <input type="text" value={name} onChange={(e) => setName(e.target.value)} /> */}
        <SearchBar value={searchValue} onChange={(newValue) =>setSearchValue(newValue)} onSearch={onSearch}/>
        {countries.map((country, i) => (
          <CountryCard
            key={i}
            countryName={country.name.official}
            flagUrl={country.flags.png}
            population={country.population}
            capital={country.capital}
          />
        ))}
      </div>
    </>
  );
        }

export default App