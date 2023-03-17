import * as React from 'react'
import { DataGrid, GridDeleteIcon } from '@mui/x-data-grid'
import { ButtonGroup, IconButton, Modal } from '@mui/material'
import VisibilityOffIcon from '@mui/icons-material/VisibilityOff'
import DetailServiceCenter from './DetailServiceCenter'

const columns = [
  { field: 'id', headerName: 'ID', width: 70 },
  { field: 'servicecenterName', headerName: 'Tên trung tâm', width: 240 },
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
            <DetailServiceCenter />
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
    servicecenterName: 'Trung tâm cấp cứu 115 toàn quốc',
    servicecenterAddress: '03 Đường 35A Trịnh Quang Nghị',
    servicecenterWard: 'Phường 7',
    servicecenterDistrict: 'Quận 8',
    servicecenterCity: 'TP Hồ Chí Minh',
    servicecenterPhone: '0704 115 115',
    // servicecenterHotline: '024 7300 8866',
    // servicecenterEmergency: '1900 636 555',
    // servicecenterCertificate: '',
    servicecenterState: 'Đã duyệt',
  },
  {
    id: 2,
    servicecenterName: 'Trung tâm cấp cứu vận chuyển người bệnh Bắc Việt',
    servicecenterAddress: '48 Tăng Bạt Hổ',
    servicecenterWard: 'Phường Hai Bà Trưng',
    servicecenterDistrict: 'Quận Hai Bà Trưng',
    servicecenterCity: 'Hà Nội',
    servicecenterPhone: '024 33.911.911',
    // servicecenterHotline: '0837.911.911',
    // servicecenterEmergency: '*8911',
    // servicecenterCertificate: '',
    servicecenterState: 'Chưa duyệt',
  },
  {
    id: 3,
    servicecenterName: 'Công ty TNHH Cấp Cứu Vàng',
    servicecenterAddress: 'Số 30 Nguyễn Kim',
    servicecenterWard: 'Phường 6',
    servicecenterDistrict: 'Quận 10',
    servicecenterCity: 'TP Hồ Chí Minh',
    servicecenterPhone: '',
    // servicecenterHotline: '0912 115 115',
    // servicecenterEmergency: '',
    // servicecenterCertificate: '',
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
