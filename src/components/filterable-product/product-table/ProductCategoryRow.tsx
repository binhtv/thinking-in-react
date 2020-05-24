import React, {FC} from "react";

type Props = {
    category: string;
};

const ProductCategoryRow: FC<Props> = ({category}) => (<tr>
        <th colSpan={2}>
            {category}
        </th>
    </tr>);

export default ProductCategoryRow;