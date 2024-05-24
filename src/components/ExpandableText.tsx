import { useState } from "react";

interface Props {
  children: string;
  maxChars?: number;
}

const ExpandableText = ({ children, maxChars = 100 }: Props) => {
  const [load, setLoad] = useState(false);

  if (children.length <= maxChars) return <p>{children}</p>;

  const text = load ? children : children.substring(0, maxChars);

  return (
    <>
      <p>
        {text}...
        <button onClick={() => setLoad(!load)}>{load ? "Less" : "More"}</button>
      </p>
    </>
  );
};

export default ExpandableText;
