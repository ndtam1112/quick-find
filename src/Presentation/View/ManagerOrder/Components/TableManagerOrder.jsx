import * as React from 'react'
import { DataGrid, GridDeleteIcon } from '@mui/x-data-grid'
import { ButtonGroup, IconButton } from '@mui/material'
import VisibilityOffIcon from '@mui/icons-material/VisibilityOff'
import DetailManagerOrder from './DetailManagerOrder'

const columns = [
  { field: 'id', headerName: 'ID', width: 70 },
  { field: 'orderCode', headerName: 'Mã đơn hàng', width: 240 },
  { field: 'orderCustomer', headerName: 'Khách hàng', width: 130 },
  {
    field: 'customerPhone',
    headerName: 'Số điện thoại',
    width: 160,
  },
  {
    field: 'orderFrom',
    headerName: 'Điểm đón',
    width: 160,
  },
  {
    field: 'orderTo',
    headerName: 'Điểm đến',
    width: 160,
  },
  {
    field: 'orderDistance',
    type: 'number',
    headerName: 'Khoảng cách',
    width: 160,
  },
  {
    field: 'orderState',
    headerName: 'Trạng thái',
    width: 160,
  },
  // {
  //   field: 'servicecenterHotline',
  //   type: 'number',
  //   headerName: 'Hotline',
  //   width: 160,
  // },
  // {
  //   field: 'servicecenterEmergency',
  //   type: 'number',
  //   headerName: 'Cấp cứu',
  //   width: 160,
  // },
  // {
  //   field: 'servicecenterCertificate',
  //   headerName: 'Chứng nhận BCT',
  //   width: 160,
  // },

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
            <DetailManagerOrder />
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
    orderCode: 'DH-001',
    orderCustomer: 'Nguyễn Văn A',
    customerPhone: '0704 115 115',
    orderFrom: 'Số 1, quận 2, TP Hồ Chí Minh',
    orderTo: 'Bệnh viện Bạch Mai',
    orderDistance: '10km',
    // servicecenterHotline: '024 7300 8866',
    // servicecenterEmergency: '1900 636 555',
    // servicecenterCertificate: '',
    orderState: 'Chưa xử lý',
  },
]

const TableManagerOrder = () => {
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

export default TableManagerOrder
