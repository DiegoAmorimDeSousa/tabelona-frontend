import styled from 'styled-components';

export const TableComponent = styled.div`
    font-family: var(--main-font-family);
    font-size: 1rem;
    margin: 60px auto;
    background-color: var(--color-bar-menu);
    padding: 30px;
    border-radius: 50px;
    box-sizing: border-box;
    

    header {
        display: flex;
        padding-bottom: 5px;
        border-bottom: solid 1px gray;
        margin-bottom: 10px;
    }

    main {
        display: flex;
    }

    header div, main div {
        width: 30px;
        text-align: center;
        padding: 10px;
    }

    main div {
        margin: 5px 0;
    }

    main div:nth-child(1) {
        border-radius: 10px 0 0 10px;
    }

    main div:last-child {
        border-radius: 0 10px 10px 0;
    }

    header div:nth-child(2), main div:nth-child(2)  {
        text-align: left;
        min-width: 150px;
        padding-left: 0;
        display: flex;
        padding-left: 10px;
    }

    header div:last-child, main div:last-child {
        min-width: 90px;
        display: flex;
        padding-left: 10px;
    }

    main:nth-child(-n+2) > div {
        background-color: #14274c;
    }

    main:nth-child(-n+3):nth-child(-n+5) > div {
        background-color: #14274c;
    }

    img {
        width: 15px;
        margin-right: 10px;
    }
`;

export const DataTimeComponent = styled.div`

    background-color: ${ props => {
       if(props.position + 1 < 7){
            return '#14274c'
       }

       if(props.position + 1 < 15 && props.seriesType === 'A'){
           return '#a8b707'
       }

       if(props.position + 1 > 24){
           return '#e01111'
       }
    }};

`;
