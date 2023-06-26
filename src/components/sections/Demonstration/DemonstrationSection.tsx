import Comparativo from '@/assets/elements/comparativo.png';
import NoCard from '@/assets/elements/no-card-dark.webp';
import SeloRD from '@/assets/elements/selo_RD.png';
import Rating from '@/assets/elements/rating.webp';

import { Button } from "@/components/Button/ButtonStyled";
import { Line } from "@/components/Line/LineStyled";
import { TextStyled } from "@/components/Text/TextStyled";

import { ContainerDemonstration, ComparationImage, WrapperText, TextReady, TextCriation, WrapperButton, WrapperNotes, Separator, ComparationImageAnimation } from "./DemonstrationStyled";

import { Wrapper, SimpleImage } from "@/styles/globalStyles/Commom";

const DemonstrationSection = () => {
    return (
        <ContainerDemonstration lightBg>
            <Wrapper align='center' justify='center' style={{ position: 'relative' }}>
                <ComparationImageAnimation
                    initial={{ opacity: 0 }}
                    whileInView={{
                        opacity: 1,
                        transition: { duration: 0.5 },
                    }}
                    viewport={{ once: true }}
                >
                    <ComparationImage src={Comparativo} alt='Leadter results' widthintern='550px' quality={100} />
                </ComparationImageAnimation>
            </Wrapper>
            <WrapperText
                direction='column'
                initial={{ opacity: 0.2, x: 300 }}
                whileInView={{
                    opacity: 1,
                    x: 0,
                    transition: { duration: 0.8, type: 'spring' },
                }}
                viewport={{ once: true }}
            >
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
    );
}

export default DemonstrationSection;