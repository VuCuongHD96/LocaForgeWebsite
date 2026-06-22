import type { Meta, StoryObj } from '@storybook/nextjs-vite';
import React, { useState, useEffect } from 'react';
import { LinguistListView } from '../app/UI/Linguist/LinguistListView';
import { Linguist } from '../app/Domain/Linguist/Linguist';

/**
 * Mock LinguistScreen — hiển thị giao diện y hệt component thật
 * nhưng dùng mock data thay vì ViewModel/RxJS/tsyringe để tránh deadlock.
 */
function MockLinguistScreen() {
  const [linguistList, setLinguistList] = useState<Linguist[]>([]);

  useEffect(() => {
    // Giả lập async load giống như component thật
    const timer = setTimeout(() => {
      setLinguistList([
        new Linguist('1', 'Nguyễn Văn A', new Date('1990-01-15'), 'nguyenvana@email.com'),
        new Linguist('2', 'Trần Thị B', new Date('1995-05-20'), 'tranthib@email.com'),
        new Linguist('3', 'Lê Văn C', new Date('1988-11-08'), 'levanc@email.com'),
      ]);
    }, 500);

    return () => clearTimeout(timer);
  }, []);

  return <LinguistListView linguistList={linguistList} />;
}

const meta = {
  title: 'Linguist/LinguistScreen',
  component: MockLinguistScreen,
  tags: ['autodocs'],
  parameters: {
    layout: 'centered',
  },
} satisfies Meta<typeof MockLinguistScreen>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Default: Story = {
  parameters: {
    docs: {
      description: {
        story:
          'Màn hình danh sách Linguist. Component thật dùng RxJS + ViewModel + tsyringe. ' +
          'Story này dùng mock data để hiển thị UI giống hệt.',
      },
    },
  },
};

/** Trạng thái loading - chưa có dữ liệu */
export const Loading: Story = {
  decorators: [
    () => {
      return (
        <div>
          <h1>Linguist List</h1>
          <p>Loading...</p>
        </div>
      );
    },
  ],
  parameters: {
    docs: {
      description: {
        story: 'Trạng thái ban đầu khi chưa load dữ liệu.',
      },
    },
  },
};
