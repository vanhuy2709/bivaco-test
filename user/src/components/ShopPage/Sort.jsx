import Box from "@mui/material/Box";
import FormControl from "@mui/material/FormControl";
import Select from "@mui/material/Select";
import MenuItem from "@mui/material/MenuItem";
import InputLabel from "@mui/material/InputLabel";
import { useDispatch } from "react-redux";

// Import Action
import { handleSortIdProductAction } from '../../store/actions/filter.actions';

const Sort = () => {

  const dispatch = useDispatch();

  return (
    <div className='flex items-center gap-4 py-5'>
      <p className='text-sm text-gray-500'>Sort by:</p>
      <Box sx={{ width: '100%' }}>
        <FormControl fullWidth>
          <InputLabel>ID</InputLabel>
          <Select
            // value={sortValue}
            label="ID"
            onChange={(e) => dispatch(handleSortIdProductAction(e.target.value))}
          >
            <MenuItem value={'asc'}>Lowest to Highest</MenuItem>
            <MenuItem value={'desc'}>Highest to Lowest</MenuItem>
          </Select>
        </FormControl>
      </Box>
    </div>
  );
};

export default Sort;