import React, { useState } from 'react'
import { useNavigate } from 'react-router-dom'
import { collection, addDoc } from 'firebase/firestore'
import { db } from '../firebaseconfig/firebase'
import { Link } from 'react-router-dom'
import Swal from "sweetalert2";
import withReactContent from "sweetalert2-react-content";

const MySwal = withReactContent(Swal);

const Create = () => {
  const [ description, setDescription ] = useState('')
  const [ stock, setStock ] = useState(0)
  const navigate = useNavigate()

  const productsCollection = collection(db, "products")

  const store = async (e) => {
    e.preventDefault()

    await addDoc( productsCollection, { description: description, stock: stock } )

    await MySwal.fire({
      title: "Created",
      text: "product successfully added",
      icon: "success",
      confirmButtonColor: "#FFD52E"
    });

    navigate('/')
    
  }

  return (
    <div className='container'>
        <div className='row'>
            <div className='col'>
                <h1>Create Product</h1>
                 <form onSubmit={store}>
                    <div className='mb-3'>
                        <label className='form-label'>Description</label>
                        <input
                            value={description}
                            onChange={ (e) => setDescription(e.target.value)} 
                            type="text"
                            className='form-control'
                            required
                        />
                    </div>  
                    <div className='mb-3'>
                        <label className='form-label'>Stock</label>
                        <input
                            value={stock}
                            onChange={ (e)=> setStock(e.target.value)} 
                            type="number"
                            className='form-control'
                            min='0'
                        />                 
                    </div>  

                    <Link to="/" className="btn btn-secondary ms-2">
                    <i className="fa-solid fa-arrow-left"></i>
                    </Link>

                    <button type='submit' className='btn app-button'>Store</button>
                    

                 </form>   
            </div>
        </div>
    </div> 
  )
}

export default Create