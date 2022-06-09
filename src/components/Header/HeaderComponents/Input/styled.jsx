import styled from 'styled-components';

export const Input = styled.input`
    border: 1px solid #8b949e;
    border-radius: 5px;
    height: 1.6rem;
    width: 13vw;
    margin-left: 9vw;
    transition: width .2s ease-in-out;
    &::placeholder {
        color: #c3cbd4;
        padding-left: 1vw;
    }
    &:focus {
        outline: none;
        width: 23vw;
        border-top-right-radius: 0;
        border-bottom-right-radius: 0;
        padding-left: 1vw;

        &::placeholder {
            color: #8b949e;
            padding-left: .1vw;
        }
    }
`;