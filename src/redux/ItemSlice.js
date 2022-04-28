import { createSlice } from '@reduxjs/toolkit';
import { nanoid } from 'nanoid';
import ProType from 'prop-types';

export const ItemsSlice = createSlice({
  name: 'contacts',
  initialState: {
    items: [],
    filter: '',
  },
  reducers: {
    addContact(state, action) {
      state.items.push({
        id: nanoid(),
        name: action.payload.name,
        number: action.payload.number,
      });
    },
    deleteContact(state, action) {
      state.items = state.items.filter(item => item.id !== action.payload.id);
    },
    searchByName(state, action) {
      state.items = state.items.filter(item => item.id === action.payload.id);
    },
  },
});

ItemsSlice.proptype = {
  itemsSlice: ProType.node.isRequired,
};

export const { addContact, deleteContact, searchByName } = ItemsSlice.actions;

export default ItemsSlice.reducer;
