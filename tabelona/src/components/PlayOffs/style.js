import styled  from "styled-components";

export const PlayOffComponent = styled.div`
    margin: 0 auto;

    .display-times, .display-times div {
        display: flex
    };

    .display-times > div {
        flex-direction: column;
    }

    img {
        max-width: 20px;
        margin: 0 10px;
    }

    .time {
        cursor: pointer;
        display: flex;
        justify-content: space-between;
        background-color: var(--color-bar-menu);
        margin: 10px 20px;
        padding: 10px;
        width: 200px;
    }

    input {
        width: 30px;
        border-radius: 10px;
        text-align: center;
        font-weight: bold;
    }

    > div div {
        display: flex;
        align-items: center;
    }
`;