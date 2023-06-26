import type { Meta } from '@storybook/react';

import { Button, ButtonLink, ButtonNextLink } from './ButtonStyled';

const meta: Meta<typeof Button> = {
    title: 'Components/Button',
    component: Button,
    tags: ['autodocs'],
};

export default meta;

export const Default = () => {
    return <Button>Texto de exemplo</Button>
};

export const LinkButton = () => {
    return <ButtonLink>Texto de exemplo</ButtonLink>
};

export const LinkNextButton = () => {
    return <ButtonNextLink href={'#'}>Texto de exemplo</ButtonNextLink>
};
