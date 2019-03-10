import React from 'react';
import { Link } from 'gatsby';
import GroundedLogo from 'assets/svg/grounded-workmark.svg';
import s from './Header.scss';

interface IHeaderProps {
  children: React.ReactNode;
}

export const Header = (props: IHeaderProps) => {
  const { children, theme } = props;

  return (
    <header className={s.header}>
      <div className={s.header__container}>
        <div className={s.header__content}>
          <Link to="/" className={s.header__logo}>
            <GroundedLogo className={s.header__logoSvg} />
          </Link>

          <div className={s.header__navigation}>{children}</div>
        </div>
      </div>
    </header>
  );
};
