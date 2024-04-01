
type TableContentProps = {
    name : string,
    username : string,
    email : string,
    city : string,
    pincode : number
}


const TableContent = (props : TableContentProps) => {

    const propsArray = Object.entries(props)

  return (
    <tr>
       {propsArray.map(([key,value])=>
       <td key={key}>{value}</td>
       )}
    </tr>
  )
}

export default TableContent