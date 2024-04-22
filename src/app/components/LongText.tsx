import React from "react";

type Props = {
  text: string;
  style?: string;
};

function LongText({ text, style }: Props) {
  return (
    <p>
      {text.split("\n").map((line, index) => (
        <div>
          {line == "" ? (
            <br />
          ) : (
            <p key={index} className={`${style ? style : ""}`}>
              {line}
            </p>
          )}
        </div>
      ))}
    </p>
  );
}

export { LongText };
