import { useState } from "react";

const useCategory = () => {
  const [category, setCategory] = useState("/api/shops/");

  const tshirt = () => setCategory("hello tshirt");
  const sweater = () => setCategory("hello tshirt");
  const jeans = () => setCategory("hello tshirt");
  const shorts = () => setCategory("hello tshirt");

  return { category, tshirt, sweater, jeans, shorts };
};

export default useCategory;
