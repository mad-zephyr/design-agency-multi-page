import { FC } from 'react';

import { TButton } from './button.types';
import { Button, MovingButton } from './components';

type TGenericButton = {
  data?: TButton;
};

export const GenericButton: FC<TGenericButton> = ({ data }) => {
  if (data) {
    return data.btnstyle === 'standard' ? (
      <Button {...data} />
    ) : (
      <MovingButton {...data} />
    );
  }

  return <></>;
};
