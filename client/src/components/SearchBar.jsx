/* eslint-disable no-undef */
/* eslint-disable react/prop-types */
import { Input, Box } from "@chakra-ui/react";

export const SearchBar = ({ onSearch, searchTerm, setSearchTerm }) => {
  const handleSearch = (e) => {
    const term = e.target.value;
    setSearchTerm(term);
    if (term !== "") {
      onSearch(term);
    }
  };

  return (
    <Box p={4} display="flex">
      <Input
        type="text"
        placeholder="Search..."
        c
        value={searchTerm}
        onChange={(e) => handleSearch(e)}
      />
    </Box>
  );
};
