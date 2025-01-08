import { useEffect } from 'react';

type TUseHandleButton = {
  action: () => void;
  keyCode: string;
};

/**
 * A custom hook that attaches a `keydown` event listener to the document
 * to invoke an action when a specific key is pressed.
 *
 * @param {Object} params - The parameters for the hook.
 * @param {() => void} params.action - The function to execute when the specified key is pressed.
 * @param {string} params.keyCode - The key code of the key that triggers the action.
 *
 * @example
 * useHandleButton({
 *   action: () => console.log('Key pressed!'),
 *   keyCode: 'Enter'
 * });
 *
 * @returns {void}
 */
export const useHandleButton = ({ action, keyCode }: TUseHandleButton) => {
  useEffect(() => {
    const handleAction = (e: KeyboardEvent) => {
      if (e.code === keyCode) {
        action();
      }
    };

    document.addEventListener('keydown', handleAction);

    return () => document.removeEventListener('keydown', handleAction);
  }, [action, keyCode]);
};
