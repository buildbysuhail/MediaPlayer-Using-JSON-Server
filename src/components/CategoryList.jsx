import { useState, useEffect } from 'react'

function CategoryList() {
  const [categories, setCategories] = useState([])

  useEffect(() => {
    const fetchCategories = async () => {
      try {
        const categories = await getCategories()
        setCategories(categories)
      } catch (err) {
        console.error("Failed to fetch categories", err)
      }
    }

    fetchCategories()
  }, [])


  return (
    <div>
      <h2 className='text-green-600'>Catrgory List</h2>
      <div className='flex justify-between p-5'>
        <h3 className='font-medium'>Music</h3>
        <span>
            <i className="fa-solid w-full text-right fa-trash fa-sm mt-1 text-red-600 hover:text-red-800 cursor-pointer transition-colors duration-200" />
        </span>
      </div>
    </div>
  )
}

export default CategoryList
