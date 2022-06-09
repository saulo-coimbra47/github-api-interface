import styled from "styled-components";

export const WrapperUserData = styled.div`
    display: flex;
    align-items: center;
    margin-bottom: .5rem;
    h3 {
        margin-right: .5rem;
    }
    a {
        color: #8b949e;
        font-size: 1.2rem;
        font-weight: bold;
        text-decoration: none;
    }
    a:hover {
        color: white;
    }
`;

export const WrapperInfoText = styled.div`
    display: flex;
    flex-direction: column;
    flex-wrap: wrap;
    width: 20vw;
    align-items: flex-start;
    padding-left: 5%;
`;