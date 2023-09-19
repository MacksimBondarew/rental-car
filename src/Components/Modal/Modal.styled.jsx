import styled from "styled-components";
export const Overlay = styled.div`
    position: fixed;
    top: 0;
    left: 0;
    width: 100vw;
    height: 100vh;
    display: flex;
    justify-content: center;
    align-items: center;
    background-color: rgba(0, 0, 0, 0.8);
`;
export const ModalWindow = styled.div`
    background-color: white;
    padding: 40px;
    border-radius: 24px;
    position: relative;
    width: 540px;
`;

export const ButtonClose = styled.button`
    background-color: transparent;
    border-color: transparent;
    position: absolute;
    right: 14px;
    top: 14px;
    cursor: pointer;
`;

export const ImageModal = styled.img`
    width: 100%;
    height: 248px;
    border-radius: 20px;
    margin-bottom: 15px;
`;

export const TextShortCarModal = styled.p`
    font-size: 18px;
    font-style: normal;
    line-height: 150%;
    margin-bottom: 8px;
`;

export const ModelCarModal = styled.span`
    color: var(--blue);
    font-size: 18px;
    font-weight: 500;
    line-height: 24px;
`;

export const WrapperNameCarModal = styled.div`
    margin-bottom: 8px;
`;

export const TextOtherInformationBlocModal = styled.span`
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

export const WrapperTextInformationModal = styled.div`
    display: flex;
    flex-wrap: wrap;
    gap: 4px 12px;
`;

export const WrapperInformation = styled.div`
    margin-bottom: 14px;
    &:last-child {
        margin-bottom: 24px;
    }
`;

export const TitleBlock = styled.p`
    font-size: 14px;
    font-weight: 500;
    line-height: 20px;
    margin-bottom: 8px;
`;

export const TextDescriptionModal = styled.p`
    font-size: 14px;
    font-weight: 400;
    line-height: 20px;
    margin-bottom: 24px;
`;

export const WrapperCondition = styled.div`
    display: flex;
    gap: 8px;
    flex-wrap: wrap;
    margin-bottom: 24px;
`;

export const BlockCondition = styled.div`
    padding: 7px 14px;
    display: flex;
    border-radius: 35px;
    background-color: var(--background-condition-block);
`;

export const TextCondition = styled.p`
    font-size: 12px;
    line-height: 18px;
    letter-spacing: -0.24px;
`;

export const NumberCondition = styled.span`
    color: var(--blue);
`;

export const LinkModal = styled.a`
    background-color: var(--blue);
    border-color: transparent;
    padding: 12px 50px;
    color: var(--white);
    font-size: 14px;
    font-weight: 600;
    line-height: 20px;
    border-radius: 12px;
    cursor: pointer;
`;

export const ButtonModal = styled.button`
    background-color: transparent;
    border-color: transparent;
    color: var(--white);
    cursor: pointer;
`;