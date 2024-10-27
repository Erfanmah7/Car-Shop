import { useRouter } from "next/router";
import carsData from "../../data/carsData";

function Filter() {
  const router = useRouter();
  const [min, max] = router.query.slug || [];

  const filterData = carsData.filter(
    (item) => item.price > min && item.price < max
  );

  if (!filterData.length) return <h3>NotFound</h3>;

  return (
    <div>
      Filter {min}/{max}
    </div>
  );
}

export default Filter;
