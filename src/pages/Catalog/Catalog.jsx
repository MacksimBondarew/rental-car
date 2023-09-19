import { useDispatch, useSelector } from "react-redux";
import { featchCars } from "../../redux/cars/operations";
import { useEffect } from "react";
import ListCars from "../../Components/ListCars/ListCars";
import { WrapperCatalog } from "./Catalog.styled";
import { getItems, reload } from "../../redux/cars/selectors";

export default function Catalog() {
    const dispatch = useDispatch();
    const reloadList = useSelector(reload)
    let cars = useSelector(getItems);
    useEffect(() => {
        dispatch(featchCars());
    }, [dispatch, reloadList]);
    return (
        <WrapperCatalog>
            <ListCars cars={cars} />
        </WrapperCatalog>
    );
}
