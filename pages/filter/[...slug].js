import { useRouter } from "next/router";
import carsData from "../../data/carsData";
import CarsList from "../../components/templates/CarsList";

function Filter() {
  const router = useRouter();
  const [min, max] = router.query.slug || [];

  const filterData = carsData.filter(
    (item) => item.price > min && item.price < max
  );

  if (!filterData.length) return <h3>NotFound</h3>;

  return <CarsList data={filterData} />;
}

export default Filter;
