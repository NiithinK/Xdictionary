import React from 'react';
import './FilterBox.css'; // Import the CSS file for styling

const FilterBox = ({ showFilter }) => {
    return (
        <div className={`filter-box ${showFilter ? 'open' : ''}`}>
            
            <div className="filter-section">
                <label>
                    <input type="checkbox" name="customizable" />
                    Customizable
                </label>
                <label>
                    <input type="checkbox" name="fabric" />
                    Fabric Work
                </label>

                {/* Dropdowns for filters */}
                <div className="segment-dropdown">
                    <label htmlFor="ideal-for">Ideal For</label>
                    <select id="ideal-for" name="idealFor">
                        <option value="men">Men</option>
                        <option value="women">Women</option>
                        <option value="kids">Kids</option>
                    </select>
                </div>
                <div className="segment-dropdown">
                    <label htmlFor="occasion">Occasion</label>
                    <select id="occasion" name="occasion">
                        <option value="casual">Casual</option>
                        <option value="party">Party</option>
                        <option value="formal">Formal</option>
                    </select>
                </div>
                <div className="segment-dropdown">
                    <label htmlFor="work">Work</label>
                    <select id="work" name="work">
                        <option value="handwork">Handwork</option>
                        <option value="machinework">Machine Work</option>
                    </select>
                </div>
                <div className="segment-dropdown">
                    <label htmlFor="fabric">Fabric</label>
                    <select id="fabric" name="fabric">
                        <option value="cotton">Cotton</option>
                        <option value="silk">Silk</option>
                        <option value="wool">Wool</option>
                    </select>
                </div>
                <div className="segment-dropdown">
                    <label htmlFor="segment">Segment</label>
                    <select id="segment" name="segment">
                        <option value="segment1">Segment 1</option>
                        <option value="segment2">Segment 2</option>
                        <option value="segment3">Segment 3</option>
                    </select>
                </div>
                <div className="segment-dropdown">
                    <label htmlFor="sustainable">Sustainable</label>
                    <select id="sustainable" name="sustainable">
                        <option value="yes">Yes</option>
                        <option value="no">No</option>
                    </select>
                </div>
                <div className="segment-dropdown">
                    <label htmlFor="raw-material">Raw Material</label>
                    <select id="raw-material" name="rawMaterial">
                        <option value="cotton">Cotton</option>
                        <option value="polyester">Polyester</option>
                        <option value="silk">Silk</option>
                    </select>
                </div>
                <div className="segment-dropdown">
                    <label htmlFor="pattern">Pattern</label>
                    <select id="pattern" name="pattern">
                        <option value="plain">Plain</option>
                        <option value="striped">Striped</option>
                        <option value="printed">Printed</option>
                    </select>
                </div>
            </div>
        </div>
    );
};

export default FilterBox;
