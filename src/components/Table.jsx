import '../stylesheets/Table.css';

export const Table = ({ rows, titleHeaders }) => {
  return (
    <table className='table-container'>
      <TableHeader titleHeaders={titleHeaders} />
      <tbody>
      { rows.map(row => <Row key={row.numberRow} row={row} />) }
      </tbody>
    </table>
  )
}

const TableHeader = ({ titleHeaders }) => {
  return (
    <thead>
      <tr>
      { titleHeaders.map((titleHeader, index) => <th key={index}>{titleHeader}</th>)}
      </tr>
    </thead>
  )
}

const Row = ({ row = {} }) => {
  const values = [];
  for (const [value] of Object.entries(row)) {
    values.push(value)
  }
  return (
    <tr>{ values.map((value, index) => <td key={index}>{row[value]}</td>) }</tr>
  )
};