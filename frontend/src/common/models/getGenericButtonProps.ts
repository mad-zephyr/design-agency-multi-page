import {
  ComponentUiButton,
  Enum_Componentuibutton_Btnstyle,
  Enum_Componentuibutton_Btntype,
  Enum_Componentuibutton_Variant,
  Maybe,
} from '@/types/types';

import { TButton } from '../ui/button/button.types';

export const getButtonType = (type: Enum_Componentuibutton_Btntype) => {
  switch (type) {
    case Enum_Componentuibutton_Btntype.Submit: {
      return 'submit';
    }
    case Enum_Componentuibutton_Btntype.Form: {
      return 'form';
    }
    case Enum_Componentuibutton_Btntype.NavExternal: {
      return 'nav_external';
    }
    case Enum_Componentuibutton_Btntype.NavInternal:
    default: {
      return 'nav_internal';
    }
  }
};

export const getUiGenericButtonProps = (
  button?: Maybe<ComponentUiButton>
): TButton | undefined => {
  if (!button) {
    return;
  }

  const btnType = getButtonType(button.btnType);

  const btnstyle =
    button.btnStyle === Enum_Componentuibutton_Btnstyle.Moving
      ? 'moving'
      : 'standard';

  const variant =
    button.variant === Enum_Componentuibutton_Variant.Dark ? 'dark' : 'light';

  if (btnType === 'submit') {
    return {
      variant,
      title: button.title || '',
      btnType,
      btnstyle,
      subtitle: button.subtitle || '',
    };
  }

  return {
    variant,
    title: !!button.title ? button.title : undefined,
    url: !!button.url ? button.url : '/',
    btnType,
    btnstyle,
    subtitle: button.subtitle || '',
  };
};
