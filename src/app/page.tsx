'use client'; // need to use it because  styled components does not support next 13 yet 

import Asset from '@/assets/elements/asset-header.png';
import Comparativo from '@/assets/elements/comparativo.png';

import { TextStyled } from "@/components/Text/TextStyled";
import { Line } from "@/components/Line/LineStyled";
import { FilterCard } from '@/components/FilterCard/FilterStyled';
import { PaginationNumber } from '@/components/PaginationNumbers/PaginationNumbers';

import { Cards, ContainerVideos, SelectFilters, WrapperFilters, WrapperPagination, WrapperVideos } from '@/styles/initialPage/VideosStyled';
import { ContainerAttention, ContainerPresentation, Holder, ImageStyled } from "@/styles/initialPage/PresentationStyled";
import { ContainerDemonstration, WrapperDemonstration, WrapperImage, DemonstrationImage } from '@/styles/initialPage/DemonstrationStyled';

export const metadata = {
  title: 'Leadster test',
  description: 'site made to leadster test',
}

const Home = () => {
  return (
    <>
      <ContainerPresentation lightBg>
        <Holder>Webinars exclusivos</Holder>
        <TextStyled size="2.5rem" weight="500" select='none'>Menos Conversinha,</TextStyled>
        <ContainerAttention>
          <TextStyled size="4.5rem" weight="bold" gradient select='none'>Mais Conversão</TextStyled>
          <ImageStyled src={Asset} alt="" />
        </ContainerAttention>
        <Line />
        <TextStyled size="md" style={{ marginTop: '12px' }}>Conheça as estratégias que <span style={{ fontWeight: 700 }}>mudaram o jogo</span> e como aplicá-las no seu negócio</TextStyled>
      </ContainerPresentation>
      <ContainerVideos>
        <WrapperVideos>
          <WrapperFilters>
            <Cards>
              <FilterCard>Agências</FilterCard>
              <FilterCard>ChatBot</FilterCard>
              <FilterCard>Marketing Digital</FilterCard>
              <FilterCard>Geração de Leads</FilterCard>
              <FilterCard>Mídia paga</FilterCard>
            </Cards>
            <SelectFilters>
              <TextStyled size='1rem'>Ordenar por</TextStyled>
              <select>
                <option value='teste'>teste</option>
              </select>
            </SelectFilters>
          </WrapperFilters>
          <Line width='100%' margin='20px 0px' />
          <p>TODO: Videos</p>
          <Line width='100%' margin='20px 0px' />
          <WrapperPagination>
            <TextStyled size="1rem" weight='700' style={{ marginRight: '2px' }}>Página</TextStyled>
            <PaginationNumber>1</PaginationNumber>
            <PaginationNumber>2</PaginationNumber>
            <PaginationNumber className='active'>3</PaginationNumber>
            <PaginationNumber>4</PaginationNumber>
          </WrapperPagination>
        </WrapperVideos>
      </ContainerVideos>
      <ContainerDemonstration lightBg>
        <WrapperImage>
          <DemonstrationImage src={Comparativo} alt='Leadter results' />
        </WrapperImage>
        <WrapperDemonstration>
          <TextStyled size='2rem' line={1.300}>
            Pronto para triplicar sua <br />
            <span style={{ fontWeight: '700' }}>Geração de leads?</span>
          </TextStyled>
          <TextStyled size='1.125rem' style={{ marginTop: '8px' }}>
            Criação e ativação em <span style={{ fontWeight: '700' }}>4 minutos</span>
          </TextStyled>
          <Line width='100%' margin="20px 0px" />
        </WrapperDemonstration>
      </ContainerDemonstration>
    </>
  )
}

export default Home;
