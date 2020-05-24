import React, {ChangeEvent, FC} from "react";

type Props = {
    filterText: string;
    inStockOnly: boolean;
    handleFilterTextChange: (event: ChangeEvent<HTMLInputElement>) => void;
    handleOnInStockChange: (event: ChangeEvent<HTMLInputElement>) => void;
}

const SearchBar: FC<Props> = ({filterText, inStockOnly, handleFilterTextChange, handleOnInStockChange}) => {
    return (
        <form>
            <input type="text" value={filterText} onChange={handleFilterTextChange} placeholder="Search..."/>
            <p>
                <input type="checkbox" checked={inStockOnly} onChange={handleOnInStockChange}/>
                {' '}
                Only show products in stock
            </p>
        </form>
    )
}

export default SearchBar;