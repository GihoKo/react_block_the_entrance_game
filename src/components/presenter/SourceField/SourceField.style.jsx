import styled from "styled-components";

export const Wrapper = styled.div`
    width: 496px;
    height: 238px;
    background-image: url(${(props) => props.background});
    background-color: black;
`;
