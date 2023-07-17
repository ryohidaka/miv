type Props = {
  host: string;
  onChange: (host: string) => void;
};

/**
 * インスタンスURL入力欄
 * @returns
 */
export const InstanceForm = ({ host, onChange }: Props) => {
  const handleChange = (value: string) => {
    const host = value.replace(/http|https/g, "");
    onChange(host);
  };
  return (
    <form className="grid grid-cols-1 gap-3">
      <div>
        <label
          htmlFor="host"
          className="mb-2 block text-sm font-medium text-gray-900 dark:text-white"
        >
          インスタンスのURL
        </label>
        <div className="flex">
          <span className="inline-flex items-center rounded-l-md border border-r-0 border-gray-300 bg-gray-200 px-3 text-sm text-gray-900 dark:border-gray-600 dark:bg-gray-600 dark:text-gray-400">
            https://
          </span>
          <input
            type="url"
            id="host"
            className="block w-full min-w-0 flex-1 rounded-none rounded-r-lg border border-gray-300 bg-gray-50 p-2.5 text-sm text-gray-900 focus:border-blue-500 focus:ring-blue-500  dark:border-gray-600 dark:bg-gray-700 dark:text-white dark:placeholder-gray-400 dark:focus:border-blue-500 dark:focus:ring-blue-500"
            placeholder="misskey.io"
            value={host}
            onChange={(e) => handleChange(e.target.value)}
            required
          />
        </div>
      </div>
    </form>
  );
};
