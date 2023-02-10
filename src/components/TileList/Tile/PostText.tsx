type Props = {
  text: string;
};

/**
 * 本文
 * @returns
 */
export const PostText = ({ text }: Props) => {
  return (
    <p className="max-w-full overflow-hidden text-ellipsis whitespace-nowrap text-sm">
      {text}
    </p>
  );
};
