import * as React from 'react'
import { DataGrid, GridDeleteIcon } from '@mui/x-data-grid'
import { ButtonGroup, IconButton, Modal } from '@mui/material'
import VisibilityIcon from '@mui/icons-material/Visibility'
import VisibilityOffIcon from '@mui/icons-material/VisibilityOff'
import DetailHospital from './DetailHospital'
import Box from '@mui/material/Box'
import Button from '@mui/material/Button'
import Typography from '@mui/material/Typography'

const columns = [
  { field: 'id', headerName: 'ID', width: 70 },
  { field: 'hospitalName', headerName: 'Tên bệnh viện', width: 240 },
  { field: 'hospitalAddress', headerName: 'Địa chỉ', width: 130 },
  {
    field: 'hospitalWard',
    headerName: 'Phường/Xã',
    width: 160,
  },
  {
    field: 'hospitalDistrict',
    headerName: 'Quận/Huyện',
    width: 160,
  },
  {
    field: 'hospitalCity',
    headerName: 'Tỉnh/Thành phố',
    width: 160,
  },
  {
    field: 'hospitalPhone',
    type: 'number',
    headerName: 'Số điện thoại',
    width: 160,
  },
  {
    field: 'hospitalHotline',
    type: 'number',
    headerName: 'Hotline',
    width: 160,
  },
  {
    field: 'hospitalEmergency',
    type: 'number',
    headerName: 'Cấp cứu',
    width: 160,
  },
  {
    field: ``,
    width: 150,
    sortable: false,
    renderCell: (params) => {
      const OnClick = (e) => {
        e.stopPropagation() // don't select this row after clicking
      }

      return (
        <ButtonGroup>
          <IconButton aria-label="view" onClick={OnClick}>
            <DetailHospital />
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
    hospitalName: 'Bệnh viện Đa khoa Hồng Ngọc',
    hospitalAddress: 'Số 55 Yên Ninh',
    hospitalWard: 'Phường Trúc Bạch',
    hospitalDistrict: 'Quận Ba Đình',
    hospitalCity: 'Hà Nội',
    hospitalPhone: '024 7300 8866',
    hospitalHotline: '024 7300 8866',
    hospitalEmergency: '1900 636 555',
  },
  {
    id: 2,
    hospitalName: 'Bệnh viện Thu Cúc',
    hospitalAddress: 'Số 55 Yên Ninh',
    hospitalWard: 'Phường Trúc Bạch',
    hospitalDistrict: 'Quận Ba Đình',
    hospitalCity: 'Hà Nội',
    hospitalPhone: '024 7300 8866',
    hospitalHotline: '024 7300 8866',
    hospitalEmergency: '1900 636 555',
  },
]

const Table = () => {
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

export default Table
