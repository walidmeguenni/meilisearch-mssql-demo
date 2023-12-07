import { Box, Checkbox, HStack } from '@chakra-ui/react';
import PropTypes from 'prop-types';

const categories = ['All', 'Responses', 'ProcessTimes', 'ResourcesAssigned', 'Call', 'Comment'];

const CategoryCheckboxList = ({ selectedCategories, setSelectedCategories , onSearch }) => {

  const handleCategoryChange = (category) => {
    let updatedCategories;

    if (category === 'All') {
      updatedCategories = selectedCategories.length === categories.length - 1 ? [] : [...categories.slice(1)];
    } else {
      updatedCategories = selectedCategories.includes(category)
        ? selectedCategories.filter((item) => item !== category)
        : [...selectedCategories, category];
      updatedCategories = updatedCategories.filter((item) => item !== 'All');
    }
    // console.log(updatedCategories)
    setSelectedCategories(updatedCategories);
    onSearch(updatedCategories);
  };
  // console.log(selectedCategories)
  return (
    <Box display={'flex'} justifyContent={'center'} mt={12} mb={16}>
      <HStack spacing={16}>
        <Checkbox
          key="All"
          size={'lg'}
          isChecked={selectedCategories.length === categories.length - 1}
          onChange={() => handleCategoryChange('All')}
        >
          All
        </Checkbox>
        {categories.slice(1).map((category) => (
          <Checkbox
            key={category}
            size={'lg'}
            isChecked={selectedCategories.includes(category)}
            onChange={() => handleCategoryChange(category)}
          >
            {category}
          </Checkbox>
        ))}
      </HStack>
    </Box>
  );
};

CategoryCheckboxList.propTypes = {
    selectedCategories: PropTypes.array.isRequired,
    setSelectedCategories: PropTypes.func.isRequired,
    onSearch:PropTypes.func.isRequired,
  };
  
export default CategoryCheckboxList;
