import { useEffect, useState } from "react";

type CodeAnimationProps = {
  targetCode: string;
};

export default function CodeAnimation({ targetCode }: CodeAnimationProps) {
  const startCode = targetCode
    .split("")
    .map(() => "0")
    .join("");
  const [displayCode, setDisplayCode] = useState<string>(startCode);
  const codeCharacterSet = "0123456789ABCDEFGHIJKLMNOPQRSTUVWXYZ";

  useEffect(() => {
    const currentCodeArray = startCode.split("");
    const targetCodeArray = targetCode.split("");

    const updateCode = () => {
      if (currentCodeArray.join("") !== targetCode) {
        // for each character of the current code
        currentCodeArray.forEach((char, index) => {
          let nextIndex = 0;
          // if the character is equal to the one in target code, leave it unchanged
          if (char === targetCodeArray[index]) {
            currentCodeArray[index] = char;
          } else {
            // otherwise, select the next character from the codeCharacterSet
            const currentIndex = codeCharacterSet.indexOf(char);
            const targetIndex = codeCharacterSet.indexOf(
              targetCodeArray[index],
            );
            nextIndex =
              currentIndex < targetIndex ? currentIndex + 1 : currentIndex - 1;
            currentCodeArray[index] = codeCharacterSet[nextIndex];
          }
        });

        setDisplayCode(currentCodeArray.join(""));
        setTimeout(updateCode, 25);
      }
    };

    updateCode();
  }, [startCode, targetCode]);

  return <span>{displayCode}</span>;
}
