import 'bootstrap/dist/css/bootstrap.min.css'
import 'bootstrap/dist/js/bootstrap'
import './App.css';


import products from './products.json'


import Navbar from './components/Navbar'
import Header from './components/Header'
import Demo from './components/Demo';
import Product from './components/Product';


import {useEffect, useState} from 'react'
import Basket from './components/Basket';



function App() {

  // HOOKlardan istifade olunur
  // HOC Higher Order Component
  const [money,setMoney] = useState(6000)
  const [sebet, setSebet] = useState([])
  const [total,setTotal] = useState(0)



  const resetBasket = () => {
    setSebet([])
  }

  useEffect(()=> {
    setTotal(
      sebet.reduce((acc,item)=>{
        return acc + (item.amount * (products.find(product => product.id===item.id).price) )
      },0)
    )
  },[sebet])




  return (
    <div className="App">
      <Navbar total={total} money={money} />
      <Header />
      <Demo />
<div className='mehsullar'>
      {
        products.map((p,index)=> (
          <Product key={index} total={total} money={money} basket={sebet} setBasket={setSebet} product={p}  />
        ))
       
      }

</div>

{
  total > 0 && (
    <Basket resetBasket={resetBasket} products={products} total={total} basket={sebet} />
  )
}
      
    </div>
  );
}

export default App;
