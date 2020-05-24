import React, {ChangeEvent, FC, useState} from "react";
import {Product} from "./types/types";
import SearchBar from "./search/SearchBar";
import ProductTable from "./product-table/ProductTable";

type Props = {
    products: Product[];
};

const FilterableProductTable: FC<Props> = props => {
    const [filterText, setFilterText] = useState('');
    const [inStockOnly, setInStockOnly] = useState(false);

    const products = props.products.filter(p => p.name.indexOf(filterText) !== -1 && (inStockOnly ? p.stocked : true));
    const filterTextChange = (e: ChangeEvent<HTMLInputElement>) => setFilterText(e.target.value);
    const inStockOnlyChange = (e: ChangeEvent<HTMLInputElement>) => setInStockOnly(e.target.checked);

    return (
        <div>
            <SearchBar filterText={filterText} inStockOnly={inStockOnly} handleFilterTextChange={filterTextChange}
                       handleOnInStockChange={inStockOnlyChange}/>
            <ProductTable products={products}/>
        </div>
    )
}

export default FilterableProductTable;