import { createSlice } from "@reduxjs/toolkit";

const initialState={
    wishlistItems:localStorage.getItem('wishlistItems')? JSON.parse(localStorage.getItem('wishlistItems')):[],
}

const wishSlice= createSlice({
    name:'wishlists',
    initialState,
    reducers:{
        addToWishList:(state,action)=>{
            // console.log("add wish data",action.payload)
            let existsItemiIndex=state.wishlistItems?.findIndex(item=> item._id===action.payload._id);

            if(existsItemiIndex >=0){
                state.wishlistItems.splice(existsItemiIndex, 1);
                localStorage.setItem('wishlistItems', JSON.stringify(state.wishlistItems));
            }else{
                let buildwishlistItem={
                    ...action.payload
                }
                state.wishlistItems?.push(buildwishlistItem);
                localStorage.setItem('wishlistItems',JSON.stringify(state.wishlistItems));

            }
        },
        removeItem:(state,action)=>{

        },
    }
});

export const {addToWishList,removeItem}=wishSlice.actions;

export default wishSlice.reducer;