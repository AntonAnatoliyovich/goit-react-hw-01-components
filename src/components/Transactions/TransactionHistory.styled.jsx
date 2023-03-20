import styled from '@emotion/styled';

export const Table = styled.table`
margin-bottom: 25px;
width: 360px;
display: flex;
flex-direction: column;
// justify-content: center;
// align-items: center;
font-family: 'Open Sans';
color: #092658;
font-size: 24px;
border: 0.5px solid #31363d;
`;

export const Thead = styled.thead`
background-color: #498bfa;
`;

export const TheadTr = styled.tr`
display: flex;
align-items: center;
border-bottom: 0.5px solid #31363d;
`;

export const TheadTh = styled.th`
width: 120px;
display: flex;
justify-content: center;
align-items: center;
border-right: 0.5px solid #31363d;
&:last-child {
    border-right: none;
}
`;

export const Tbody = styled.tbody`
font-family: 'Open Sans';
color: #092658;
font-size: 18px;
background-color: #f0f3f8;
`;

export const TbodyTr = styled.tr`
display: flex;
align-items: center;
border-bottom: 0.5px solid #31363d;
&:nth-child(2n) {
    background-color: #8792a3;
};
&:last-child {
    border-bottom: none;
}
`;

export const TbodyTd = styled.td`
width: 120px;
display: flex;
justify-content: center;
align-items: center;
border-right: 0.5px solid #31363d;
&:last-child {
    border-right: none;
}
`;
