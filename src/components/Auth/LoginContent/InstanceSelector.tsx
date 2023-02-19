"use client";

import { useInstanceList } from "@/hooks/auth";

type Props = {
  onChange: (host: string) => void;
};

/**
 * インスタンスリスト
 * @returns
 */
export const InstanceSelector = ({ onChange }: Props) => {
  const instances = useInstanceList();
  return (
    <form>
      <label
        htmlFor="countries"
        className="mb-2 block text-sm font-medium text-gray-900 dark:text-white"
      >
        Select an instance
      </label>
      <select
        id="instances"
        className="block w-full rounded-lg border border-gray-300 bg-gray-50 p-2.5 text-sm text-gray-900 focus:border-blue-500 focus:ring-blue-500 dark:border-gray-600 dark:bg-gray-700 dark:text-white dark:placeholder-gray-400 dark:focus:border-blue-500 dark:focus:ring-blue-500"
        onChange={(e) => onChange(e.target.value)}
        defaultValue=""
      >
        <option value="">Choose a instance</option>
        {instances.map((instance) => (
          <option key={instance.name} value={instance.host}>
            {instance.name || instance.host}
          </option>
        ))}
      </select>
    </form>
  );
};
