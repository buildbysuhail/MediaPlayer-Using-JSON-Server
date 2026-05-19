import { useState, useEffect } from 'react'
import { 
   getCategory,
   deleteCategory as deleteCategoryAPI,
   getspecificCategory,
   updateCategory, 
  } from '../services/allAPIs' // ?
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

  const handleDrop = async (ev, val) => {
    ev.preventDefault();
    console.log("dropping...")
    console.log(val, "IDdddd");
    const catId = val;
    const data = JSON.parse(ev.dataTransfer.getData("video"));
    console.log("dataaaaaaaaaa",data)
    const res = await getspecificCategory(catId)
    console.log(res, "resssssssss")
    const category = res.data
    category.catVideos.push(data)
    const resp = await updateCategory(catId, category)
    console.log(resp, "respppp")
    // console.log("category:",category);
    // Here you can implement logic to associate the dropped video with the category
    if (resp.status === 200) {
      toast.success("Video added to category");
    } else {
      toast.error("Video didnt add! something wrong!!")
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

        <li key={index} className="list-row mb-[87px]" onDrop={(e) =>handleDrop(e, cat?.id)} onDragOver={(e) => e.preventDefault()}>

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
