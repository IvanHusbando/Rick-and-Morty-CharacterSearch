import React, { useState } from 'react';

const SearchBar = () => {
  const [searchTerm, setSearchTerm] = useState('');
  const [searchResults, setSearchResults] = useState([]);
  const [showNoResults, setShowNoResults] = useState(false);

  const handleInputChange = (event) => {
    setSearchTerm(event.target.value);
    setShowNoResults(false); // Reset no results message on input change
  };

  const handleSearch = () => {
    // Verifica si el término de búsqueda está vacío
    if (searchTerm.trim() === '') {
      return; // No realiza la búsqueda si está vacío
    }

    fetch(`https://rickandmortyapi.com/api/character/?name=${searchTerm}`)
      .then(response => response.json())
      .then(data => {
        setSearchResults(data.results || []);
        setShowNoResults(!data.results || data.results.length === 0);
      })
      .catch(error => {
        console.error('Error searching characters:', error);
        setShowNoResults(true);
      });
  };

  return (
    <div>
      <div className="mb-3">
        <h5 className='text-white'>Search name</h5>
        <input
          type="text"
          className="form-control bg-dark text-white"
          placeholder="Search by"
          value={searchTerm}
          onChange={handleInputChange}
        />
      </div>
      <button className="page-link btn btn-sm bg-dark text-white border px-4 py-2" onClick={handleSearch}>Search</button>

      {showNoResults && <div className="text-white mt-5 lead">No results 😔</div>}

      <div className="row mt-3 border-0">
        {Array.isArray(searchResults) && searchResults.length > 0 && searchResults.map((character) => (
          <div key={character.id} className="col-md-4 mb-3 border-0">
            <div className="className='card rounded bg-dark text-white" style={{minWidth: "200px"}}>
              <img src={character.image} className="card-img-top border-0" alt={`${character.name}`} />
              <div className="card rounded bg-dark text-white">
                <h5 className="">{character.name}</h5>
                <hr/>
                <p className=""><strong>Species:</strong> {character.species}</p>
                <p className=""><strong>Location:</strong> {character.location.name}</p>
              </div>
            </div>
          </div>
        ))}
      </div>

      {searchResults.length > 0 && <div className="text-white text-center display-4">End of results</div>}
    </div>
  );
};

export default SearchBar;
