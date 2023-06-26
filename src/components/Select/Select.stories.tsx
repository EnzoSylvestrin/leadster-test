import type { Meta } from '@storybook/react';

import { Select } from './SelectStyled';

const meta: Meta<typeof Select> = {
    title: 'Components/Select',
    component: Select,
    tags: ['autodocs'],
};

export default meta;

export const Default = () => {
    return (
        <Select>
            <option>Default Select</option>
        </Select>
    )
};

export const MultipleOptions = () => {
    return (
        <Select>
            <option>Default option</option>
            <option>option 1</option>
            <option>option 2</option>
        </Select>
    )
}

