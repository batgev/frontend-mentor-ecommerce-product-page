import { create } from "zustand";
import { devtools, persist } from "zustand/middleware";

const authStore = (set) => ({
  toggleMobileSidebar:false,
  itemsInCart: null,

  showSidebar: (data)=>{
    set({
      toggleMobileSidebar:data,
    })
  },

  setItemsInCart: (count)=>{
    set((state)=>({
      itemsInCart:state.itemsInCart +count,
    }))
  }
});

const useAuthStore = create(
  devtools(
    persist(authStore, {
      name: "auth",
    }),
  ),
);
export default useAuthStore;
