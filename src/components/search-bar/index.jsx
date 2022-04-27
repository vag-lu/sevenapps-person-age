import { useState } from "react";
import './index.css'

const SearchBar = ({ onSearch }) => {
    const [filter, setFilter] = useState({ name: undefined, ageFrom: undefined, ageTo: undefined })

    const onFilterChange = (event) => {
        const { value, id } = event.target;

        switch (id) {
            case "name":
                setFilter({ ...filter, name: value });
                break;
            case "ageFrom":
                setFilter({ ...filter, ageFrom: parseInt(value) });
                break;
            case "ageTo":
                setFilter({ ...filter, ageTo: parseInt(value) });
                break;
        }
    }

    const onSearchClick = () => {
        onSearch(filter)
    }

    return (
        <section className="search">
            <div className="label-float">
                <label to='name'>Name</label>
                <input id='name' onChange={onFilterChange} value={filter.name}></input>
            </div>
            <div className="label-float">
                <label to='age'>Age</label>
                <div id='age'>
                    <div className="label-float">
                        <label to='ageFrom'>From</label>
                        <input id='ageFrom' type='number' onChange={onFilterChange} value={filter.ageFrom}></input>
                    </div>
                    <div className="label-float">
                        <label to='ageTo'>To</label>
                        <input id='ageTo' type='number' onChange={onFilterChange} value={filter.ageTo}></input>
                    </div>
                </div>
            </div>
            <button onClick={onSearchClick}>Search</button>
        </section>
    )
}

export default SearchBar;