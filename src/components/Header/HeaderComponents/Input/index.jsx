import React, { Fragment } from 'react';
import * as S from './styled';

const Input = (props) => {

    const { Focus, Blur, Change } = props;

    return (
        <Fragment>
            <S.Input type="text" placeholder='Procurar usuário...' onFocus={Focus} onBlur={Blur} onChange={Change} />
        </Fragment>
    );
}

export default Input;