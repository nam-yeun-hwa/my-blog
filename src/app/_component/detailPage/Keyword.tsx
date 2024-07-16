"use client"

import { useEffect } from 'react';
import style from './Keyword.module.css'

type Props = {
    keyword: string;
  };

export default  function KeywordWord({ keyword }: Props){

    return <div className={style.container}>
        <p className={style.keywordTilte}>관련 키워드</p>
        <div className={style.keywordContainer}>{keyword.split(",").map((string, id) => {
        return <p key={id} className={style.keyword}>{string}</p>
    })}</div>
        </div> 

}