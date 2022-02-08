import styled from "styled-components";

export const ButtonFilterComponent = styled.div`
    background-color: var(--color-logo);
    padding: 15px;
    margin-left: 15px;
    -ms-transform: skew(-30deg);
    -webkit-transform: skew(-30deg); 
    transform: skew(-30deg); 
    transform-origin: bottom left;
    cursor: pointer;
    transition: width 1s, height 1s, background-color 1s, transform 1s;

    :hover {
        background-color: #0b8cb7;
    }
`;