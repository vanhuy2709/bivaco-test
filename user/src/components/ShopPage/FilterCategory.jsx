import List from '@mui/material/List';
import ListItemButton from '@mui/material/ListItemButton';
import ListItemText from '@mui/material/ListItemText';
import Collapse from '@mui/material/Collapse';
import FormControlLabel from '@mui/material/FormControlLabel';
import ExpandLess from '@mui/icons-material/ExpandLess';
import ExpandMore from '@mui/icons-material/ExpandMore';
import { useState, useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import Radio from '@mui/material/Radio';
import RadioGroup from '@mui/material/RadioGroup';
import FormControl from '@mui/material/FormControl';
// Import Action
import { fetchCategoryAction } from '../../store/actions/apiRequest.action';
import { handleCheckCategories } from '../../store/actions/filter.actions';

const FilterCategory = () => {
  const dispatch = useDispatch();

  const [openCategory, setOpenCategory] = useState(true);

  const { category } = useSelector(reduxData => reduxData.categoryReducer);
  const { pending, listCategory } = category;

  // Fetch data category
  useEffect(() => {
    dispatch(fetchCategoryAction())
  }, [])

  const handleCheck = (category) => {
    dispatch(handleCheckCategories(category))
  }

  return (
    <List
      sx={{ width: '100%', bgcolor: 'background.paper' }}
    >
      <ListItemButton onClick={() => setOpenCategory(!openCategory)}>
        <ListItemText primary="All Categories" />
        {openCategory ? <ExpandLess /> : <ExpandMore />}
      </ListItemButton>
      <Collapse in={openCategory} timeout="auto" unmountOnExit>
        <List component="div" disablePadding>

          {/* Check Categories (Radio box) */}
          <FormControl>
            <RadioGroup>
              {listCategory && listCategory?.length > 0 &&
                listCategory?.map(category => (
                  <FormControlLabel
                    key={category}
                    value={category}
                    control={<Radio color='success' />}
                    label={category}
                    onChange={() => handleCheck(category)}
                  />
                ))}
            </RadioGroup>
          </FormControl>

        </List>
      </Collapse>
    </List>
  );
};

export default FilterCategory;