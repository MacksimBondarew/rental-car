import PropTypes from "prop-types";
import {
    ButtonAddFavorite,
    ButtonLearnMore,
    ImageItem,
    Item,
    ModelCar,
    TextOtherInformation,
    TextShortCar,
    WrapperNameCar,
    WrapperTextInformation,
} from "./ItemCar.styled";
import { Favorite } from "../../images/icons";
import { useDispatch } from "react-redux";
import { updateFavorite } from "../../redux/cars/operations";
import { useState } from "react";
import Modal from "../Modal/Modal";
export default function ItemCar({
    id,
    year,
    make,
    picture,
    rentalPrice,
    address,
    model,
    rentalCompany,
    typeCar,
    functionalities,
    car,
    favorite,
}) {
    const [open, setOpen] = useState(false);
    const openModal = () => {
        setOpen(!open);
    };
    const addressArray = address.split(", ");
    const city = addressArray[1];
    const country = addressArray[2];
    const dispatch = useDispatch();
    const checkFunctionalitiesLength = () => {
        if (functionalities && functionalities[0]) {
            if (functionalities[0].length > 20) {
                return `${functionalities[0].substring(0, 20)}...`;
            } else {
                return functionalities[0];
            }
        } else {
            return "No functionalities available";
        }
    };
    const checkModelLength = () => {
        if (model) {
            if (model.length > 5) {
                return `${functionalities[0].substring(0, 5)}...`;
            } else {
                return model;
            }
        }
    };

    return (
        <>
            <Item>
                <ButtonAddFavorite
                    favorite={favorite}
                    type="button"
                    onClick={() => {
                        const updatedCar = { ...car, favorite: !car.favorite };
                        dispatch(updateFavorite({ id, updatedCar }));
                    }}
                >
                    {Favorite}
                </ButtonAddFavorite>
                <ImageItem src={picture} alt="" />
                <WrapperNameCar>
                    <TextShortCar>
                        {make} <ModelCar>{model}</ModelCar>, {year}
                    </TextShortCar>
                    <TextShortCar>{rentalPrice}</TextShortCar>
                </WrapperNameCar>
                <WrapperTextInformation>
                    <TextOtherInformation>{city}</TextOtherInformation>
                    <TextOtherInformation>{country}</TextOtherInformation>
                    <TextOtherInformation>{rentalCompany}</TextOtherInformation>
                    <TextOtherInformation>{typeCar}</TextOtherInformation>
                    <TextOtherInformation>
                        {checkModelLength()}
                    </TextOtherInformation>
                    <TextOtherInformation>{id}</TextOtherInformation>
                    <TextOtherInformation>
                        {checkFunctionalitiesLength()}
                    </TextOtherInformation>
                </WrapperTextInformation>
                <ButtonLearnMore type="button" onClick={openModal}>
                    Learn more
                </ButtonLearnMore>
            </Item>
            {open && (
                <Modal car={car} onClose={openModal} />
            )}
        </>
    );
}

ItemCar.propTypes = {
    id: PropTypes.string.isRequired,
    year: PropTypes.number.isRequired,
    make: PropTypes.string.isRequired,
    picture: PropTypes.string.isRequired,
    rentalPrice: PropTypes.string.isRequired,
    address: PropTypes.string.isRequired,
    model: PropTypes.string.isRequired,
    rentalCompany: PropTypes.string.isRequired,
    typeCar: PropTypes.string.isRequired,
    functionalities: PropTypes.array.isRequired,
    car: PropTypes.object.isRequired,
    favorite: PropTypes.bool.isRequired,
};
