import React from 'react'

const Balans = ({total,money}) => {
  return (
<>
{/* conditional rendering shertli renderetme */}
{total > 0 && money-total !==0 &&(

    <div> <span>{money-total} </span> </div>
)}

{total===0 && (
    <div>{money} AZN</div>
)}

{money-total ===0 && (
    <div>Balansiniz bitdi</div>
)}

</> )
}

export default Balans