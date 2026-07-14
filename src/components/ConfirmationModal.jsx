import React from 'react'

function ConfirmationModal({ modalId, title, message, confirmText, cancelText, confirmColor, onConfirm}) {
  return (
    <dialog id={modalId} className="modal modal-bottom sm:modal-middle">
  <div className="modal-box bg-fuchsia-50">
    <h3 className="font-bold text-lg">{title}</h3>
    <p className="py-4">{message}</p>
    <div className="modal-action">
      <form method="dialog" className='flex gap-2'>
        {/* if there is a button in form, it will close the modal */}
        <button className="btn bg-slate-200 rounded-md">{cancelText}</button>
        <button className={`btn rounded-md ${confirmColor || "btn-primary"}`} onClick={onConfirm}>
          { confirmText || "Confirm"}
        </button>
      </form>
    </div>
  </div>
</dialog>
  )
}

export default ConfirmationModal
