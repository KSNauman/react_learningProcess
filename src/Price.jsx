export default function Price({Oprice , newPrice}) {
    let oldPriceStyle = {textDecoration : 'line-through'}
    let newPriceStyle = {fontWeight : 'bold'}
    let divStyle = {backgroundColor:"#e0c367",height:"40px",borderBottomLeftRadius:"25px",borderBottomRightRadius:"25px"}
    return <div style={divStyle}>
        <span style={oldPriceStyle}>{Oprice}</span>
        &nbsp;&nbsp;&nbsp;
        <span style={newPriceStyle} >{newPrice}</span>
    </div>
}