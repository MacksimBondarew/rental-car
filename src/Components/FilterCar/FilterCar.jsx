import PropTypes from "prop-types";
import { RowBottom, RowTop } from "../../images/icons";
import {
    ButtonChoose,
    ButtonChooseItem,
    ButtonSearch,
    FormFilter,
    InputMileage,
    ItemChoose,
    Label,
    TextInput,
    WrapperChoose,
    WrapperForm,
    WrapperInput,
    WrapperListChoose,
    WrapperTextAndInput,
} from "./FilterCar.styled";

export default function FilterCar({
    markCar,
    chooseCorrectMark,
    setMarkOpenFunction,
    openMark,
    chooseCorrectPrice,
    priceCar,
    setPriceOpenFunction,
    openPrice,
    setMileageToFunction,
    setMileageFromFunction,
    mileageFrom,
    mileageTo,
    fetchCarsFilter,
    resetFilter
}) {
    const carMarkArray = [
        "Buick",
        "Volvo",
        "HUMMER",
        "Subaru",
        "Mitsubishi",
        "Nissan",
        "Lincoln",
        "GMC",
        "Hyundai",
        "MINI",
        "Bentley",
        "Mercedes-Benz",
        "Aston Martin",
        "Pontiac",
        "Lamborghini",
        "Audi",
        "BMW",
        "Chevrolet",
        "Chrysler",
        "Kia",
        "Land",
    ];
    const carPriceArray = [
        10, 20, 30, 40, 50, 60, 70, 80, 90, 100, 200, 300, 400, 500, 600,
    ];
    function formatMileage(mileage) {
        if (mileage.length > 3) {
            const firstGroup = mileage.length % 3;
            let formattedMileage = mileage.substring(0, firstGroup);
            for (let i = firstGroup; i < mileage.length; i += 3) {
                if (formattedMileage.length > 0) {
                    formattedMileage += ",";
                }
                formattedMileage += mileage.substring(i, i + 3);
            }
            return formattedMileage;
        } else {
            return mileage;
        }
    }
    return (
        <WrapperForm>
            <FormFilter>
                <WrapperChoose>
                    <Label>Car brand</Label>
                    <ButtonChoose
                        type="button"
                        onClick={() => {
                            setMarkOpenFunction();
                        }}
                    >
                        {markCar} {openMark ? RowTop : RowBottom}
                    </ButtonChoose>

                    {openMark && (
                        <WrapperListChoose>
                            {carMarkArray.map((carMark) => {
                                return (
                                    <ItemChoose key={carMark}>
                                        <ButtonChooseItem
                                            onClick={(e) =>
                                                chooseCorrectMark(e)
                                            }
                                            type="button"
                                        >
                                            {carMark}
                                        </ButtonChooseItem>
                                    </ItemChoose>
                                );
                            })}
                        </WrapperListChoose>
                    )}
                </WrapperChoose>
                <WrapperChoose>
                    <Label>Price/ 1 hour</Label>
                    <ButtonChoose
                        type="button"
                        onClick={() => {
                            setPriceOpenFunction();
                        }}
                        money={true}
                    >
                        To {priceCar} $ {RowBottom}
                    </ButtonChoose>
                    {openPrice && (
                        <WrapperListChoose>
                            {carPriceArray.map((carPrice) => {
                                return (
                                    <ItemChoose key={carPrice}>
                                        <ButtonChooseItem
                                            onClick={(e) =>
                                                chooseCorrectPrice(e)
                                            }
                                            type="button"
                                        >
                                            {carPrice}
                                        </ButtonChooseItem>
                                    </ItemChoose>
                                );
                            })}
                        </WrapperListChoose>
                    )}
                </WrapperChoose>
                <div>
                    <Label>Сar mileage / km</Label>
                    <WrapperInput>
                        <WrapperTextAndInput>
                            <TextInput>From</TextInput>
                            <InputMileage
                                value={formatMileage(mileageFrom)}
                                onChange={(e) => {
                                    setMileageFromFunction(e);
                                }}
                            />
                        </WrapperTextAndInput>
                        <WrapperTextAndInput>
                            <TextInput>To</TextInput>
                            <InputMileage
                                value={formatMileage(mileageTo)}
                                onChange={(e) => {
                                    setMileageToFunction(e);
                                }}
                                to={true}
                            />
                        </WrapperTextAndInput>
                    </WrapperInput>
                </div>
                <ButtonSearch
                    type="button"
                    onClick={(e) => {
                        fetchCarsFilter(e);
                    }}
                >
                    Search
                </ButtonSearch>
                <ButtonSearch
                    type="button"
                    onClick={(e) => {
                        resetFilter(e);
                    }}
                >
                    Clear Filter
                </ButtonSearch>
            </FormFilter>
        </WrapperForm>
    );
}

FilterCar.propTypes = {
    markCar: PropTypes.string.isRequired,
    chooseCorrectMark: PropTypes.func.isRequired,
    openMark: PropTypes.bool.isRequired,
    setMarkOpenFunction: PropTypes.func.isRequired,
    priceCar: PropTypes.string.isRequired,
    chooseCorrectPrice: PropTypes.func.isRequired,
    openPrice: PropTypes.bool.isRequired,
    setPriceOpenFunction: PropTypes.func.isRequired,
    setMileageToFunction: PropTypes.func.isRequired,
    setMileageFromFunction: PropTypes.func.isRequired,
    mileageFrom: PropTypes.string.isRequired,
    mileageTo: PropTypes.string.isRequired,
    fetchCarsFilter: PropTypes.func.isRequired,
    resetFilter: PropTypes.func.isRequired,
};
