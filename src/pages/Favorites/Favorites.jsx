import { useDispatch, useSelector } from "react-redux";
import { getItems, reload } from "../../redux/cars/selectors";
import { useEffect } from "react";
import { featchCars } from "../../redux/cars/operations";
import ListCars from "../../Components/ListCars/ListCars";
import { WrapperFavorite } from "./Favorites.styled";

export default function Favorites() {
  const dispatch = useDispatch();
  const reloadList = useSelector(reload)
  const cars = useSelector(getItems);
  const carsFilter = cars.filter(car => car.favorite === true);
  useEffect(() => {
      dispatch(featchCars());
  }, [dispatch, reloadList]);
  return (
      <WrapperFavorite>
          <ListCars cars={carsFilter} />
      </WrapperFavorite>
  );
}
