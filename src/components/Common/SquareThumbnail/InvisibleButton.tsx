import { AiFillEye, AiFillEyeInvisible } from "react-icons/ai";

type Props = {
  isBlur: boolean;
  handleClick: () => void;
};

/**
 * 非表示ボタン
 * @returns
 */
export const InvisibleButton = ({ isBlur, handleClick }: Props) => {
  return (
    <span
      className="absolute top-0 left-0 z-40 cursor-pointer p-3 text-2xl text-white"
      onClick={handleClick}
    >
      {isBlur ? <AiFillEye /> : <AiFillEyeInvisible />}
    </span>
  );
};
