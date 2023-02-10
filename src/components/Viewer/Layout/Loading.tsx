/**
 * ローディング表示
 * @returns
 */
export const Loading = () => {
  return (
    <div className="fixed top-0 left-0 z-40 grid h-full w-full place-items-center bg-black p-4 text-white opacity-50">
      <div className="flex justify-center">
        <div className="h-10 w-10 animate-spin rounded-full border-4 border-white border-t-transparent"></div>
      </div>
    </div>
  );
};
