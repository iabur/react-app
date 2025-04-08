import React, { useEffect, useState } from "react";

const ProductList = ({ category }: { category: string }) => {
  const [product, setproduct] = useState<String[]>([]);
  useEffect(() => {
    console.log("ProductList fetched " + category);
    setproduct(["Household", "Clothing"]);
  }, [category]);
  return <div>ProductList</div>;
};

export default ProductList;
