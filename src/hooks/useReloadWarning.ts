import { useEffect } from 'react';

const useReloadWarning = (isCartNotEmpty: boolean) => {
  useEffect(() => {
    const handleBeforeUnload = (event: BeforeUnloadEvent) => {
      if (isCartNotEmpty) {
        const message =
          'You have items in your cart. Are you sure you want to leave?';
        event.returnValue = message;
        return message;
      }
    };
    window.addEventListener('beforeunload', handleBeforeUnload);
    return () => {
      window.removeEventListener('beforeunload', handleBeforeUnload);
    };
  }, [isCartNotEmpty]);
};

export default useReloadWarning;
