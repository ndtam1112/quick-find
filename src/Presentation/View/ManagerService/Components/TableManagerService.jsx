import * as React from 'react'
import { DataGrid, GridDeleteIcon } from '@mui/x-data-grid'
import { ButtonGroup, IconButton } from '@mui/material'
import SaveIcon from '@mui/icons-material/Save'

const columns = [
  { field: 'id', headerName: 'ID', width: 70 },
  { field: 'priceDescripton', headerName: 'Nội dung', width: 240 },
  { field: 'distanceFrom', headerName: 'Từ (km)', width: 130 },
  {
    field: 'distanceTo',
    headerName: 'Đến (km)',
    width: 160,
  },
  {
    field: 'price',
    headerName: 'Giá tiền',
    width: 160,
  },
  {
    field: ``,
    width: 150,
    sortable: false,
    filterable: false,
    renderCell: (params) => {
      const OnClick = (e) => {
        e.stopPropagation() // don't select this row after clicking
      }

      return (
        <ButtonGroup>
          <IconButton aria-label="view" onClick={OnClick}>
            <SaveIcon />
          </IconButton>
          <IconButton aria-label="delete">
            <GridDeleteIcon />
          </IconButton>
        </ButtonGroup>
      )
    },
  },

  //   {
  //     field: 'fullName',
  //     headerName: 'Full name',
  //     description: 'This column has a value getter and is not sortable.',
  //     sortable: false,
  //     width: 160,
  //     valueGetter: (params) =>
  //       `${params.row.firstName || ''} ${params.row.lastName || ''}`,
  //   },
]

const rows = [
  {
    id: 1,
    priceDescripton: 'Khoảng cách quãng đường =< 5',
    distanceFrom: '0.1',
    distanceTo: '5',
    price: '100000',
  },
]
const TableManagerService = () => {
  return (
    <div style={{ height: '100vh', width: '100%' }}>
      <DataGrid
        rows={rows}
        columns={columns}
        pageSize={4}
        rowsPerPageOptions={[5]}
        checkboxSelection
      />
    </div>
  )
}

export default TableManagerService
