import React from 'react';
import * as S from './styled';

const RepositoryItem = ({ name, linkToRepo, fullName }) => {
  return (
    <S.Wrapper>
        <S.WrapperTittle>{name}</S.WrapperTittle>
        <S.WrapperFullName>
          Full name: <S.WrapperURL href={linkToRepo}>{fullName}</S.WrapperURL>
        </S.WrapperFullName>
        
    </S.Wrapper>
  );
}

export default RepositoryItem;