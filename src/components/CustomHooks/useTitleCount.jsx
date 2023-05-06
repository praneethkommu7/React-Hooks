import { useEffect } from "react";

const useTitleCount = (count) => {
  return useEffect(() => {
    console.log(`useEffect`);
    count === 0
      ? (document.title = `Chats`)
      : (document.title = `Chats (${count})`);
  }, [count]);
};

export default useTitleCount;
