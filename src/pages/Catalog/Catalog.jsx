import { useDispatch } from "react-redux";
import { featchCars } from "../../redux/cars/operations";
import { useEffect } from "react";
import ListCars from "../../Components/ListCars/ListCars";
import { WrapperCatalog } from "./Catalog.styled";

export default function Catalog() {
    const dispatch = useDispatch();
    useEffect(() => {
        dispatch(featchCars());
    }, [dispatch]);
    return (
        <WrapperCatalog>
            <ListCars />
        </WrapperCatalog>
    );
}
