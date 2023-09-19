import { useState } from "react";
import PropTypes from "prop-types";
import ItemCar from "../ItemCar/ItemCar";
import { ButtonLoadMore, List } from "./ListCars.styled";

export default function ListCars({ cars }) {
    const [currentPage, setCurrentPage] = useState(1);
    const itemsPerPage = 8;

    const indexOfLastItem = currentPage * itemsPerPage;
    const currentItems = cars.slice(0, indexOfLastItem);

    const handleShowMoreClick = () => {
        setCurrentPage(currentPage + 1);
    };

    return (
        <div>
            <List>
                {currentItems.map((car, index) => (
                    <ItemCar
                        key={index + 1}
                        id={car.id}
                        year={car.year}
                        make={car.make}
                        picture={car.img}
                        rentalPrice={car.rentalPrice}
                        address={car.address}
                        mileage={car.mileage}
                        model={car.model}
                        rentalCompany={car.rentalCompany}
                        typeCar={car.type}
                        functionalities={car.functionalities}
                        car={car}
                        favorite={car.favorite}
                    />
                ))}
            </List>
            {cars.length > indexOfLastItem && (
                <ButtonLoadMore type="button" onClick={handleShowMoreClick}>Load more</ButtonLoadMore>
            )}
        </div>
    );
}

ListCars.propTypes = {
    cars: PropTypes.array.isRequired,
};