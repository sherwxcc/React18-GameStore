import { useState } from "react";

function useVisibility() {
  const [isVisible, setIsVisible] = useState(false);

  const handleVisibility = () => {
    setIsVisible((prev) => !prev);
  };

  return [isVisible, handleVisibility];
}

export default useVisibility;
