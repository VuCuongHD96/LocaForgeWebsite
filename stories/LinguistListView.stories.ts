import type { Meta, StoryObj } from '@storybook/nextjs-vite';
import { LinguistListView } from '../app/UI/Linguist/LinguistListView';
import { Linguist } from '../app/Domain/Linguist/Linguist';

const sampleLinguists: Linguist[] = [
  new Linguist('1', 'Nguyễn Văn A', new Date('1990-01-15'), 'nguyenvana@email.com'),
  new Linguist('2', 'Trần Thị B', new Date('1995-05-20'), 'tranthib@email.com'),
  new Linguist('3', 'Lê Văn C', new Date('1988-11-08'), 'levanc@email.com'),
  new Linguist('4', 'Phạm Thị D', new Date('1992-07-30'), 'phamthid@email.com'),
  new Linguist('5', 'Hoàng Văn E', new Date('2000-03-12'), 'hoangvane@email.com'),
];

const emptyList: Linguist[] = [];

const meta = {
  title: 'Linguist/LinguistListView',
  component: LinguistListView,
  tags: ['autodocs'],
  parameters: {
    layout: 'centered',
  },
  argTypes: {
    linguistList: { control: 'object' },
  },
} satisfies Meta<typeof LinguistListView>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Default: Story = {
  args: {
    linguistList: sampleLinguists,
  },
};

export const Empty: Story = {
  args: {
    linguistList: emptyList,
  },
};

export const SingleLinguist: Story = {
  args: {
    linguistList: [sampleLinguists[0]],
  },
};

/** Hiển thị nhiều linguist (stress test UI) */
export const ManyLinguists: Story = {
  args: {
    linguistList: [
      ...sampleLinguists,
      new Linguist('6', 'Đặng Thị F', new Date('1993-09-01'), 'dangthif@email.com'),
      new Linguist('7', 'Bùi Văn G', new Date('1985-12-25'), 'buivang@email.com'),
      new Linguist('8', 'Đỗ Thị H', new Date('1998-06-15'), 'dothih@email.com'),
    ],
  },
};
