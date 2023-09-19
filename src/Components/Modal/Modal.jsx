import { createPortal } from "react-dom";
import {
    BlockCondition,
    ButtonClose,
    ButtonModal,
    ImageModal,
    LinkModal,
    ModalWindow,
    ModelCarModal,
    NumberCondition,
    Overlay,
    TextCondition,
    TextDescriptionModal,
    TextOtherInformationBlocModal,
    TextShortCarModal,
    TitleBlock,
    WrapperCondition,
    WrapperInformation,
    WrapperNameCarModal,
    WrapperTextInformationModal,
} from "./Modal.styled";
import { useEffect } from "react";
import { CloseModal } from "../../images/icons";

const modalRoot = document.querySelector("#modal-root");

export default function Modal({ onClose, car }) {
    const handleKeyDown = (e) => {
        if (e.code === "Escape") {
            onClose();
        }
    };
    const handleBackdropClick = (event) => {
        if (event.target === event.currentTarget) {
            onClose();
        }
    };
    const addressArray = car.address.split(", ");
    const city = addressArray[1];
    const country = addressArray[2];
    const condition = car.rentalConditions.split(/(?<=\d)\s+(?=[A-Z][a-z])/);
    const conditionMoreInformation = condition[1].split(/(?=[A-Z])/);
    const match = car.rentalConditions.match(/:\s+(\d+)/);
    const firstPart = condition[0].split(/:\s+/);
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
    useEffect(() => {
        window.addEventListener("keydown", handleKeyDown);
        return () => {
            window.removeEventListener("keydown", handleKeyDown);
        };
        // eslint-disable-next-line react-hooks/exhaustive-deps
    }, []);
    return createPortal(
        <Overlay onClick={handleBackdropClick}>
            <ModalWindow>
                <ButtonClose onClick={onClose}>{CloseModal}</ButtonClose>
                <ImageModal src={car.img} />
                <WrapperNameCarModal>
                    <TextShortCarModal>
                        {car.make} <ModelCarModal>{car.model}</ModelCarModal>,{" "}
                        {car.year}
                    </TextShortCarModal>
                </WrapperNameCarModal>
                <WrapperInformation>
                    <WrapperTextInformationModal>
                        <TextOtherInformationBlocModal>
                            {city}
                        </TextOtherInformationBlocModal>
                        <TextOtherInformationBlocModal>
                            {country}
                        </TextOtherInformationBlocModal>
                        <TextOtherInformationBlocModal>
                            id: {car.id}
                        </TextOtherInformationBlocModal>
                        <TextOtherInformationBlocModal>
                            year: {car.year}
                        </TextOtherInformationBlocModal>
                        <TextOtherInformationBlocModal>
                            type: {car.type}
                        </TextOtherInformationBlocModal>
                    </WrapperTextInformationModal>
                    <WrapperTextInformationModal>
                        <TextOtherInformationBlocModal>
                            Fuel Consumption: {car.fuelConsumption}
                        </TextOtherInformationBlocModal>
                        <TextOtherInformationBlocModal>
                            Engine Size:: {car.engineSize}
                        </TextOtherInformationBlocModal>
                    </WrapperTextInformationModal>
                </WrapperInformation>
                <TextDescriptionModal>{car.description}</TextDescriptionModal>
                <TitleBlock>Accessories and functionalities:</TitleBlock>
                <WrapperInformation>
                    <WrapperTextInformationModal>
                        {car.accessories.map((accessories, index) => {
                            return (
                                <TextOtherInformationBlocModal key={index + 1}>
                                    {accessories}
                                </TextOtherInformationBlocModal>
                            );
                        })}
                    </WrapperTextInformationModal>
                    <WrapperTextInformationModal>
                        {car.functionalities.map((functionalitie, index) => {
                            return (
                                <TextOtherInformationBlocModal key={index + 1}>
                                    {functionalitie}
                                </TextOtherInformationBlocModal>
                            );
                        })}
                    </WrapperTextInformationModal>
                </WrapperInformation>
                <TitleBlock>Rental Conditions: </TitleBlock>
                <WrapperCondition>
                    <BlockCondition>
                        <TextCondition>
                            {firstPart[0]}:{" "}
                            <NumberCondition>{match[1]}</NumberCondition>
                        </TextCondition>
                    </BlockCondition>
                    <BlockCondition>
                        <TextCondition>
                            {conditionMoreInformation[0]}
                        </TextCondition>
                    </BlockCondition>
                    <BlockCondition>
                        <TextCondition>
                            {conditionMoreInformation[1]}
                        </TextCondition>
                    </BlockCondition>
                    <BlockCondition>
                        <TextCondition>
                            Mileage:{" "}
                            <NumberCondition>
                                {formatMileage(car.mileage)}
                            </NumberCondition>
                        </TextCondition>
                    </BlockCondition>
                    <BlockCondition>
                        <TextCondition>
                            Price:{" "}
                            <NumberCondition>
                                {formatMileage(car.rentalPrice)}
                            </NumberCondition>
                        </TextCondition>
                    </BlockCondition>
                </WrapperCondition>
                <LinkModal
                    href="tel:+380730000000"
                    className="rental-car-link"
                >
                    <ButtonModal className="rental-car">Rental car</ButtonModal>
                </LinkModal>

            </ModalWindow>
        </Overlay>,
        modalRoot
    );
}
