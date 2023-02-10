import { useEffect, useState } from "react";
import { UserSearchHistory } from "@/components/User/History";
import { SearchHistory } from "@/components/Search/History";
import { InputGroup, InputLeftAddon, Input } from "@chakra-ui/react";

type Props = {
  value: string;
  search: (name: string) => void;
  isUserSearch?: boolean;
};

/**
 * 検索フォーム
 * @returns
 */
export const SearchForm = ({ value, search, isUserSearch }: Props) => {
  const [input, setInput] = useState<string>("");

  useEffect(() => {
    setInput(value);
  }, [value]);

  const handleSearch = () => {
    search(input);
  };

  return (
    <div className="sticky top-12 z-50 flex w-full items-center gap-2 bg-white p-2 dark:bg-gray-800">
      <InputGroup>
        {isUserSearch && <InputLeftAddon>@</InputLeftAddon>}

        <Input
          type="text"
          placeholder={isUserSearch ? "UserName" : "Keyword"}
          defaultValue={value}
          onChange={(e) => setInput(e.target.value)}
        />
      </InputGroup>

      {isUserSearch ? <UserSearchHistory /> : <SearchHistory />}

      <button onClick={handleSearch} className="lignt-btn">
        Search
      </button>
    </div>
  );
};
