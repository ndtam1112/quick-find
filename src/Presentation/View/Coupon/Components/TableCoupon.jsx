import * as React from 'react'
import { DataGrid, GridDeleteIcon } from '@mui/x-data-grid'
import { ButtonGroup, IconButton } from '@mui/material'
import VisibilityOffIcon from '@mui/icons-material/VisibilityOff'
import DetailCoupon from './DetailCoupon'

const columns = [
  { field: 'id', headerName: 'ID', width: 70 },
  { field: 'couponName', headerName: 'Mã giảm giá', width: 240 },
  {
    field: 'couponDesMoney',
    type: 'number',
    headerName: 'Giá trị được giảm',
    width: 130,
  },
  {
    field: 'couponFrom',
    headerName: 'Từ ngày',
    width: 160,
  },
  {
    field: 'couponTo',
    headerName: 'Đến ngày',
    width: 160,
  },
  {
    field: 'couponState',
    headerName: 'Trạng thái',
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
            <DetailCoupon />
          </IconButton>
          <IconButton aria-label="hide">
            <VisibilityOffIcon />
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
    couponName: 'THANG3',
    couponDesMoney: '30000',
    couponFrom: '01/03/2023',
    couponTo: '30/03/2023',
    couponState: 'Đã kích hoạt',
  },
]
const TableCoupon = () => {
  return (
    <div style={{ height: '100vh', width: '100%' }}>
      <DataGrid
        rows={rows}
        columns={columns}
        pageSize={5}
        rowsPerPageOptions={[5]}
        checkboxSelection
      />
    </div>
  )
}

export default TableCoupon
