import React, {FC} from "react";
import {Product} from "../types/types";
import ProductCategoryRow from "./ProductCategoryRow";
import ProductRow from "./ProductRow";

type Props = {
    products: Product[]
}

const ProductTable: FC<Props> = ({products}) => {
    let lastCategory: string = '';
    const rows = products.map(product => {
        const {name, category} = product;
        const row = category !== lastCategory ?
            <>
                <ProductCategoryRow category={category} key={category}/>
                <ProductRow product={product} key={name}/>
            </> :
            <ProductRow product={product} key={name}/>;
        lastCategory = category;

        return row;
    });

    return (<table>
        <thead>
            <tr>
                <th>Name</th>
                <th>Price</th>
            </tr>
        </thead>
        <tbody>{rows}</tbody>
    </table>);
}

export default ProductTable;