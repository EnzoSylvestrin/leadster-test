'use client'; // need to use it because  styled components does not support next 13 yet 

import Comparativo from '@/assets/elements/comparativo.png';
import NoCard from '@/assets/elements/no-card-dark.webp';
import Asset from '@/assets/elements/asset-header.png';
import SeloRD from '@/assets/elements/selo_RD.png';
import Rating from '@/assets/elements/rating.webp';

import { PaginationNumber } from '@/components/PaginationNumbers/PaginationNumbers';
import { FilterCard } from '@/components/FilterCard/FilterStyled';
import { TextStyled } from "@/components/Text/TextStyled";
import { Button } from '@/components/Button/ButtonStyled';
import { Select } from '@/components/Select/SelectStyled';
import { Line } from "@/components/Line/LineStyled";

import { ContainerVideos, WrapperCards, WrapperFilters, WrapperPagination, WrapperSelect, WrapperVideos } from '@/styles/initialPage/VideosStyled';
import { ContainerAttention, ContainerPresentation, Holder, ImageStyled, TextConvertion, LinePresentation, TextChat } from "@/styles/initialPage/PresentationStyled";
import { ContainerDemonstration, Separator } from '@/styles/initialPage/DemonstrationStyled';
import { SimpleImage, Wrapper } from '@/styles/globalStyles/Commom';

const Home = () => {
  return (
    <>
      <ContainerPresentation lightBg>
        <Holder>Webinars exclusivos</Holder>
        <TextChat size="2.5rem" align='center' weight="500" select='none'>Menos Conversinha,</TextChat>
        <ContainerAttention>
          <TextConvertion size="4.5rem" weight="bold" align='center' gradient select='none'>
            Mais Conversão
          </TextConvertion>
          <ImageStyled src={Asset} alt="Text asset" />
        </ContainerAttention>
        <LinePresentation />
        <TextStyled size="md" align='center' style={{ margin: '12px 10px' }}>Conheça as estratégias que <span style={{ fontWeight: 700 }}>mudaram o jogo</span> e como aplicá-las no seu negócio</TextStyled>
      </ContainerPresentation>
      <ContainerVideos>
        <WrapperVideos direction="column" align="center" justify='center' width="80%">
          <WrapperFilters align="center" justify='space-between' width='100%'>
            <WrapperCards width='auto' align="center" justify="center" gap="8px">
              <FilterCard>Agências</FilterCard>
              <FilterCard>ChatBot</FilterCard>
              <FilterCard>Marketing Digital</FilterCard>
              <FilterCard className='active'>Geração de Leads</FilterCard>
              <FilterCard>Mídia paga</FilterCard>
            </WrapperCards>
            <WrapperSelect width='auto' align="center" justify="center" gap='8px'>
              <TextStyled align='center' size='1rem'>Ordenar por</TextStyled>
              <Select> {/* Select é normalmente usado de alguma biblioteca, nesse caso simples usado do browser por não saber as especificações */}
                <option>Data de publicação</option>
                <option>Option 1</option>
                <option>Option 2</option>
                <option>Option 3</option>
              </Select>
            </WrapperSelect>
          </WrapperFilters>
          <Line width='100%' margin='20px 0px' />
          <p>TODO: Videos</p>
          <Line width='100%' margin='20px 0px' />
          <WrapperPagination align="center" justify="center" gap="4px">
            <TextStyled size="1rem" weight='700' style={{ marginRight: '2px' }}>Página</TextStyled>
            <PaginationNumber>1</PaginationNumber>
            <PaginationNumber>2</PaginationNumber>
            <PaginationNumber className='active'>3</PaginationNumber>
            <PaginationNumber>4</PaginationNumber>
          </WrapperPagination>
        </WrapperVideos>
      </ContainerVideos>
      <ContainerDemonstration lightBg>
        <Wrapper align='center' justify='center'>
          <SimpleImage src={Comparativo} alt='Leadter results' widthintern='550px' />
        </Wrapper>
        <Wrapper direction='column'>
          <TextStyled size='2rem' line={1.300}>
            Pronto para triplicar sua <br />
            <span style={{ fontWeight: '700' }}>Geração de leads?</span>
          </TextStyled>
          <TextStyled size='1.125rem' style={{ marginTop: '8px' }}>
            Criação e ativação em <span style={{ fontWeight: '700' }}>4 minutos</span>
          </TextStyled>
          <Line width='100%' margin="20px 0px" />
          <Wrapper gap="8px">
            <Button>Ver Demonstração</Button>
            <SimpleImage src={SeloRD} alt='Selo RD' widthintern='160px' />
          </Wrapper>
          <Wrapper gap="6px" align='center' margin='6px 0 0 0'>
            <SimpleImage src={NoCard} alt="Cartão não necessário" widthintern='16px' />
            <TextStyled size='0.825rem'>
              <span style={{ fontWeight: '700' }}>Não</span>
              {' '} é necessário Cartão de Crédito
            </TextStyled>
            <Separator />
            <SimpleImage src={Rating} alt='Avaliação' widthintern='auto' />
            <TextStyled size='0.825rem'>4.9/5 média de satisfação</TextStyled>
          </Wrapper>
        </Wrapper>
      </ContainerDemonstration>
    </>
  )
}

export default Home;
