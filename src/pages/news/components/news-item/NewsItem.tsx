import React from 'react';
import RichText from 'components/rich-text/RichText';
import { format } from 'date-fns';
import { isEmpty } from 'lodash';
import s from './NewsItem.scss';

interface INewsItemProps {
  title: any;
  image: any;
  url: any;
  summary: any;
  date: any;
  tag: string;
}

export default (props: INewsItemProps) => (
  <div className={s.newsItem}>
    <div className={s.date}>
      {isEmpty(props.tag) ? 'Outreach' : props.tag} |{' '}
      {format(props.date, 'MMM D, YYYY')}
    </div>
    {props.title && RichText.render(props.title)}
    {!isEmpty(props.image && props.image.url) && (
      <div className={s.image}>
        <img src={props.image.url} />
      </div>
    )}
    {props.summary && RichText.render(props.summary)}
    {props.url && (
      <a href={props.url.url} className={s.link} target="_blank">
        Read More +
      </a>
    )}
  </div>
);
