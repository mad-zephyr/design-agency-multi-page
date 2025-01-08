'use client';

import { ReactNode, useEffect, useState } from 'react';
import { createPortal } from 'react-dom';

type TUsePortalProps = {
  rootId: string;
};

export const usePortal = ({ rootId }: TUsePortalProps) => {
  const [root, setRoot] = useState<HTMLElement>();

  useEffect(() => {
    let rootPretender = document.getElementById(rootId);

    if (!rootPretender) {
      rootPretender = document.createElement('div');
      rootPretender.setAttribute('id', rootId);
      document.body.insertAdjacentElement('beforeend', rootPretender);
    }

    setRoot(rootPretender);
  }, [rootId]);

  if (root) {
    return (children: ReactNode) => createPortal(children, root);
  }
};
