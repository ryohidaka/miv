import {
  HStack,
  InputGroup,
  InputLeftAddon,
  Input,
  Button,
} from "@chakra-ui/react";
import { useEffect, useState } from "react";
import { UserSearchHistory } from "@/components/User/History";
import { SearchHistory } from "@/components/Search/History";

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
    <HStack
      width="100%"
      zIndex="sticky"
      p={2}
      position="sticky"
      top={12}
      bg="white"
      _dark={{ bg: "gray.800" }}
    >
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

      <Button onClick={handleSearch}>Search</Button>
    </HStack>
  );
};
