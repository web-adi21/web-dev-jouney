
import './App.css'
import ProductTab from "./ProductTab.jsx"


function App() {
let style = {
    justifyContent:"center",
    alignItems:"center"
}
return(
    <>
        <h2 style={style}>BlockBuster Deals!! SHOP NOW!</h2>
      <ProductTab />
    </>
)
}

export default App
