import React from "react";
import Button from "@mui/material/Button";

export const FilterOption = props => {
    const { options, activeOption, multiSelect, onFilterOptionClick } = props;
    let filterItems = [];
    options.map(filterItem => {
        const filterOption = (
            <Button
                sx={{marginRight: 0.5}}
                variant="filterBtn"
                className={`mr-2 mb-2 filter-button ${
                    multiSelect
                        ? activeOption.includes(filterItem.label)
                            ? "filter-active"
                            : ""
                        : activeOption === filterItem.label
                        ? "filter-active"
                        : ""
                }`}
                startIcon={filterItem.icon}
                onClick={() => onFilterOptionClick(filterItem.label)}
            >{filterItem.label}</Button>
        );
        filterItems.push(filterOption);
    });

    return <>{filterItems}</>;
};

export default FilterOption;
