import Logo from '@/assets/elements/logo.png';

import { FaLinkedinIn, FaFacebookF, FaInstagram } from 'react-icons/fa';

import { ContainerFooter, Copyright, FooterLink, GridLinks, IconStyled, Items, LightLine } from "./FooterStyled";
import { TextStyled } from "../Text/TextStyled";

import { SimpleImage, Wrapper } from "@/styles/globalStyles/Commom";

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
                <SimpleImage src={Logo} alt="Logo Leadster" widthintern="220px" />
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
                                <FooterLink
                                    key={i}
                                    href={link.href}
                                >
                                    {link.name}
                                </FooterLink>
                            ))}
                        </Items>
                    ))
                }
                <Items marginBottom="8px">
                    <h2 style={{ fontSize: '1.125rem' }}>
                        Siga a Leadster
                    </h2>
                    <Wrapper gap="8px">
                        <IconStyled href='#'><FaLinkedinIn size={16} color="#727272" /></IconStyled>
                        <IconStyled href='#'><FaFacebookF size={16} color="#727272" /></IconStyled>
                        <IconStyled href='#'><FaInstagram size={16} color="#727272" /></IconStyled>
                    </Wrapper>
                    <TextStyled size="0.875rem">
                        Email: <FooterLink href={"mailto:contato@leadster.com.br"}>contato@leadster.com.br</FooterLink>
                    </TextStyled>
                    <TextStyled size="0.875rem">
                        Telefone: <FooterLink href={"#"}>(42) 98928-9851</FooterLink>
                    </TextStyled>
                </Items>
            </GridLinks>
            <LightLine />
            <Copyright>
                <TextStyled size="0.750rem" style={{ color: '#969696' }}>
                    Copyright @ 2015 - 2022 todos os direitos reservados | <a href="#" style={{ color: "#0961d3" }}>Leadster</a>
                </TextStyled>
                <TextStyled size="0.750rem" style={{ color: '#969696' }}>
                    Rua jóse loureiro, 464 - Centro - Curitiba PR - CEP: 80010-000 | Termos de uso
                </TextStyled>
            </Copyright>
        </ContainerFooter>
    );
}

export default Footer;