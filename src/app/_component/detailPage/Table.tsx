// 'use clinet';

import { useEffect } from 'react';
import style from './table.module.css';

type Props = {
  table: string;
};

export default function Table({ table }: Props) {
  return <div dangerouslySetInnerHTML={{ __html: table }}></div>;
}
