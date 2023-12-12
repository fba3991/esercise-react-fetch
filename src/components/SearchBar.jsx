

const SearchBar = ({value, onChange, onSearch}) =>{
    
    return(
        <div>
      <input type="text" value={value} onChange={(e) => onChange(e.target.value) } />
      <button onClick={onSearch}>cerca</button>
    </div>
      )
}

export default SearchBar