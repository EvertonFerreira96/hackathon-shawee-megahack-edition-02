 import styled from 'styled-components/native';

export const Container = styled.View`
margin-top:25px;
padding: 0 16px;`;

export const Header = styled.View` 
justify-content: space-between;
flex-direction: row;
`;

export const Title = styled.Text`
color: #FFF;
font-size: 18px;
font-weight: 700;
`;

export const OptionsContainer = styled.View`
flex-direction: row;
height: 40px;
margin-right: 30px;
`; 
export const OptionButton= styled.TouchableHighlight`
border-bottom-color: #000;
border-bottom-width: 1px;
margin-left:30px;
padding:0 20px;
`; 

export const OptionTextAll = styled.Text`
    color: ${({ focused }) => focused.focusedAllFilter
            ? '#10C86E' : '#CCC'};
     `;
 export const OptionTextMy = styled.Text`
 color: ${({ focused }) => focused.focusedMyFilter
         ? '#10C86E' : '#CCC'};
  `;
    
export const Card = styled.View`
background: #1E222B;
border-radius: 8px;
margin-top: 20px;
padding: 15px;
 `;
export const CardHeader = styled.View`
flex-direction: row;
align-items: center;`;

export const Avatar = styled.Image``;

export const Bold = styled.Text`
font-weight:700;`;

export const Description = styled.Text`
color: #FFF;
font-size:16px;
margin-left: 15px;`;

export const CardBody = styled.View`
margin-top: 20px;`;

export const CardName = styled.Text`
color: #FFF;
font-size: 20px;`;

export const CardFooter = styled.View`
margin-top:15px;
flex-direction: row;
justify-content: space-between;
`;

export const Details = styled.View`
flex-direction: row;
align-items: center;
`;

export const Value = styled.Text`
color: #F75175;
font-size: 14px;
font-weight: 700;`;


export const Divider = styled.View`
width: 2px;
height:15px;
background: rgba(255,255,255, 0.4);
margin: 0 10px;
`;

export const Date = styled.View`
flex-direction: row;
align-items: center;
`;

export const DateLabel = styled.Text`
`;

export const Actions = styled.View`
flex-direction:row;`;

export const Option  = styled.TouchableOpacity`
flex-direction:row;
margin-left:15px;`;

export const OptionLabel = styled.Text`
color: #FFF;
font-size: 14px;
margin-left: 5px;
`;
