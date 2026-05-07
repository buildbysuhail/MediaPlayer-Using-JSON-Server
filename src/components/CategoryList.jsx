import { useState, useEffect } from 'react'
import { getCategory, deleteCategory as deleteCategoryAPI } from '../services/allAPIs' // ?
import { toast } from 'react-toastify';

function CategoryList({ categoryFlag }) {
  const [categories, setCategories] = useState([]);

  useEffect(() => {
    fetchCategories();
  }, [categoryFlag]);

  const fetchCategories = async () => {
    try {
      const cat = await getCategory();
      setCategories(cat.data);
      console.log("Fetched categories:", cat);
    } catch (err) {
      console.error("Failed to fetch categories", err);
      toast.error("Failed to fetch categories. something went wrong!!");
    }
  };
  console.log("Current categories state:", categories);
  if (categories.length === 0) {
    return <p className="text-gray-500">No categories available</p>;
  }

  const deleteCategory = async (id) => {
    try {
      await deleteCategoryAPI(id);
      toast.success("Category deleted successfully.");
      fetchCategories(); // Refresh the category list
    } catch (err) {
      console.error("Failed to delete category", err);
      toast.error("Failed to delete category. something went wrong!!");
    }
  }

if (categories.length === 0) {
  return <p className="text-gray-500">No categories available</p>;
}

  return (
  <div className="bg-blue-300 p-1">

    <ul className="list bg-base-100 rounded-sm shadow-md">

      <li className="p-4 pb-2 text-xs opacity-60 tracking-wide">
        Category List
      </li>

      {categories.map((cat, index) => (

        <li key={index} className="list-row">

          {/* Optional image/icon */}
          <div>
            <div className="size-10 rounded-box bg-primary text-white flex items-center justify-center font-bold">
              {cat.catName.charAt(0).toUpperCase()}
            </div>
          </div>

          {/* Category details */}
          <div>
            <div>{cat.catName}</div>

            <div className="text-xs uppercase font-semibold opacity-60">
              Category ID : {cat.catId}
            </div>
          </div>

          {/* Delete button */}
          <button
            onClick={() => deleteCategory(index)}
            className="btn btn-square btn-ghost text-red-500"
          >
            <i className="fa-solid fa-trash"></i>
          </button>

        </li>

      ))}

    </ul>

  </div>
)
}

export default CategoryList
