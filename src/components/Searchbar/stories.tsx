import { Story, Meta } from '@storybook/react/types-6-0';
import Searchbar from '.';

export default {
  title: 'Searchbar',
  component: Searchbar
} as Meta;

export const Default: Story = () => <Searchbar />;
