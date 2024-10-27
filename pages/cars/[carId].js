import { useRouter } from "next/router";

function Car() {
  const router = useRouter();
  const { carId } = router.query || {};

  return <div>Car {carId}</div>;
}

export default Car;
