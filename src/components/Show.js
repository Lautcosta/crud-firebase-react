import React from "react";
import { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import { collection, getDocs, deleteDoc, doc } from "firebase/firestore";
import { db } from "../firebaseconfig/firebase";

import Swal from "sweetalert2";
import whitReactContent from "sweetalert2-react-content";

const MySwal = whitReactContent(Swal);

const Show = () => {
  /* 1- configuracion hooks */
  const [products, setProducts] = useState([]);

  /* 2- referencia a db firestore */
  const produtsCollection = collection(db, "products");

  /* 3- funcion para mostrar todos los docs */
  const getProducts = async () => {
    const data = await getDocs(produtsCollection);
    setProducts(data.docs.map((doc) => ({ ...doc.data(), id: doc.id })));
  };

  /* 4- funcion para eliminar un doc */
  const deleteProduct = async (id) => {
    const productDoc = doc(db, "products", id);
    await deleteDoc(productDoc);
    getProducts();
  };

  /* 5- funcion de confirmación para Sweet Alert 2 */
  const confirmDelete = (id) => {

    MySwal.fire({
      title: "Are you sure?",
      text: "You won't be able to revert this!",
      icon: "warning",
      showCancelButton: true,
      confirmButtonColor: "#FFD52E",
      cancelButtonColor: "#d33",
      confirmButtonText: "Yes, delete it!",
     
    }).then((result) => {
      if (result.isConfirmed) {
        deleteProduct(id)
        Swal.fire(
            "Deleted!",
            "Your file has been deleted.",
            "success");
      }
    });

  };

  /* 6- usamos useEffect */
  useEffect(() => {
    getProducts();
    // eslint-disable-next-line
  }, []);

  /* 7- devolvemos vista de componente */

  return (
    <>
      <div className="container">
        <div className="row mb-3 mt-3">
            <div className="col-12 d-flex justify-content-center align-items-center  "> 
              
              <img className="img-header" src="https://upload.wikimedia.org/wikipedia/commons/c/cf/Firebase_icon.svg" alt="Firebase-logo"></img>

              <h1 className="h1-header">+</h1>

              <img className="img-header" src="https://upload.wikimedia.org/wikipedia/commons/thumb/4/47/React.svg/1200px-React.svg.png" alt="React-logo"></img>

            </div>
        </div>
        <div className="row">
          <div className="col text-center ">
            <div className="d-grip gap-2 ">
              <Link to="/create" className="btn app-button mb-2 mt-2">
                Create
              </Link>

              <table className="table">
                <thead>
                  <tr>
                    <th>Description</th>
                    <th>Stock</th>
                    <th>Actions</th>
                  </tr>
                </thead>

                <tbody>
                  {products.map((product) => (
                    <tr key={product.id}>
                      <td>{product.description}</td>
                      <td>{product.stock}</td>
                      
                      <td>

                        <button className="btn app-button">
                        <Link to={`/edit/${product.id}`} ><i className="fa-solid fa-pencil"></i></Link>
                        </button>

                        <button className=" btn  app-button"  onClick={() => confirmDelete(product.id)}>
                          <i className="fa-solid fa-trash-can"></i>
                        </button>
                      </td>

                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Show;
