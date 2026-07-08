import { useState, useEffect } from 'react'
import { 
   getCategory,
   deleteCategory as deleteCategoryAPI,
   getspecificCategory,
   updateCategory, 
  } from '../services/allAPIs' // ?
import { toast } from 'react-toastify';
import VideoCard from './VideoCard';
import CategoryCard from './CategoryCard';

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

  const removeVideoFromCategory = async (id, videoId) => {
    try {
      const result = await getspecificCategory(id)

      const category = result?.data

        category.catVideos = category.catVideos.filter(
          (item) => item.id !== videoId,
        );
// return console.log(category, videoId, "categoryyyyyyyyyyyy")
      await updateCategory(id, category);
      fetchCategories();
      toast.success("Video removed from category")
    } catch (err) {
      console.error("Failed to remove video from category", err);
      toast.error("Failed to remove video")
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
      fetchCategories(); // Refresh the category list to reflect changes
    } else {
      toast.error("Video didnt add! something wrong!!")
    }
  }

if (categories.length === 0) {
  return <p className="text-gray-500">No categories available</p>;
}
console.log(categories, "categoriessssssss")
  return (
  <div className="flex flex-col min-h-0 flex-1">
    <div className="shrink-0 bg-sky-100 px-4 py-3 text-xs opacity-60 tracking-widest uppercase bg-base-100 rounded-t-sm shadow-md">
      Category List
    </div>
    <ul className="bg-sky-50 rounded-b-sm shadow-md overflow-y-auto custom-scroll flex-1">
      {/* <li className="px-4 py-3 text-xs opacity-60 tracking-widest uppercase">
        Category List
      </li> */}

      {categories.map((cat, index) => (
        <li
          key={cat.id || index}
          className="border-t border-base-200"
          onDrop={(e) => handleDrop(e, cat?.id)}
          onDragOver={(e) => e.preventDefault()}
        >
          {/* Category header row */}
          <div className="flex items-center gap-3 px-4 py-3">
            <div className="w-10 h-10 rounded-lg bg-primary text-white flex items-center justify-center font-bold shrink-0">
              {cat.catName.charAt(0).toUpperCase()}
            </div>
            <div className="flex-1 min-w-0">
              <div className="font-medium truncate">{cat.catName}</div>
              <div className="text-xs text-base-content/50">
                {cat.catVideos.length} video{cat.catVideos.length !== 1 ? 's' : ''}
              </div>
            </div>
            <button
              onClick={() => deleteCategory(cat.id)}  // ✅ Fixed: was (index)
              className="btn btn-square btn-ghost btn-sm text-error"
            >
              <i class="fa-solid fa-delete-left"/>
            </button>
          </div>

          {/* Videos section */}
            {cat.catVideos.length > 0 && (
              <div className="px-3 pb-4 bg-base-200/50">
                <div className="grid grid-cols-2 gap-2 items-start">
                  {cat.catVideos.map((video, idx) => (
                    <div key={idx} className="p-1 h-auto">
                      <CategoryCard video={video} onDelete={() => removeVideoFromCategory(cat?.id, video?.id)} />
                      {/* onDelete must pass here */}
                    </div>
                  ))}
                </div>
              </div>
            )}
        </li>
      ))}
    </ul>
  </div>
);
}

export default CategoryList
