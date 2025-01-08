'use client';

import { FC, PropsWithChildren, useRef } from 'react';

import { useOnClickOutside } from '@/common/hooks/useClickOutside';
import { useHandleButton } from '@/common/hooks/useHandleButton';
import { MenuOpener } from '@/common/ui';

import { ModalWrapper } from './components';
import styles from './styles.module.sass';

type TModal = {
  onClose: () => void;
  isOpen?: boolean;
  rootId: string;
};

export const Modal: FC<PropsWithChildren<TModal>> = ({
  isOpen = false,
  onClose,
  rootId,
  children,
}) => {
  const ref = useRef<HTMLDivElement>(null);

  useHandleButton({ action: onClose, keyCode: 'Escape' });
  useOnClickOutside(ref, onClose);

  const handleClose = () => {
    onClose();
  };

  return (
    <ModalWrapper rootId={rootId} isOpen={isOpen}>
      <div className={styles.modal}>
        <div className={styles.modalWrapper} ref={ref}>
          <div className={styles.close}>
            <MenuOpener isOpen={isOpen} onClick={handleClose} />
          </div>

          {children}
        </div>
      </div>
    </ModalWrapper>
  );
};
