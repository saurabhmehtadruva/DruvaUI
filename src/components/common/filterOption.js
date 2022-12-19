import React from "react";
import Button from "@mui/material/Button";

export const FilterOption = props => {
    const { options, activeOption, multiSelect, onFilterOptionClick, variant } = props;
    let filterItems = [];
    options.map(filterItem => {
        const filterOption = (
            <Button
                sx={{marginRight: 0.5}}
                variant={variant === "status" ? filterItem : variant}
                className={`mr-2 mb-2 filter-button ${
                    multiSelect
                        ? activeOption.includes(filterItem)
                            ? "filter-active"
                            : ""
                        : activeOption === filterItem
                        ? "filter-active"
                        : ""
                }`}
                onClick={() => onFilterOptionClick(filterItem)}
            >{filterItem}</Button>
        );
        filterItems.push(filterOption);
    });

    return <>{filterItems}</>;
};

export default FilterOption;
