import { useLazyQuery } from "@apollo/client";
import { Box, Table, Thead, Tbody, Tr, Th, Td } from "@chakra-ui/react";

import { SearchBar } from "./components/SearchBar";
import { MEILISEARCH } from "./services/meilisearch";
import { useState } from "react";
import CategoryCheckboxList from "./components/categories";
import { headers } from "./constants";

const App = () => {
  const [searchTerm, setSearchTerm] = useState();
  const [selectedCategories, setSelectedCategories] = useState([]);
  const [search, { loading, data }] = useLazyQuery(MEILISEARCH, {
    fetchPolicy: "network-only",
  });
  const handleSearch = () => {
    search({ variables: { word: searchTerm, categories: selectedCategories } });
  };
  console.log()
  return (
    <Box width={"full"}>
      <SearchBar
        onSearch={handleSearch}
        searchTerm={searchTerm}
        setSearchTerm={setSearchTerm}
      />
      <CategoryCheckboxList
        selectedCategories={selectedCategories}
        setSelectedCategories={setSelectedCategories}
        onSearch={handleSearch}
      />
      {loading && <p>Loading...</p>}
      <Box p={8} width="100%" height="500" overflow="auto">
        {data && searchTerm && (
          <Table variant="striped">
            <Thead>
              <Tr>
                {headers.map((header, index) => (
                  <Th key={index}>{header}</Th>
                ))}
              </Tr>
            </Thead>
            <Tbody>
              {data.meilisearch.map((row, rowIndex) => (
                <Tr key={rowIndex}>
                  {headers.map((header, colIndex) => (
                    <Td key={colIndex}>{row[header]}</Td>
                  ))}
                </Tr>
              ))}
            </Tbody>
          </Table>
        )}
      </Box>
    </Box>
  );
};

export default App;
