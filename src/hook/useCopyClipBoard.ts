import { useState } from 'react';

type onCopyFn = (text: string) => Promise<boolean>;

export default function useCopyClipBoard(): [boolean, onCopyFn] {
  const [isCopy, setIsCopy] = useState<boolean>(false);

  const onCopy: onCopyFn = async (text: string) => {
    try {
      await navigator.clipboard.writeText(text);
      setIsCopy(true);
      setTimeout(() => {
        setIsCopy(false);
      }, 1500);
      return true;
    } catch (e) {
      console.error(e);
      setIsCopy(false);
      return false;
    }
  };

  return [isCopy, onCopy];
}
