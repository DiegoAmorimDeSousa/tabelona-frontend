import styled from 'styled-components';

export const HomeComponent = styled.div`
    display: flex;

    .container-play-off {
        text-align: center;
        margin: 40px 0
    }

    .container-classification, .container-play-off {
        margin: auto;
    }

    .container-classification-statistics, .container-play-off-statistics {
        display: flex;
        margin-left: 270px;
    }

    .container-classification-statistics > div {
        margin-left: 20px;
    }

    footer {
        width: auto;
        position: fixed;
        right: 20px;
        top: 20px;
        font-size: 11px;
    }
`;