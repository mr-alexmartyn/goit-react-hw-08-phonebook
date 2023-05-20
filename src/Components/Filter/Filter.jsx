import { useDispatch, useSelector } from 'react-redux';
import { setFilter } from 'redux/FilterSlice';
import { Stack, Input } from '@chakra-ui/react';

function Filter() {
  const dispatch = useDispatch();
  const filterValue = useSelector(state => state.filter);

  const onFilterChange = event => {
    const { value } = event.currentTarget;
    dispatch(setFilter(value.toLowerCase()));
  };

  return (
    <Stack w="400px" mx="auto" my="6" spacing={4}>
      <p>Find contacts by name</p>
      <Input
        onChange={onFilterChange}
        value={filterValue}
        type="text"
        name="filter"
      />
    </Stack>
  );
}

export default Filter;
