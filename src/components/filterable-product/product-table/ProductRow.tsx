import React, {FC} from "react";
import {Product} from "../types/types";

type Props = {
    product: Product;
}

const ProductRow: FC<Props> = ({product}) => {
    const name = product.stocked ? product.name : <span style={{color: 'red'}}>
        {product.name}
    </span>

    return (<tr>
        <td>{name}</td>
        <td>{product.price}</td>
    </tr>)
}

export default ProductRow;