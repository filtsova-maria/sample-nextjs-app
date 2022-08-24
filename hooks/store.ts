import create from "zustand";
import { ECategory } from "../components/Categories/types";

interface IProductStore {
  productCategory: ECategory;
  changeProductCategory: (newCategory: ECategory) => void;
}

const useProductStore = create<IProductStore>((set) => ({
  productCategory: ECategory.smartphones,
  changeProductCategory: (newCategory) => set({ productCategory: newCategory }),
}));
export default useProductStore;
