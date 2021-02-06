import React from 'react'

const Filter = ({count,size,sort,handleFilterProducts,handleSortProducts}) => {
    return (
        <div className='filter'>
            <div className="filter-results">
                 <p>{count} Products is available</p>
            </div>
            <div className="filter-sort">
                Order {" "}
                <select value={sort} onChange={handleSortProducts}>
                    <option>Latest</option>
                    <option value="lowest">Lowest</option>
                    <option value="highest">Highest</option>
                </select>
            </div>
            <div className="filter-size">
                Filter
                <select value={size} onChange={handleFilterProducts}>
                    <option value="All">All</option>
                    <option value="XS">XS</option>
                    <option value="S">S</option>
                    <option value="M">M</option>
                    <option value="L">L</option>
                    <option value="XL">XL</option>
                    <option value="XXL">XXL</option>
                </select>
            </div>
        </div>
    )
}

export default Filter
