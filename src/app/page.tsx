'use client'; // need to use it because  styled components does not support next 13 yet 

import Comparativo from '@/assets/elements/comparativo.png';
import NoCard from '@/assets/elements/no-card-dark.webp';
import Asset from '@/assets/elements/asset-header.png';
import SeloRD from '@/assets/elements/selo_RD.png';
import Rating from '@/assets/elements/rating.webp';

import { TextStyled } from "@/components/Text/TextStyled";
import { Button } from '@/components/Button/ButtonStyled';
import { Line } from "@/components/Line/LineStyled";
import VideosSection from '@/components/Videos/Videos';

import { ContainerAttention, ContainerPresentation, Holder, ImageStyled, TextConvertion, LinePresentation, TextChat, ImageAnimation } from "@/styles/initialPage/PresentationStyled";
import { ComparationImage, ContainerDemonstration, Separator, TextCriation, TextReady, WrapperButton, WrapperNotes, WrapperText } from '@/styles/initialPage/DemonstrationStyled';
import { SimpleImage, Wrapper } from '@/styles/globalStyles/Commom';

const Home = () => {
  return (
    <>
      <ContainerPresentation lightBg>
        <Holder>Webinars exclusivos</Holder>
        <TextChat size="2.5rem" align='center' weight="500" select='none'>
          Menos Conversinha,
        </TextChat>
        <ContainerAttention>
          <TextConvertion size="4.5rem" weight="bold" align='center' gradient select='none'>
            Mais Conversão
          </TextConvertion>
          <ImageAnimation
            initial={{ scale: 0.2, y: -50 }}
            animate={{
              scale: 1,
              y: 0,
              transition: { duration: 0.5, type: 'spring', stiffness: 200, damping: 20 },
            }}
          >
            <ImageStyled src={Asset} alt="Text asset" quality={100} />
          </ImageAnimation>
        </ContainerAttention>
        <LinePresentation />
        <TextStyled size="md" align='center' style={{ margin: '12px 10px' }}>Conheça as estratégias que <span style={{ fontWeight: 700 }}>mudaram o jogo</span> e como aplicá-las no seu negócio</TextStyled>
      </ContainerPresentation>
      <VideosSection />
      <ContainerDemonstration lightBg>
        <Wrapper align='center' justify='center'>
          <ComparationImage src={Comparativo} alt='Leadter results' widthintern='550px' quality={100} />
        </Wrapper>
        <WrapperText direction='column'>
          <TextReady size='2rem' line={1.300}>
            Pronto para triplicar sua <br />
            <span style={{ fontWeight: '700' }}>Geração de leads?</span>
          </TextReady>
          <TextCriation size='1.125rem' style={{ marginTop: '8px' }}>
            Criação e ativação em <span style={{ fontWeight: '700' }}>4 minutos</span>
          </TextCriation>
          <Line width='100%' margin="20px 0px" />
          <WrapperButton gap="8px">
            <Button>Ver Demonstração</Button>
            <SimpleImage src={SeloRD} alt='Selo RD' widthintern='160px' quality={100} />
          </WrapperButton>
          <WrapperNotes gap="6px" align='center' margin='6px 0 0 0'>
            <SimpleImage src={NoCard} alt="Cartão não necessário" widthintern='16px' quality={100} />
            <TextStyled size='0.825rem'>
              <span style={{ fontWeight: '700' }}>Não</span>
              {' '} é necessário Cartão de Crédito
            </TextStyled>
            <Separator />
            <Wrapper width='auto' align="center" justify='start' gap='8px'>
              <SimpleImage src={Rating} alt='Avaliação' widthintern='auto' quality={100} />
              <TextStyled size='0.825rem'><span style={{ fontWeight: 'bold' }}>4.9</span>/5 média de satisfação</TextStyled>
            </Wrapper>
          </WrapperNotes>
        </WrapperText>
      </ContainerDemonstration>
    </>
  )
}

export default Home;
