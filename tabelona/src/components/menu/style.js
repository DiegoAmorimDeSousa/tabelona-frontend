import styled from 'styled-components';

export const MenuComponent = styled.div`
    background-color: var(--color-bar-menu);
    width: 280px;
    height: 100vh;
    box-shadow: 0 0 0.4em #383232;
    font-size: 1.1rem;
    letter-spacing: 0.3rem;
    display: flex;
    flex-direction: column;
    align-items: center;

    img {
        width: 150px;
        border-radius: 50px;
        margin: 50px 0 20px;
    }

    li {
        padding: 15px;
        text-align: left;
        box-sizing: border-box;
        margin: 20px 0;
        display: flex;
        align-items: center;
        transition: width 2s, height 2s, background-color 2s, transform 2s;
    }

    li div {
        border-radius: 50px;
        margin-right: 15px;
        transition: width 1s, height 1s, background-color 1s, transform 1s;
        padding: 10px;
    }

    li:hover {
        background-color: gray;
    }

    .on {
        background-color: var(--color-logo);   
        border-radius: 50px;
    }

    footer div {
        height: 2px;
        width: 100%;
        background-color: white;
    }
`