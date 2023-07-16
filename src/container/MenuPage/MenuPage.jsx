import React, { useState } from 'react';
import './MenuPage.css';
import { motion } from 'framer-motion';
import {
  Box,
  TextField,
  Select,
  MenuItem,
  Card,
  CardContent,
  Typography,
  Grid,
  InputLabel,
  FormControl,
} from '@mui/material';

const categories = ['All', 'Starters', 'Mains', 'Desserts'];

const menuData = [
  {
    id: 1,
    category: 'Starters',
    name: 'Shrimp Cocktail',
    description: 'Chilled jumbo shrimps served with cocktail sauce.',
    price: 10.99,
  },
  {
    id: 2,
    category: 'Mains',
    name: 'Grilled Salmon',
    description: 'Grilled salmon with a white wine sauce, served with asparagus.',
    price: 20.99,
  },
  {
    id: 3,
    category: 'Desserts',
    name: 'Mango Sorbet',
    description: 'Refreshing mango sorbet served with fresh mint.',
    price: 5.99,
  },
  // Add more items as needed...
];

const StyledMenuItem = ({ item }) => (
  <Grid item xs={12} sm={6} md={4} lg={3}>
    <motion.div
      initial={{ opacity: 0, y: -10 }}
      animate={{ opacity: 1, y: 0 }}
      exit={{ opacity: 0, y: 10 }}
      transition={{ duration: 0.2 }}
    >
      <Card>
        <CardContent>
          <Typography variant="h5">{item.name}</Typography>
          <Typography>{item.description}</Typography>
          <Typography>${item.price}</Typography>
        </CardContent>
      </Card>
    </motion.div>
  </Grid>
);

const MenuPage = () => {
  const [searchQuery, setSearchQuery] = useState('');
  const [filter, setFilter] = useState('All');

  const filteredMenu = menuData.filter(
    (item) =>
      (filter === 'All' || item.category === filter) &&
      item.name.toLowerCase().includes(searchQuery.toLowerCase())
  );

  return (
    <Box m={4}>
      <TextField
        variant="outlined"
        label="Search menu"
        fullWidth
        value={searchQuery}
        onChange={(e) => setSearchQuery(e.target.value)}
      />
      <Box my={2}>
        <FormControl fullWidth variant="outlined">
          <InputLabel id="demo-simple-select-outlined-label">Category</InputLabel>
          <Select
            labelId="demo-simple-select-outlined-label"
            id="demo-simple-select-outlined"
            value={filter}
            onChange={(e) => setFilter(e.target.value)}
            label="Category"
          >
            {categories.map((category) => (
              <MenuItem key={category} value={category}>
                {category}
              </MenuItem>
            ))}
          </Select>
        </FormControl>
      </Box>
      <Grid container spacing={3}>
        {filteredMenu.map((item) => (
          <StyledMenuItem key={item.id} item={item} />
        ))}
      </Grid>
    </Box>
  );
};

export default MenuPage;
