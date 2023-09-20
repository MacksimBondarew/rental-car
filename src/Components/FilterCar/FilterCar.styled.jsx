import styled from "styled-components";
import isPropValid from "@emotion/is-prop-valid";

export const WrapperForm = styled.div`
    justify-content: center;
    display: flex;
    padding-bottom: 46px;
`;

export const FormFilter = styled.form`
    display: flex;
    align-items: end;
    gap: 16px;
`;

export const ButtonSearch = styled.button`
    border-radius: 12px;
    background: var(--blue);
    border-color: transparent;
    font-size: 14px;
    font-weight: 600;
    padding: 14px 44px;
    line-height: 20px;
    color: var(--white);
    cursor: pointer;
`;

export const ButtonChoose = styled.button.withConfig({
    shouldForwardProp: (prop) => isPropValid(prop) && prop !== "money",
})`
    padding: 14px 18px;
    display: flex;
    align-items: center;
    gap: 50px;
    width: 224px;
    gap: ${({ money }) => money && "30px"};
    width: ${({ money }) => money && "160px"};
    justify-content: space-between;
    background-color: var(--gray-background-color);
    font-size: 18px;
    font-weight: 500;
    line-height: 20px;
    border-color: transparent;
    border-radius: 14px;
    cursor: pointer;
`;

export const Label = styled.span`
    color: var(--gray-text);
    font-size: 14px;
    font-weight: 500;
    line-height: 18px;
    margin-bottom: 8px;
`;

export const InputMileage = styled.input.withConfig({
    shouldForwardProp: (prop) => isPropValid(prop) && prop !== "to",
})`
    width: 160px;
    font-size: 18px;
    font-style: normal;
    font-weight: 500;
    line-height: 20px;
    padding: 14px;
    padding-left: 75px;
    padding-left: ${({ to }) => to && "50px"};
    border-radius: 14px 0px 0px 14px;
    background-color: var(--gray-background-color);
    border-color: transparent;
    border-right: 1px solid rgba(138, 138, 137, 0.2);
    &:last-child {
        border-color: transparent;
        border-radius: 0px 14px 14px 0px;
    }
    &:focus {
        outline: none;
    }
`;

export const WrapperInput = styled.div`
    display: flex;
`;

export const WrapperListChoose = styled.ul`
    background-color: var(--white);
    padding: 14px 18px;
    border-radius: 14px;
    height: 272px;
    position: absolute;
    z-index: 1;
    width: 100%;
    overflow-y: scroll;
    scrollbar-width: thin;
    scrollbar-color: rgba(18, 20, 23, 0.05);
    &::-webkit-scrollbar {
        width: 8px;
    }

    &::-webkit-scrollbar-thumb {
        background-color: rgba(18, 20, 23, 0.05);
        border-radius: 10px; 
    };
    &::-webkit-scrollbar-track {
        margin-top: 20px;
        margin-bottom: 20px;
    }
`;

export const ItemChoose = styled.li`
    &:not(last-child) {
        margin-bottom: 8px;
    }
`;

export const WrapperChoose = styled.div`
    position: relative;
`;

export const ButtonChooseItem = styled.button`
    background-color: transparent;
    border-color: transparent;
    font-size: 16px;
    text-align: left;
    font-weight: 500;
    line-height: 20px;
    color: rgba(18, 20, 23, 0.2);
    cursor: pointer;
    transition: all 250ms;
    width: 100%;
    &:hover {
        color: var(--black);
    }
`;

export const WrapperTextAndInput = styled.div`
    position: relative;
`;

export const TextInput = styled.p`
    position: absolute;
    font-size: 18px;
    font-weight: 500;
    line-height: 20px;
    top: 16px;
    left: 24px;
`