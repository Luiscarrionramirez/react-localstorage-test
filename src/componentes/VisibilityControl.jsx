const VisibilityControl = ({ setShowCompleted, cleanTask, isChecked }) => {

   const handleDelete = () => {
      if(window.confirm('Are you sure you want to delete')){
         cleanTask();
      }
   }

   return (
      <div className="d-flex justify-content-between bg-secondary text-white text-center p-2 border-secondary">
         <div className="form-check form-switch">
            <input 
               type="checkbox" 
               checked={isChecked}
               onChange={ (e) => {
                  setShowCompleted(e.target.checked)
               }}
               className="form-check-input"
            /> 
            <label >Mostrar tareas hechas</label>
         </div>
        

        <button onClick={handleDelete} className="btn btn-danger ">
         Limpiar
        </button>
      </div>
   )
}

export default VisibilityControl;