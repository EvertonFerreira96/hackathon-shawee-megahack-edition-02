import React, {useState} from 'react';
import { Feather, MaterialCommunityIcons, AntDesign } from '@expo/vector-icons';
import { Container
       , Header
       , Title
       , OptionsContainer
       , OptionButton
       , OptionTextAll
       , OptionTextMy
       , Card
       , CardHeader
       , Avatar
       , Bold
       , Description
       , CardBody
       , CardName
       , CardFooter
       , Details 
       , Value
       , Divider
       , Date
       , DateLabel
       , Actions
       , Option
       , OptionLabel   } from './styles';

import avatar from '../../assets/img/avatar.png';

export default function Activities() {
  

  const [focusedAllFilter,setFocusedAllFilter] = useState(true);
  const [focusedMyFilter,setFocusedMyFilter] = useState(false);

  const focused = {
    focusedAllFilter,
    focusedMyFilter,
  }


  return (
    <Container>
        <Header>
            <Title>Atividades</Title>
            <OptionsContainer>
              <OptionButton                 
              >
                <OptionTextAll focused={focused} name="all">Todas</OptionTextAll>
              </OptionButton>
              <OptionButton 
              >
                <OptionTextMy focused={focused} name="my">Minhas</OptionTextMy>
              </OptionButton>
            </OptionsContainer>
        </Header>

       <Card>
         <CardHeader>
           <Avatar source={avatar}/>
           <Description>
             <Bold>Você</Bold> pagou a <Bold>@eferreira </Bold>
           </Description>
         </CardHeader>
         <CardBody>
           <CardName> Everton Ferreira </CardName>
         </CardBody>
         <CardFooter>

           <Details>
             <Value>R$ 18.00 </Value>
             <Divider/>
             <Date>
               <Feather name="lock" color="#FFF"/>
               <DateLabel>Há 2 anos</DateLabel>
             </Date>
           </Details>

           <Actions>             
             <Option>
               <MaterialCommunityIcons size={14} color="#FFF" name="comment-outline" />
               <OptionLabel>3</OptionLabel>
             </Option>
             <Option>
               <AntDesign size={14} color="#FFF" name="hearto" />
               <OptionLabel>3</OptionLabel>
             </Option>
           </Actions>
         </CardFooter>
       </Card>

    </Container> 
  );
}
