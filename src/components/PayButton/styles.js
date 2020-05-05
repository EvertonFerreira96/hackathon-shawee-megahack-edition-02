import styled from 'styled-components/native';
import { LinearGradient } from 'expo-linear-gradient';

export const LinearGradientStl = styled(LinearGradient)`
width: 65px;
height: 65px;
border-radius:32.5px;
align-items:center;
justify-content:center;
`;

export const TextStl = styled.Text`
font-size: 12px;
color: ${({focused}) => focused ? '#000' : '#FFF'}`;