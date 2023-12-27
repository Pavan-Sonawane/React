import React, { useState, useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { fetchCategories, addCategory, updateCategory, deleteCategory } from '../actions/categoryActions';
import { TextField, Button, List, ListItem, ListItemText, ListItemSecondaryAction, IconButton, Typography, Paper } from '@mui/material';
import DeleteIcon from '@mui/icons-material/Delete';

const CategoryComponent = () => {
  const dispatch = useDispatch();
  const categories = useSelector((state) => state.categories.categories);
  const [newCategoryData, setNewCategoryData] = useState({
    categoryId: 0,
    id: 0,
    categoryName: '',
  });

  useEffect(() => {
    dispatch(fetchCategories());
  }, [dispatch]);

  const handleAddCategory = () => {
    dispatch(addCategory(newCategoryData));
    setNewCategoryData({
      categoryId: 1,
      id: 1,
      categoryName: '',
    });
  };

  const handleUpdateCategory = () => {
    dispatch(updateCategory(newCategoryData.categoryId, newCategoryData));
    setNewCategoryData({
      categoryId: 1,
      id: 1,
      categoryName: '',
    });
  };

  const handleDeleteCategory = (categoryId) => {
    dispatch(deleteCategory(categoryId));
  };

  const handleSelectCategory = (category) => {
    setNewCategoryData({
      categoryId: category.categoryId,
      categoryName: category.categoryName,
    });
  };

  return (
    <Paper style={{ padding: '20px', marginTop: '20px' }}>
      <div>
        <Typography variant="h5">Add Category</Typography>
        <div style={{ marginBottom: '10px' }}>
          <TextField
            label="Category Name"
            variant="outlined"
            value={newCategoryData.categoryName}
            onChange={(e) => setNewCategoryData({ ...newCategoryData, categoryName: e.target.value })}
          />
        </div>
        <Button variant="contained" color="primary" onClick={handleAddCategory}>
          Add Category
        </Button>
      </div>

      <div style={{ marginTop: '20px' }}>
        <Typography variant="h5">Category List</Typography>
        <List>
          {categories.map((category) => (
            <ListItem key={category.categoryId} button onClick={() => handleSelectCategory(category)}>
              <ListItemText
                primary={<Typography variant="subtitle2">Category ID: {category.categoryId}</Typography>}
                secondary={<Typography variant="body2">Category Name: {category.categoryName}</Typography>}
              />
              <ListItemSecondaryAction>
                <IconButton edge="end" aria-label="delete" onClick={() => handleDeleteCategory(category.categoryId)}>
                  <DeleteIcon />
                </IconButton>
              </ListItemSecondaryAction>
            </ListItem>
          ))}
        </List>
      </div>
    </Paper>
  );
};

export default CategoryComponent;
