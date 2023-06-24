import { SimpleImage, Wrapper } from "@/styles/globalStyles/Commom";

import { ContainerFooter, GridLinks, Items } from "./FooterStyled";

import Logo from '@/assets/elements/logo.png';
import { TextStyled } from "../Text/TextStyled";

type LinksProps = {
    title: string,
    links: LinksTextProps[]
}

type LinksTextProps = {
    name: string,
    href: string
}

const Footer = () => {

    const footerTitles: LinksProps[] = [
        {
            title: 'Links Principais',
            links: [
                { name: 'Home', href: '#' },
                { name: 'Ferramenta', href: '#' },
                { name: 'Preços', href: '#' },
                { name: 'Contato', href: '#' },
            ]
        },
        {
            title: 'Cases',
            links: [
                { name: 'Geração de leads B2B', href: '#' },
                { name: 'Geração de leads em Software', href: '#' },
                { name: 'Geração de leads em Imobiliária', href: '#' },
                { name: 'Cases de sucesso', href: '#' },
            ]
        },
        {
            title: 'Materiais',
            links: [
                { name: "Blog", href: '#' },
                { name: "Parceria com Agências", href: '#' },
                { name: "Guia Definitivo do Marketing", href: '#' },
                { name: "Materiais Gratuitos", href: '#' },
            ]
        }
    ]

    return (
        <ContainerFooter>
            <Wrapper direction="column" align="center" justify="center">
                <SimpleImage src={Logo} alt="Logo Leadster" widthIntern="220px" />
                <TextStyled size="0.825rem" style={{ marginTop: '8px' }}>Tranformando visitantes em clientes</TextStyled>
            </Wrapper>
            <GridLinks>
                {
                    footerTitles.map((title, i) => (
                        <Items key={i}>
                            <h2 style={{ fontSize: '1.125rem' }}>
                                {title.title}
                            </h2>
                            {title.links.map((link, i) => (
                                <a
                                    key={i}
                                    href={link.href}
                                    style={{ color: '#969696', fontSize: '0.875rem' }}
                                >
                                    {link.name}
                                </a>
                            ))}
                        </Items>
                    ))
                }
                <Items>
                    <h2 style={{ fontSize: '1.125rem' }}>
                        Siga a Leadster
                    </h2>
                    <TextStyled size="0.875rem">
                        Email: <a href={"mailto:contato@leadster.com.br"} style={{ color: '#969696' }}>contato@leadster.com.br</a>
                    </TextStyled>
                    <TextStyled size="0.875rem">
                        Telefone: <a href={"#"} style={{ color: '#969696' }}>(42) 98928-9851</a>
                    </TextStyled>
                </Items>
            </GridLinks>
        </ContainerFooter>
    );
}

export default Footer;