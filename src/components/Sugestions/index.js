import React from 'react';
import { View } from 'react-native';

import { Container, Option, Img, Label } from './styles';

import img1 from '../../assets/img/01.png';
import img2 from '../../assets/img/02.png';
import img3 from '../../assets/img/03.png';
import img4 from '../../assets/img/04.png';
import img5 from '../../assets/img/05.png';
import img6 from '../../assets/img/06.png';
import img7 from '../../assets/img/07.png';
import img8 from '../../assets/img/08.png';
import img9 from '../../assets/img/09.png';
import img10 from '../../assets/img/10.png';
import img11 from '../../assets/img/11.png';
import img12 from '../../assets/img/12.png';
import img13 from '../../assets/img/13.png';

const items =[
  {
    key: String(Math.random()),
    img: img1,
    label: `Recarga de Celular`,
  },
  {
    key: String(Math.random()),
    img: img2,
    label: `Uber Pré Pago`,
  },
  {
    key: String(Math.random()),
    img: img3,
    label: `Cartão Transporte`,
  },
  {
    key: String(Math.random()),
    img: img4,
    label: `Sky Pré Pago`,
  },
  {
    key: String(Math.random()),
    img: img5,
    label: `Doações`,
  },
  {
    key: String(Math.random()),
    img: img6,
    label: `Pagar Boleto`,
  },
  {
    key: String(Math.random()),
    img: img7,
    label: `Cobrar`,
  },
]

export default function Sugestions() {
  return (
    <Container>
    {
      items.map((item) =>(
        <Option key={item.key}>
          <Img source={item.img}/>
          <Label>{item.label}</Label>
        </Option>
      ))
    }
   </Container>
  );
}
