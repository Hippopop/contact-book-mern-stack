import { createContext, useEffect, useState } from "react";
import { AddContactCategory } from "./views/components/AddContactCategory";
import { getAllCategoryList } from "./api/categoryManagingApis";
import { SingleContactCategory } from "./views/components/SingleCategoryCard";

type TcategoryListContex = {
  categoryList: TContactCategory[] | null;
  setCategoryList: React.Dispatch<React.SetStateAction<TContactCategory[]>>;
};

const initialCategoryListContextState: TcategoryListContex = {
  categoryList: null,
  setCategoryList: () => {},
};

export const context = createContext<TcategoryListContex>(
  initialCategoryListContextState
);

function App() {
  const [categoryList, setCategoryList] = useState<TContactCategory[]>([]);

  useEffect(() => {
    const getAllContactCategory = async () => {
      const allCategories = await getAllCategoryList();
      setCategoryList(allCategories);
    };
    getAllContactCategory();
  }, []);

  return (
    <div className="max-w-5xl mx-auto">
      <context.Provider value={{ categoryList, setCategoryList }}>
        <AddContactCategory />
        <div className="gap-3">
          {categoryList?.map((singleCategory) => (
            <SingleContactCategory
              key={singleCategory._id}
              contactCategory={singleCategory}
            />
          ))}
        </div>
      </context.Provider>
    </div>
  );
}

export default App;
