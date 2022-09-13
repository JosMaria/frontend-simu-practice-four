import '../stylesheets/Table.css';

export const Table = ({ rows, titleHeaders }) => {
  /*<RowAux row={row} />*/
  /**/
  return (
    <table className='table-container'>
      <TableHeader titleHeaders={titleHeaders} />
      <tbody>
      {rows.map((row) => 
        <Row 
          key={row.numberOfRow} 
          numberOfRow={row.numberOfRow} 
          valueOne={row.valueOne}
          valueTwo={row.valueTwo}
          valueThree={row.valueThree}
          valueFour={row.valueFour}
          valueFive={row.valueFive} />) }
      </tbody>
    </table>
  )
}

const TableHeader = ({ titleHeaders }) => {
  return (
    <thead>
      <tr>
      {
        titleHeaders.map((titleHeader, index) => <th key={index}>{titleHeader}</th>)
      }
      </tr>
    </thead>
  )
}

const Row = ({ numberOfRow, valueOne, valueTwo, valueThree, valueFour, valueFive }) => {
  return (
    <tr>
      <td>{numberOfRow}</td>
      <td>{valueOne}</td>
      <td>{valueTwo}</td>
      <td>{valueThree}</td>
      <td>{valueFour}</td>
      <td>{valueFive}</td>
    </tr>
  )
}

/*const RowAux = ({ row = {} }) => {
  const values = [];
  
  for (const [value] of Object.entries(row)) {
    values.push(value)
  }
  console.log(values);
  return (
    <tr>
    {
      values.map((value, index) => <td key={index}>{value}</td>)
    }
    </tr>
  )
};*/