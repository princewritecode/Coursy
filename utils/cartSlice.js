import { createSlice } from "@reduxjs/toolkit";

const cartSlice = createSlice(
    {
        name: 'cart',
        initialState: {
            items: ['burger', 'pizza']
        }
        ,
        reducers: {
            additem: (store, action) =>
            {
                store.items.push(action.payload);
            }
            ,
            removeitem: (store) =>
            {
                store.items.pop();
            },
            clearitem: () =>
            {
                store.item.length = 0;
            }
        }
    }
);

export const { additem, removeitem, clearitem } = cartSlice.actions;
export default cartSlice.reducer;