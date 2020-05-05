import styled from 'styled-components/native';

export const Wrapper = styled.SafeAreaView`
background: #000;
flex: 1;`;

export const Header = styled.View` 
height: 50px;
padding: 5px 22px; 
flex-direction: row;
text-align: center;
justify-content: space-between;
`;

export const BalanceTitle = styled.Text` 
color: rgba(255,255,255,0.8);
text-align: center;
font-size: 14px;
`;
export const Balance = styled.Text` 
color: #FFF;
text-align: center;
font-size: 20px;
font-weight: 700;
`;

export const NofityContainer = styled.View` 
flex-direction: row-reverse;
text-align: center;
flex: 1;
`;
export const BalanceContainer = styled.View` 
text-align: center;
justify-content: space-between;
flex: 1;
`;

export const Container = styled.ScrollView``;