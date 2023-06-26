import type { Meta } from '@storybook/react';

import { TextStyled } from './TextStyled';

const meta: Meta<typeof TextStyled> = {
    title: 'Components/Text',
    component: TextStyled,
    tags: ['autodocs'],
};

export default meta;

export const Default = () => {
    return (
        <TextStyled size='2rem'>Algum Texto</TextStyled>
    )
};

export const Colored = () => {
    return (
        <TextStyled size='2rem' color='#ff0000'>Algum Texto</TextStyled>
    )
};

export const WithGradient = () => {
    return (
        <TextStyled size='2rem' gradient>Algum Texto</TextStyled>
    )
};

export const Bold = () => {
    return (
        <TextStyled size='2rem' weight='700'>Algum Texto</TextStyled>
    )
};

export const Centered = () => {
    return (
        <TextStyled size='2rem' textAlign='center'>Algum Texto</TextStyled>
    )
};

export const NotSelectable = () => {
    return (
        <TextStyled size='2rem' select='none'>Algum Texto</TextStyled>
    )
};

export const Custom = () => {
    return (
        <TextStyled size='2rem' select='none' textAlign='right' color='var(--main)'>Algum Texto</TextStyled>
    )
};



