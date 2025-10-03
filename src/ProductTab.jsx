import Product from './Product'
// how do i bring the items to center of screen on y axis 
let styles = {display : 'flex' , flexWrap : 'wrap' , justifyContent : 'center', alignItems : 'center' , width : '100vw'}
function ProductTab(){
    return <div style={styles}>
        <Product title="Logitech MX Master" idx={0}/>
        <Product title="Apple Pencil (2nd Gen)" idx={1}/>
        <Product title="Zebronics Zeb-transformer" idx={2}/>
        <Product title="Petronics Toad 23" idx={3}/>
    </div>
}
export default ProductTab;