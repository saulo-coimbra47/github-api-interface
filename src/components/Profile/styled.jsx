import styled from "styled-components";

export const Wrapper = styled.div`
    display: flex;
    flex-direction: column;
    align-items: center;
    padding-left: 8vw;
    width: 40vw;
    height: 60vh;
`;

export const WrapperInfoUser = styled.div`
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: space-between;
    height: 100%;
    width: 30vw;
    h1 {
        font-size: 2rem;
        font-weight: bold;
    }
    h3 {
        font-size: 1.25rem;
        font-weight: bold;
    }
    h4 {
        font-size: 1rem;
        font-weight: bold;
    }
`;

export const WrapperImage = styled.img`
    align-self: center;
    border-radius: 50%;
    width: 19rem;
    height: 19rem;
    margin: .5rem;
`;