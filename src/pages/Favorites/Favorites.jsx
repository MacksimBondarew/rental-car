import { useDispatch, useSelector } from "react-redux";
import { getItems, reload } from "../../redux/cars/selectors";
import { useEffect, useState } from "react";
import { featchCars } from "../../redux/cars/operations";
import ListCars from "../../Components/ListCars/ListCars";
import { WrapperFavorite } from "./Favorites.styled";
import FilterCar from "../../Components/FilterCar/FilterCar";
import { useLocalStorage } from "../../hooks/useLocalStaoreage";

export default function Favorites() {
    const [openMark, setMarkOpen] = useState(false);
    const [markCar, setMarkCar] = useLocalStorage(
        "markCarFavorite",
        "Enter the text"
    );
    const [openPrice, setPriceOpen] = useState(false);
    const [priceCar, setPriceCar] = useLocalStorage("priceCarFavorite", "");
    const [mileageFrom, setMileageFrom] = useLocalStorage(
        "mileageFromFavorite",
        ""
    );
    const [mileageTo, setMileageTo] = useLocalStorage("mileageToFavorite", "");
    const chooseCorrectMark = (e) => {
        setMarkCar(e.target.innerText);
    };
    const setMarkOpenFunction = () => {
        setMarkOpen(!openMark);
    };
    const chooseCorrectPrice = (e) => {
        setPriceCar(e.target.innerText);
    };
    const setPriceOpenFunction = () => {
        setPriceOpen(!openPrice);
    };
    const setMileageFromFunction = (e) => {
        setMileageFrom(e.target.value.replace(/[^0-9]/g, ""));
    };
    const setMileageToFunction = (e) => {
        setMileageTo(e.target.value.replace(/[^0-9]/g, ""));
    };
    const dispatch = useDispatch();
    const reloadList = useSelector(reload);
    const carsFromRedux = useSelector(getItems);
    const carsFilter = carsFromRedux.filter((car) => car.favorite === true);
    const [filteredCars, setFilteredCars] = useState(carsFilter);
    useEffect(() => {
        dispatch(featchCars());
    }, [dispatch, reloadList]);

    useEffect(() => {
        setFilteredCars(carsFilter);
        fetchCarsFilter();
        // eslint-disable-next-line react-hooks/exhaustive-deps
    }, [carsFromRedux]);
    const resetFilter = () => {
        setMarkCar("Enter the text");
        setPriceCar("");
        setMileageFrom("");
        setMileageTo("");
    };
    const fetchCarsFilter = () => {
        let filteredResult = [...carsFilter];

        if (priceCar !== "") {
            filteredResult = filteredResult.filter((car) => {
                const numericPrice = car.rentalPrice.replace(/\D/g, "");
                const carPriceInt = parseInt(numericPrice, 10);
                return carPriceInt <= priceCar;
            });
        }

        if (markCar !== "Enter the text") {
            filteredResult = filteredResult.filter(
                (car) => car.make === markCar
            );
        }

        if (mileageFrom !== "" && mileageTo !== "") {
            filteredResult = filteredResult.filter((car) => {
                return car.mileage >= mileageFrom && car.mileage <= mileageTo;
            });
        }
        setFilteredCars(filteredResult);
    };
    return (
        <WrapperFavorite>
            <FilterCar
                chooseCorrectMark={chooseCorrectMark}
                markCar={markCar}
                setMarkOpenFunction={setMarkOpenFunction}
                openMark={openMark}
                chooseCorrectPrice={chooseCorrectPrice}
                priceCar={priceCar}
                setPriceOpenFunction={setPriceOpenFunction}
                openPrice={openPrice}
                setMileageToFunction={setMileageToFunction}
                setMileageFromFunction={setMileageFromFunction}
                mileageFrom={mileageFrom}
                mileageTo={mileageTo}
                fetchCarsFilter={fetchCarsFilter}
                resetFilter={resetFilter}
            />
            <ListCars cars={filteredCars} />
        </WrapperFavorite>
    );
}
