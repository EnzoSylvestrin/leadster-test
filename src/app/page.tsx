'use client'; // need to use it because  styled components does not support next 13 yet 

import { TextStyled } from "@/components/Text/TextStyled";

import { ContainerAttention, ContainerPresentation, Holder, ImageStyled, Line } from "@/styles/LandingStyled";

import Asset from '@/assets/elements/asset-header.png';

export const metadata = {
  title: 'Leadster test',
  description: 'site made to leadster test',
}

const Home = () => {
  return (
    <ContainerPresentation lightBg>
      <Holder>Webinars exclusivos</Holder>
      <TextStyled size="2.5rem" weight="500">Menos Conversinha,</TextStyled>
      <ContainerAttention>
        <TextStyled size="4.5rem" weight="bold" gradient>Mais Conversão</TextStyled>
        <ImageStyled src={Asset} alt="" />
      </ContainerAttention>
      <Line />
      <TextStyled size="md" style={{ marginTop: '12px' }}>Conheça as estratégias que <span style={{ fontWeight: 700 }}>mudaram o jogo</span> e como aplicá-las no seu negócio</TextStyled>
    </ContainerPresentation>
  )
}

export default Home;
