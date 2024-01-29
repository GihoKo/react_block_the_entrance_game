import styled from "styled-components";

export const Wrapper = styled.div`
    width: 70px;
    height: 70px;
    background-color: ${(props) => props.backgroundColor};
    background-image: ${(props) =>
        props.backgroundImage ? props.backgroundImage : ""};
`;
