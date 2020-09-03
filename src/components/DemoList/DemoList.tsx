import React from 'react';
import styles from './DemoList.module.scss';
import { Button } from 'antd';

export interface IDemoListProps {
  items: string[];
}

export const DemoList: React.FC<IDemoListProps> = ({ items }) => (
  <div className={styles.DemoList}>
    {items.map((item) => (
      <Button key={item}>{item}</Button>
    ))}
  </div>
);
