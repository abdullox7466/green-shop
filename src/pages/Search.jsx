import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import Data from "../Data/data"; // Mahsulotlar ro‘yxati
import "./search.css";

function Search() {
  const [searchTerm, setSearchTerm] = useState("");
  const [filteredData, setFilteredData] = useState(Data);
  const navigate = useNavigate(); // Navigatsiya uchun

  // Tasodifiy tartiblash funksiyasi
  const shuffleArray = (array) => {
    return array.sort(() => Math.random() - 0.5);
  };

  const handleSearch = (e) => {
    const term = e.target.value.toLowerCase();
    setSearchTerm(term);

    // Filtrlash
    const filtered = Data.filter(
      (item) =>
        item.name.toLowerCase().includes(term) || // Nomi bo‘yicha
        item.category.toLowerCase().includes(term) // Kategoriya bo‘yicha
    );

    setFilteredData(shuffleArray(filtered));
  };

  // 🔴 Exit tugmasi bosilganda Home sahifaga qaytish
  const handleExitSearch = () => {
    navigate("/");
  };

  return (
    <div className="search-container">
      <div className="search-header">
        <button className="exit-button" onClick={handleExitSearch}>
          back
        </button>
        <input
        type="text"
        className="search-input"
        placeholder="Search for plants..."
        value={searchTerm}
        onChange={handleSearch}
      />
      </div>
      
      <div className="results-container">
        {filteredData.map((item) => (
          <div key={item.id} className="result-card">
            <img src={item.img} alt={item.name} />
            <h3>{item.name}</h3>
            <p>Size: {item.size}</p>
          </div>
        ))}
        {filteredData.length === 0 && <p>No results found.</p>}
      </div>
    </div>
  );
}

export default Search;
