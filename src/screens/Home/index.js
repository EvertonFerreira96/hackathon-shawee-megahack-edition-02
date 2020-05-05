import React from 'react';
import { View, Text } from 'react-native';
import { MaterialCommunityIcons, AntDesign } from '@expo/vector-icons'

import Sugestions from '../../components/Sugestions';
import Activities from '../../components/Activities';

import { Wrapper, Container, Header,BalanceContainer,NofityContainer, BalanceTitle, Balance } from './styles';

export default function Home() {
  return (
    <Wrapper>
      <Container>
        <Header>
          <MaterialCommunityIcons style={{flex: 1}} name="qrcode-scan" size={25} color="#10C86E" />
          <BalanceContainer>
            <BalanceTitle> Meu Saldo </BalanceTitle>
            <Balance> R$0.00 </Balance>
          </BalanceContainer>
          <NofityContainer>
            <MaterialCommunityIcons name="ticket-percent" size={25} color="#10C86E" />
            <AntDesign name="gift" size={25} color="#10C86E" style={{marginRight:15}} />
          </NofityContainer>
        </Header>

        <Sugestions/>

       
       <Activities/>

    </Container>
    </Wrapper>
  );
}
