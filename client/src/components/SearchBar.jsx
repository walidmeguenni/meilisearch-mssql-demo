/* eslint-disable no-undef */
/* eslint-disable react/prop-types */
import { Input, Box } from "@chakra-ui/react";

export const SearchBar = ({ onSearch, searchTerm, setSearchTerm }) => {
  const handleSearch = (e) => {
    const term = e.target.value;
    setSearchTerm(term);
    onSearch();
  };
  const handlePaste = (e) => {
    const term = e.clipboardData.getData("text");
    setSearchTerm(term);
    onSearch();
  };

  return (
    <Box p={4} display="flex">
      <Input
        type="text"
        placeholder="Search..."
        value={searchTerm}
        onChange={(e) => handleSearch(e)}
        onPaste={(e) => handlePaste(e)}
      />
    </Box>
  );
};
