'use client'; // need to use it because  styled components does not support next 13 yet 

import Asset from '@/assets/elements/asset-header.png';

import { ContainerAttention, ContainerPresentation, Holder, ImageStyled } from "@/styles/PresentationStyled";
import { TextStyled } from "@/components/Text/TextStyled";
import { Cards, ContainerVideos, SelectFilters, WrapperFilters, WrapperVideos } from '@/styles/VideosStyled';
import { Line } from "@/components/Line/LineStyled";
import { FilterCard } from '@/components/FilterCard/FilterStyled';

export const metadata = {
  title: 'Leadster test',
  description: 'site made to leadster test',
}

const Home = () => {
  return (
    <>
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
        </WrapperVideos>
      </ContainerVideos>
    </>
  )
}

export default Home;
