import styled from "styled-components";

interface WrapperProps {
    backgroundColor: string;
    backgroundImage: string;
}

export const Wrapper = styled.div<WrapperProps>`
    width: 70px;
    height: 70px;
    background-color: ${(props) => props.backgroundColor};
    background-image: ${(props) =>
        props.backgroundImage ? props.backgroundImage : ""};
`;
