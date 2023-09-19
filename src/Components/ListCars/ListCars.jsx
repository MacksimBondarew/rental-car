import { useState } from "react";
import { useSelector } from "react-redux";
import { getItems } from "../../redux/cars/selectors";
import ItemCar from "../ItemCar/ItemCar";
import { ButtonLoadMore, List } from "./ListCars.styled";

export default function ListCars() {
    const cars = useSelector(getItems);

    // Стан для сторінки та кількості елементів на сторінці
    const [currentPage, setCurrentPage] = useState(1);
    const itemsPerPage = 8;

    // Вираховуємо індекс першого та останнього елементів на поточній сторінці
    const indexOfLastItem = currentPage * itemsPerPage;
    const currentItems = cars.slice(0, indexOfLastItem);

    // Обробник кліку на кнопку "Показати ще"
    const handleShowMoreClick = () => {
        setCurrentPage(currentPage + 1);
    };

    return (
        <div>
            <List>
                {currentItems.map((car) => (
                    <ItemCar
                        key={car.id}
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
                    />
                ))}
            </List>
            {cars.length > indexOfLastItem && (
                <ButtonLoadMore type="button" onClick={handleShowMoreClick}>Load more</ButtonLoadMore>
            )}
        </div>
    );
}
