import styled from "styled-components";
import isPropValid from "@emotion/is-prop-valid";

export const Item = styled.li`
    width: calc((100% - 3 * 29px) / 4);
    position: relative;
`;

export const ImageItem = styled.img`
    height: 268px;
    border-radius: 20px;
    margin-bottom: 14px;
`;

export const ButtonAddFavorite = styled.button.withConfig({
    shouldForwardProp: (prop) => isPropValid(prop) && prop !== "favorite",
})`
    background-color: transparent;
    border-color: transparent;
    position: absolute;
    right: 5%;
    top: 14px;
    cursor: pointer;
    transition: all 0.5s;

    & > svg {
        fill: ${({ favorite }) => favorite && "var(--blue)"};

        & > path {
            stroke: ${({ favorite }) => favorite && "var(--blue)"};
        }
    }
`;

export const WrapperNameCar = styled.div`
    display: flex;
    justify-content: space-between;
    align-items: center;
    margin-bottom: 8px;
`;

export const TextShortCar = styled.p`
    font-size: 16px;
    font-weight: 500;
    line-height: 150%;
`;

export const ModelCar = styled.span`
    font-size: 16px;
    font-weight: 500;
    line-height: 150%;
    color: var(--blue);
`;

export const WrapperTextInformation = styled.div`
    display: flex;
    flex-wrap: wrap;
    gap: 4px 12px;
    margin-bottom: 28px;
`;

export const TextOtherInformation = styled.span`
    color: var(--color-other-information);
    font-size: 12px;
    line-height: 150%;
    position: relative;
    &:not(:last-child) {
        &::before {
            content: "";
            height: 100%;
            width: 1px;
            background-color: var(--color-other-information-row);
            position: absolute;
            left: calc(100% + 6px);
        }
    }
`;

export const ButtonLearnMore = styled.button`
    padding: 12px 0;
    color: var(--white);
    font-size: 14px;
    font-weight: 600;
    line-height: 20px;
    border-radius: 12px;
    background-color: var(--blue);
    border-color: transparent;
    width: 100%;
    cursor: pointer;
`;
