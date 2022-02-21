import styled from 'styled-components';

export const MenuComponent = styled.div`
    background-color: var(--color-bar-menu);
    position: fixed;
    width: 280px;
    height: 100vh;
    box-shadow: 0 0 0.4em #383232;
    font-size: 1.1rem;
    letter-spacing: 0.3rem;
    text-align: center;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;


    .menu-hamburguer {
        display: none;
    }

    img {
        width: 150px;
        border-radius: 50px;
        margin-top: 20px;
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

    .footer-menu {
        display: flex;
        justify-content: space-between;
        width: 100px;
        cursor: pointer;
    }

    @media (max-width: 768px) {
        flex-direction: inherit;
        width: 100%;
        height: 100px;
        align-items: center;
        justify-content: space-between;

        .menu-hamburguer {
            display: inline;
            margin-right: 50px;
        }

        .menu-hamburguer svg {
            font-size: 30px;
        }

        nav {
            display: none;
        }

        .nav-menu {
            display: inline;
            position: absolute;
            top: 100px;
        }

        .nav-menu ul {
            display: flex;
            flex-wrap: wrap;
            background-color: var(--color-bar-menu);
        }

        img {
            width: 15%;
            margin: 0 50px;
            height: 80px;
        }

    }
`