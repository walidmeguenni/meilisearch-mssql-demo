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
                <Th>First Name</Th>
                <Th>Last Name</Th>
                <Th>Age</Th>
                <Th>Email</Th>
                <Th>Phone</Th>
                <Th>Job</Th>
                <Th>Salary</Th>
                <Th>Gender</Th>
                <Th>Product Name</Th>
                <Th>Price</Th>
                <Th>Created At</Th>
                <Th>Updated At</Th>
              </Tr>
            </Thead>
            <Tbody>
              {data.meilisearch.map((result) => (
                <Tr key={result.id}>
                  <Td>{result.firstname}</Td>
                  <Td>{result.lastname}</Td>
                  <Td>{result.age}</Td>
                  <Td>{result.email}</Td>
                  <Td>{result.phone}</Td>
                  <Td>{result.job}</Td>
                  <Td>{result.salary}</Td>
                  <Td>{result.gender}</Td>
                  <Td>{result.product_name}</Td>
                  <Td>{result.price}</Td>
                  <Td>{result.createdAt}</Td>
                  <Td>{result.updatedAt}</Td>

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
