import { useEffect } from 'react';

const useDisplay = (popupRef, setShowList, inputRef) => {
  useEffect(() => {
    const handleClickOutside = (event) => {
      if (
        popupRef.current &&
        !popupRef.current.contains(event.target) &&
        inputRef.current &&
        !inputRef.current.contains(event.target)
      ) {
        setShowList(false);
      }
    };
    document.addEventListener('click', handleClickOutside, true);
    return () => {
      document.removeEventListener('click', handleClickOutside, true);
    };
  }, [inputRef, popupRef, setShowList]);

  return;
};

export default useDisplay;
