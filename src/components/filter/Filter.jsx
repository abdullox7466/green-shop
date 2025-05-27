import React, { useState } from "react";
import { Slider } from "antd";
import 'antd/dist/reset.css';
import "./Filter.css";
import Mockdata from "../../Data/data";

function Filter() {
  const [priceRange, setPriceRange] = useState([0, 1500]);
  const [selectedSizes, setSelectedSizes] = useState([]);
  const [filteredData, setFilteredData] = useState(Mockdata);
  const [currentPage, setCurrentPage] = useState(1);
  const itemsPerPage = 6;
  const [selected, setSelected] = useState("select1");
  const [selectedCategory, setSelectedCategory] = useState(null);

  // Filtering function
  const handleFilter = (price = priceRange, sizes = selectedSizes, category = selectedCategory) => {
    const [minPrice, maxPrice] = price;

    let filtered = Mockdata.filter((item) => {
      const itemPrice = parseFloat(item.price.replace('$', '').replace(',', ''));
      const isPriceValid = itemPrice >= minPrice && itemPrice <= maxPrice;
      const isSizeValid = sizes.length === 0 || sizes.includes(item.size);
      const isCategoryValid = !category || item.category.includes(category);
      return isPriceValid && isSizeValid && isCategoryValid;
    });

    setFilteredData(filtered);
    setCurrentPage(1); // Reset to page 1 when filtering
  };

  // Handle price slider change
  const handleSliderChange = (value) => {
    setPriceRange(value);
    handleFilter(value, selectedSizes, selectedCategory);
  };

  // Handle size selection
  const handleSizeChange = (size) => {
    const newSizes = selectedSizes.includes(size)
      ? selectedSizes.filter((s) => s !== size)
      : [...selectedSizes, size];

    setSelectedSizes(newSizes);
    handleFilter(priceRange, newSizes, selectedCategory);
  };

  // Handle category selection
  const handleCategoryClick = (category) => {
    const newCategory = selectedCategory === category ? null : category;
    setSelectedCategory(newCategory);
    handleFilter(priceRange, selectedSizes, newCategory);
  };

  // Pagination logic
  const indexOfLastItem = currentPage * itemsPerPage;
  const indexOfFirstItem = indexOfLastItem - itemsPerPage;
  const currentItems = filteredData.slice(indexOfFirstItem, indexOfLastItem);
  const pageCount = Math.ceil(filteredData.length / itemsPerPage);

  const handlePageChange = (page) => {
    setCurrentPage(page);
  };

  // Available sizes
  const availableSizes = ["small", "medium", "large"];

  // Count items per size
  const getSizeCount = (size) => {
    return Mockdata.filter(item => item.size === size).length;
  };

  return (
    <div className="green-shop-container">
      <div className="shop-container">
        <div className="filter-wrapper">
          <div className="hammasi">
            <h3 className="filter-h3">Categories</h3>
            <div className="filter-links-wrapper">
              <nav className="nav-link">
                <ul>
                  {["House Plants", "Potter Plants", "Seeds", "Small Plants", "Big Plants", "Succulents", "Terrariums", "Gardening", "Accessories"].map((category) => (
                    <li key={category}>
                      <a
                        href="#"q
                        className={`name ${selectedCategory === category ? "selected" : ""}`}
                        onClick={() => handleCategoryClick(category)}>
                        {category} <span>({Mockdata.filter(item => item.category.includes(category)).length})</span>
                      </a>
                    </li>
                  ))}
                </ul>
              </nav>
            </div>


            <div className="filter-container">
              <h3 className="filter-title">Price Range</h3>
              <div className="slider">
                <div style={{ width: "200px" }}>
                  <Slider
                    range
                    min={0}
                    max={1500}
                    value={priceRange}
                    onChange={handleSliderChange}
                  />
                </div>
                <p className="filter-price">Price: ${priceRange[0]} – ${priceRange[1]}</p>  
                <button className="filter-button" onClick={() => handleFilter(priceRange, selectedSizes, selectedCategory)}>Filter</button>
              </div>
            </div>

            <div className="filter-size">
              <h3>Size</h3>
              <nav>
                <ul className="filter-ul">
                  {availableSizes.map((size) => (
                    <li key={size}>
                      <a
                        href="#"
                        className={`name ${selectedSizes.includes(size) ? "selected" : ""}`}
                        onClick={() => handleSizeChange(size)}
                      >
                        {size.charAt(0).toUpperCase() + size.slice(1)} <span>({getSizeCount(size)})</span>
                      </a>
                    </li>
                  ))}
                    <img className="sale" src="./src/assets/img-16.svg" alt="" />
                </ul>
              </nav>
            </div>
          </div>
        </div>

        {/* Display Filtered Products */}
        <div className="filter-links">
          <ul>
            <li className="active">All Plants</li>
            <li>New Arrivals</li>
            <li>Sale</li>
            <li className="filter-hr">
              <hr />
            </li>
            <li>
              Sort by:
              <select
                className="select_option"
                value={selected}
                onChange={(e) => setSelected(e.target.value)}
              >
                <option value="select1">Default sorting</option>
                <option value="select2">All Plants</option>
                <option value="select3">New Arrivals</option>
                <option value="select4">Sale</option>
              </select>
            </li>
          </ul>
          <div className="products">
            {currentItems.map((item) => (
              <div key={item.id} className="product-item">
                <img className="img" src={item.img} alt={item.name} />
                <h4>{item.name}</h4>
                <p>{item.price}</p>
              </div>
            ))}
            </div>
            <div className="pagination">
              {pageCount > 1 && (
                <>
                  <button
                  id="pagi"
                    className={currentPage === 1 ? "p-active" : ""}
                    onClick={() => handlePageChange(1)}
                  >
                    1
                  </button>
                  {pageCount > 1 && (
                    <button
                    id="pagi"
                      className={currentPage === 2 ? "p-active" : ""}
                      onClick={() => handlePageChange(2)}
                    >
                      2
                    </button>
                  )}
                </>
              )}
          </div>
        </div>
      </div>
    </div>
  );
}

export default Filter;
