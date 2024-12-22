import React from "react";
import {useTable, useSortBy} from 'react-table'

const data = [
  {
    P: "Surveyor Appointment",
    S:1,
    F:1,
    D:1,
    T:1,
  },
  {
    P: "Surveyor Completion",
    S:2,
    F:2,
    D:2,
    T:2,
  },
  {
    P: "Surveyor Assesment",
    S:3,
    F:3,
    D:3,
    T:3,
  },
  {
    P: "Final Assesment",
    S:4,
    F:4,
    D:4,
    T:4,
  },
  {
    P: "Payment",
    S:5,
    F:5,
    D:5,
    T:5,
  },
]

const columns =[
  {
    Header: "Parameter",
    accessor: "P",
  },
  {
    Header: "Success",
    accessor: "S",
  },
  {
    Header: "Fail",
    accessor: "F",
  },
  {
    Header: "Diffrence",
    accessor: "D",
  },
  {
    Header: "Total",
    accessor: "T",
  },
];

const App = () => {

  const {getTableProps,getTableBodyProps,headerGroups,rows,prepareRow} = useTable({
    columns,
    data,
  }, useSortBy);

  const props = getTableProps();

  return <div className="container">
    <table {...props}>
      <thead>
        {headerGroups.map((hg)=>(
          <tr {...hg.getHeaderGroupProps()}>
            {
              hg.headers.map(coloumn=>(
                <th {...coloumn.getHeaderProps(coloumn.getSortByToggleProps())}>
                    {
                      coloumn.isSorted && <span>{coloumn.isSortedDesc ? " ⬇️" : " ⬆️"}</span>
                    }
                  {coloumn.render("Header")}
                </th>
              ))
            }
          </tr>
        ))}
      </thead>
      <tbody {...getTableBodyProps()}>
      {
        rows.map(row=>{
          prepareRow(row)

          return <tr {...row.getRowProps}>
            {
              row.cells.map(cell=>(
                <td {...cell.getCellProps()}>{cell.render("Cell")}</td>
              ))
            }
          </tr>
        })
      }
      </tbody>
    </table>
  </div>
};

export default App;