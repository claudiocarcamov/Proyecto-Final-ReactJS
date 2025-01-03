import { useEffect, useState } from "react";
//import { getProducts, getProductsByCategory } from "../../asyncMock";
import { useParams } from "react-router-dom";
//import ItemListContainer from "../components/ItemListContainer";
import { collection, getDocs, query, where } from "firebase/firestore";
import { db } from "../services/firebase";

export default function ItemListContainer() {
    const [products, setProducts] = useState([])
    const [isLoading, setIsLoading] = useState(true);
    const {category} = useParams()
    /* 
    useEffect(()=>{    
          const asyncFunction = categoryId ? getProductsByCategory : getProducts
          asyncFunction(categoryId)
            .then(data => setProducts(data))
    }, [categoryId]) 
    */

    useEffect(()=>{
      const collectionRef = category
        ? query(collection(db, "products"), where("category", "==", category))
        : collection(db, "products")
        console.log(db)
        getDocs(collectionRef)
          .then((querySnapshot)=>{
            const productos = querySnapshot.docs.map((doc)=>{
              console.log(doc.id)
              return {id: doc.id, ...doc.data()}
            })
            setProducts(productos)
            console.log(productos)
          })
          .catch((err)=>{
            console.log(err)
          })
          .finally(() => setIsLoading(false));
  
    },[category])
    console.log(products)

  return { products, isLoading };
}