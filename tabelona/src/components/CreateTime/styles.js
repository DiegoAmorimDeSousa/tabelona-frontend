import styled from "styled-components";

export const SweetAlertComponent = styled.div`
    position: fixed;
    z-index: 1999;
    height: 100vh;
    width: 100%;
    background-color: transparent;
    display: flex;
    justify-content: center;
    align-items: center;

    > div {
        border-radius: 50px;
        background-color: var(--color-logo);
        width: 400px;
        padding: 20px;
    }

    div h2 {
        margin-left: 10px;
    }

    div input {
        margin-top: -40px;
    }

    div div {
        display: flex;
        justify-content: center;
        margin: 20px 0 0 0;
    }
`;