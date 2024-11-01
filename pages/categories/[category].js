import { useRouter } from "next/router";
import carsData from "../../data/carsData";
import CarsList from "../../components/templates/CarsList";

function Category() {
  const router = useRouter();

  const seletedCategory = carsData.filter(
    (item) => item.category === router.query.category
  );

  return <CarsList data={seletedCategory} />;
}

export default Category;
