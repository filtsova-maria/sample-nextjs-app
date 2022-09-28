import create from "zustand";
import { ECategory } from "../components/Categories/types";

interface IProductStore {
  productCategory: ECategory;
  setActiveCategory: (newCategory: ECategory) => void;
}

const useProductStore = create<IProductStore>((set) => ({
  productCategory: ECategory.smartphones.toLocaleLowerCase() as ECategory,
  setActiveCategory: (newCategory) => set({ productCategory: newCategory }),
}));
export default useProductStore;
