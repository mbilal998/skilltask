import { useMemo, useState } from 'react';
import styled from 'styled-components'
import { useTable } from 'react-table'

const Styles = styled.div`
  padding: 1rem;

  table {
    border-spacing: 0;
    border: 1px solid black;

    tr {
      :last-child {
        td {
          border-bottom: 0;
        }
      }
    }

    th,
    td {
      margin: 0;
      padding: 0.5rem;
      border-bottom: 1px solid black;
      border-right: 1px solid black;

      :last-child {
        border-right: 0;
      }
    }
  }
`

function Table({ columns, data }) {

    const {
        getTableProps,
        getTableBodyProps,
        headerGroups,
        rows,
        prepareRow,
    } = useTable({
        columns,
        data,
    })

    return (
        <table {...getTableProps()}>
            <thead>
                {headerGroups.map(headerGroup => (
                    <tr {...headerGroup.getHeaderGroupProps()}>
                        {headerGroup.headers.map(column => (
                            <th {...column.getHeaderProps()}>{column.render('Header')}</th>
                        ))}
                    </tr>
                ))}
            </thead>
            <tbody {...getTableBodyProps()}>
                {
                    rows.map((row, i) => {
                        prepareRow(row)
                        return (
                            <tr {...row.getRowProps()}>
                                {row.cells.map(cell => {
                                    return <td {...cell.getCellProps()}>
                                        {cell.render('Cell')}
                                    </td>
                                })}
                            </tr>
                        )
                    })
                }
            </tbody>
        </table>
    )
}

function HomeHeadless() {

    const information = JSON.parse(window.localStorage.getItem('mydata_2'));
    const [data, setData] = useState(information);

    const columns = useMemo(
        () => [
            {
                Header: 'Profile Information',
                columns: [
                    {
                        Header: 'Name',
                        accessor: 'Name',
                    },
                    {
                        Header: 'FatherName',
                        accessor: 'FatherName',
                    },
                ],
            },
            {
                Header: 'Company Information',
                columns: [
                    {
                        Header: 'Designation',
                        accessor: 'Designation',
                    },
                    {
                        Header: 'Company',
                        accessor: 'Company',
                    }
                ],
            },
            {
                Header: 'Address Information',
                columns: [
                    {
                        Header: 'Address',
                        accessor: 'Address',
                    }
                ],
            },
            // {
            //     Header: 'Action',
            //     columns: [
            //         {
            //             Header: 'Edit',
            //             accessor: 'Edit',
            //         }
            //     ],
            // },
        ],
        []
    )
    return (
        <Styles>
            <Table columns={columns} data={data} />
        </Styles>
    )
}

export default HomeHeadless;
