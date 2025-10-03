import './Product.css'
import Price from './Price.jsx'
function Product({title ,idx}){
    let oldPrice = ["12,495","11,900","1599","599"]
    let newPrice = ["8,999","9,199","899","278"]
    let desc = [["8,000 DPI","5 Programmable buttons"],["intuitive surface","designed for iPad Pro"],["designed for iPad Pro","intuitive surface"],["wireless","optical orientation"]]
    return <div className = "product">
        <h1>{title}</h1>
        <p>{desc[idx][0]}</p>
        <p>{desc[idx][1]}</p>
        <Price Oprice={oldPrice[idx]} newPrice={newPrice[idx]}/>
    </div> 
}

export default Product;