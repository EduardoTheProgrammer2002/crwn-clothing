import { useContext} from "react";

import { ProductsContext } from "../../contexts/products.context";

import './shop.style.scss'

// import CollectionPreview from "../../components/collection-preview/collection-preview.component";
import ProductCard from "../../components/product-card/product-card.component";

const ShopPage = () => {
    const {products} = useContext(ProductsContext);
    

    return(
        <div className="products-container">
            {
                products.map((product) => {
                    return(
                        <ProductCard key={product.id} product={product}/>
                    )
                })
            }
        </div>
    )
}

export default ShopPage;