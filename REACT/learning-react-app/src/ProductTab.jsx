import Product from "./Product.jsx";

function ProductTab() {
let styles = {
  display: "flex",
  flexWrap: "wrap",
  alignItems: "center",
  justifyContent: "center",
  textAlign: "center"
}

  
return (
    <div style={styles}>
      
      <Product title={"Logitech MX Master"} idx={0}/>
      <Product title={"Zebronics Zeb-transformer"} idx={1}/>
      <Product title={"Apple Pencil (2nd Gen"} idx={2}/>
      <Product title={"Petronics Gaming Mouse"} idx={3}/>
    </div>
);
}

export default ProductTab;