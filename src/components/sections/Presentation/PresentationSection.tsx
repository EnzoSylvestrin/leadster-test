import Asset from '@/assets/elements/asset-header.png';

import { TextStyled } from "@/components/Text/TextStyled";

import { ContainerPresentation, Holder, TextChat, ContainerAttention, TextConvertion, ImageAnimation, ImageStyled, LinePresentation } from "./PresentationStyled";

const PresentationSection = () => {
    return (
        <ContainerPresentation lightBg>
            <Holder>Webinars exclusivos</Holder>
            <TextChat size="2.5rem" textAlign='center' weight="500" select='none'>
                Menos Conversinha,
            </TextChat>
            <ContainerAttention>
                <TextConvertion size="4.5rem" weight="bold" textAlign='center' gradient select='none'>
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
            <TextStyled size="md" textAlign='center' style={{ margin: '12px 10px' }}>Conheça as estratégias que <span style={{ fontWeight: 700 }}>mudaram o jogo</span> e como aplicá-las no seu negócio</TextStyled>
        </ContainerPresentation>
    );
}

export default PresentationSection;