import React from 'react';
import {TouchableWithoutFeedback} from 'react-native';
import {MaterialIcons} from '@expo/vector-icons';

import { LinearGradientStl, TextStl } from './styles';

export default function PayButton({onPress, focused}) {
  return (
   <TouchableWithoutFeedback onPress={onPress}>
    <LinearGradientStl
        colors={
            
            focused 
            ? ['#FFF',"#EDEDED"] 
            : ['#00FC6C', '#00AC4A']}
        start={[1,0.2]}
    >
        <MaterialIcons
            name="attach-money"
            size={30}
            color={
                focused 
                ? '#000' : "#FFF"}/>

        <TextStl focused={focused}>Pagar</TextStl>
    </LinearGradientStl>
   </TouchableWithoutFeedback>   
  );
}
 