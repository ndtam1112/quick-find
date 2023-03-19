import * as React from 'react'
import { DataGrid, GridDeleteIcon } from '@mui/x-data-grid'
import { ButtonGroup, IconButton } from '@mui/material'
import VisibilityOffIcon from '@mui/icons-material/VisibilityOff'
import DetailDriver from './DetailDriver'

const columns = [
  { field: 'id', headerName: 'ID', width: 70 },
  { field: 'servicecenterName', headerName: 'Tên tài xế', width: 240 },
  { field: 'servicecenterAddress', headerName: 'Địa chỉ', width: 130 },
  {
    field: 'servicecenterWard',
    headerName: 'Phường/Xã',
    width: 160,
  },
  {
    field: 'servicecenterDistrict',
    headerName: 'Quận/Huyện',
    width: 160,
  },
  {
    field: 'servicecenterCity',
    headerName: 'Tỉnh/Thành phố',
    width: 160,
  },
  {
    field: 'servicecenterPhone',
    type: 'number',
    headerName: 'Số điện thoại',
    width: 160,
  },
  {
    field: 'servicecenterState',
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
            <DetailDriver />
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
    servicecenterName: 'Nguyễn Văn A',
    servicecenterAddress: '03 Đường 35A Trịnh Quang Nghị',
    servicecenterWard: 'Phường 7',
    servicecenterDistrict: 'Quận 8',
    servicecenterCity: 'TP Hồ Chí Minh',
    servicecenterPhone: '0704 115 115',
    servicecenterState: 'Đã duyệt',
  },
]

const TableServiceCenter = () => {
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

export default TableServiceCenter
