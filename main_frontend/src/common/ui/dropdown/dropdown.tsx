import * as DropdownMenu from '@radix-ui/react-dropdown-menu';
import { FC, PropsWithChildren } from 'react';

import styles from './styles.module.sass';

type TDropdown = {
  title: string;
  onChange?: (key: string) => void;
  onOpenChange?: (isOpen: boolean) => void;
  options?: {
    key: string;
    title: string;
  }[];
};

export const Dropdown: FC<PropsWithChildren<TDropdown>> = ({
  children,
  title,
  onChange,
  onOpenChange,
  options,
}) => {
  const handleChange = (key: string) => {
    if (onChange) {
      onChange(key);
    }
  };

  return (
    <DropdownMenu.Root onOpenChange={onOpenChange}>
      <DropdownMenu.Trigger asChild>
        <button className={styles.IconButton} aria-label="Change Language">
          {title}
        </button>
      </DropdownMenu.Trigger>

      <DropdownMenu.Portal>
        <DropdownMenu.Content className={styles.Content} sideOffset={5}>
          {children}
          {options?.map((option, i) => (
            <DropdownMenu.Label
              key={i}
              className={styles.Label}
              onClick={() => handleChange(option.key)}
            >
              {option.title}
            </DropdownMenu.Label>
          ))}

          <DropdownMenu.Arrow className={styles.Arrow} />
        </DropdownMenu.Content>
      </DropdownMenu.Portal>
    </DropdownMenu.Root>
  );
};
