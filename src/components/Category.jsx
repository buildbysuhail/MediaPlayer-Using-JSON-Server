import {useState} from 'react'
import { toast } from 'react-toastify'
import { addCategory } from '../services/allAPIs'

function Category() {
  const [category, setCategory] = useState({
    catId: "", catName: "", catVideos: []
  })


  const submitForm = async () => {
    const { catId, catName } = category

    if(!catId || !catName) {
      toast.info("Please fill properly")
    } else {
      const res = await addCategory(category)
      if(res.status == 201){
        toast.success("Category Added!!");
      } else {
        toast.error("Categor Addition Failed!!")
        console.log(res);
      }
    }
  }
  return (
    <div>
      <button onClick={()=>document.getElementById('my_modal_6').showModal()}
      className="btn btn-block bg-success md:bg-cyan-500 text-primary md:text-purple-800 font-bold md:font-extrabold text-lg md:text-lg ">Add Category</button>


      {/* Open the modal using document.getElementById('ID').showModal() method */}

<dialog id="my_modal_6" className="modal modal-bottom sm:modal-middle ">
  <div className="modal-box bg-gradient-to-b from-neutral-400 to-sky-600 sm:w-100">
    <h3 className="font-bold text-lg">Add Category Details..</h3>

    <label className="floating-label mt-2 flex justify-center">
       <input type="text" onChange={(e)=> setCategory({...category, catId: e.target.value})} placeholder="Enter ID for Category" className="input input-md bg-sky-100" />
        <span>Category ID</span>
    </label>

    <label className="floating-label mt-2 flex justify-center">
       <input type="text" onChange={(e)=> setCategory({...category, catName: e.target.value})} placeholder="Pick a Name for Category" className="input input-md bg-sky-100 peer" />
        <span>Category Name</span>
    </label>    

    <div className="modal-action gap-5">
      <form method="dialog">
        {/* if there is a button in form, it will close the modal */}
        <button className="btn btn-error rounded-xl">Close</button>
      </form>
        <button onClick={submitForm} className='btn btn-info rounded-xl'>Save</button>
    </div>
  </div>
</dialog>
    </div>
  )
}

export default Category
