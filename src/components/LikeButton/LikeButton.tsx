import { useState } from "react";
import { GoHeart, GoHeartFill } from "react-icons/go";

interface Props {
  onClick: () => void;
}

const LikeButton = ({ onClick }: Props) => {
  const [like, setLike] = useState(false);

  const toggle = () => {
    setLike(!like);
    onClick();
  };

  return (
    <div
      onClick={toggle}
      style={{ cursor: "pointer", display: "inline-block" }}
    >
      {like ? <GoHeartFill size={25} color="#ff6b81" /> : <GoHeart size={25} />}
    </div>
  );
};

export default LikeButton;
