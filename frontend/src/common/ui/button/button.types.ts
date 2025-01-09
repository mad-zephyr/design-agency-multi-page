import { ButtonHTMLAttributes } from 'react';

export type TBaseButton = {
  title?: string;
  subtitle?: string;
  variant?: 'light' | 'dark';
  isMoving?: boolean;
  size?: 'large';
  className?: string;
  btnstyle: 'moving' | 'standard';
  onClick?: () => void;
};

export type TButtonSubmit = TBaseButton &
  ButtonHTMLAttributes<HTMLButtonElement> & {
    btnType: 'submit' | 'form';
  };

export type TButtonLink = TBaseButton & {
  btnType: 'nav_external' | 'nav_internal';
  url: string;
};

export type TButton = TButtonLink | TButtonSubmit;
