import { useLazyQuery } from "@apollo/client";
import { Box, Table, Thead, Tbody, Tr, Th, Td } from "@chakra-ui/react";

import { SearchBar } from "./components/SearchBar";
import { MEILISEARCH } from "./services/meilisearch";
import { useState } from "react";

const App = () => {
  const [search, { loading, data }] = useLazyQuery(MEILISEARCH, {
    fetchPolicy: "network-only",
  });
  const [searchTerm, setSearchTerm] = useState();
  const handleSearch = (term) => {
    search({ variables: { word: term } });
  };
  return (
    <Box>
      <SearchBar
        onSearch={handleSearch}
        searchTerm={searchTerm}
        setSearchTerm={setSearchTerm}
      />
      {loading && <p>Loading...</p>}
      <Box p={6}>
        {data && searchTerm  && (
          <Table variant="simple">
            <Thead>
              <Tr>
                <Th>Name</Th>
                <Th>Age</Th>
                <Th>Email</Th>
              </Tr>
            </Thead>
            <Tbody>
              {data.meilisearch.map((result) => (
                <Tr key={result.id}>
                  <Td>{result.name}</Td>
                  <Td>{result.age}</Td>
                  <Td>{result.email}</Td>
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
