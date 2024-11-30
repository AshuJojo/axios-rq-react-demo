import { useQuery } from "@tanstack/react-query";
import { getAllProducts } from "../api/fakeStoreApi";
import Product from "../types/Product";

const ProductList = () => {
  const { data } = useQuery({
    queryKey: ["products"],
    queryFn: getAllProducts,
  });

  return (
    <div>
      {data &&
        data.map((product: Product) => (
          <div key={product.id}>
            <h2>{product.title}</h2>
          </div>
        ))}
    </div>
  );
};

export default ProductList;
