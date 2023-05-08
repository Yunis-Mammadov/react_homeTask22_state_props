import { useState } from "react"
import List from "../list";

const Form = () => {
    let [products,setProducts] = useState({name:"",price:""});
    let [errorNameMessage,setErrorNameMessage] = useState("");
    let [errorPriceMessage,setErrorPriceMessage] = useState("");
    let [isButtonDisabled,setIsButtonDisabled] = useState(false);
    let [productsList,setProductsList] = useState([]);
    function handleSubmit(e) {
        e.preventDefault();
        setProducts({name:"",price:0})
        setProductsList([...productsList,products]);
    }
    function handleNameAdd(e) {
        setProducts({...products,name: e.target.value})
        if (e.target.name === "name" && (!/[A-Z]/.test(e.target.value) || e.target.value.length < 5)) {
            setErrorNameMessage("Name must has at least 5 characters that include at least 1 uppercase characters!")
            setIsButtonDisabled(true)                        
        
        }
        else{
            setErrorNameMessage("")
            setIsButtonDisabled(false)                        
        }
    }
    function handlePriceAdd(e) {
        setProducts({...products,price: e.target.value})
        if (e.target.name === "price" && e.target.value <= 0) {
            setErrorPriceMessage("The price must be greater than zero")                        
            setIsButtonDisabled(true)                        
        } 
        else {
            setErrorPriceMessage("")
            setIsButtonDisabled(false)                        
        } 
    }
    
    return (
    <>
        <form onSubmit={(e)=>handleSubmit(e)}>
            <div>
            <input onChange={(e)=>handleNameAdd(e)} type="text" placeholder="Product Name" name="name"/>
            {errorNameMessage && <p style={{color:"red"}}>{errorNameMessage}</p>}    
            </div>
            <input onChange={(e)=>handlePriceAdd(e)} type="number" placeholder="Product Price" name="price"/>
            {errorPriceMessage && <p style={{color:"red"}}>{errorPriceMessage}</p>}
            <div></div>
            <button disabled={isButtonDisabled} type="submit">Add Product</button>
        </form>
        <List products={productsList} setProductsList={setProductsList} />
    </>
  )
}

export default Form;


//İkinci:Btn basıldıqda list göndərir və qabağında delete btn olur. Delete btn sadəcə özünü silir
//Üçüncü:Clear All btn olmalıdır və hamısını silməlidir
//Dördüncü:Sort btn olmalıdır və price'ə görə sort etməlidir