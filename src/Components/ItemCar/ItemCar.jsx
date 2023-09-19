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
}) {
    const addressArray = address.split(", ");
    const city = addressArray[1];
    const country = addressArray[2];
    const checkFunctionalitiesLength = () => {
        if (functionalities[0].length > 20) {
            return `${functionalities[0].substring(0, 20)}...`
        } else {
            return functionalities[0];
        }
    };
    return (
        <Item>
            <ButtonAddFavorite type="button">
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
                <TextOtherInformation>{model}</TextOtherInformation>
                <TextOtherInformation>{id}</TextOtherInformation>
                <TextOtherInformation>
                    {checkFunctionalitiesLength()}
                </TextOtherInformation>
            </WrapperTextInformation>
            <ButtonLearnMore type="button">Learn more</ButtonLearnMore>
        </Item>
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
};
