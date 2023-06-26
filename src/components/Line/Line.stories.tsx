import type { Meta } from '@storybook/react';

import { Line } from './LineStyled';

const meta: Meta<typeof Line> = {
    title: 'Components/Line',
    component: Line,
    tags: ['autodocs'],
};

export default meta;

export const Default = () => {
    return <Line />
};

export const Custom = () => {
    return <Line width='80%' height='4px' margin='10px 0' />
}

