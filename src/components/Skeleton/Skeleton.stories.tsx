import type { Meta } from '@storybook/react';

import Skeleton from './Skeleton';

const meta: Meta<typeof Skeleton> = {
    title: 'Components/Skeleton',
    component: Skeleton,
    tags: ['autodocs'],
};

export default meta;

export const Default = () => {
    return (
        <Skeleton width={100} height={20} />
    )
};

export const Circle = () => {
    return (
        <Skeleton width={100} height={20} circle />
    )
}