import * as React from 'react'
import Box from '@mui/material/Box'
import Button from '@mui/material/Button'
import Modal from '@mui/material/Modal'
import VisibilityIcon from '@mui/icons-material/Visibility'
import { styled } from '@mui/material/styles'
import Grid from '@mui/material/Unstable_Grid2'
import {
  Divider,
  FormControl,
  InputLabel,
  MenuItem,
  Select,
  TextField,
} from '@mui/material'
import { ControlPoint } from '@mui/icons-material'
import { AdapterDayjs } from '@mui/x-date-pickers/AdapterDayjs'
import { LocalizationProvider } from '@mui/x-date-pickers/LocalizationProvider'
import { DatePicker } from '@mui/x-date-pickers/DatePicker'

const style = {
  position: 'absolute',
  top: '50%',
  left: '50%',
  transform: 'translate(-50%, -50%)',
  width: 800,
  bgcolor: 'background.paper',
  border: '2px solid #000',
  boxShadow: 24,
  p: 4,
}
const DetailCoupon = () => {
  const [open, setOpen] = React.useState(false)
  const handleOpen = () => setOpen(true)
  const handleClose = () => setOpen(false)

  // const host = 'https://provinces.open-api.vn/api/'
  // var callAPI = (api) => {
  //   return axios.get(api).then((response) => {
  //     renderData(response.data.data, 'province')
  //   })
  // }
  // callAPI('https://provinces.open-api.vn/api/?depth=1')
  // var callApiDistrict = (api) => {
  //   return axios.get(api).then((response) => {
  //     renderData(response.data.districts, 'district')
  //   })
  // }
  const [couponName, setName] = React.useState('THANG3')
  const [couponDesMoney, setDesMoney] = React.useState('30000')
  const [couponFrom, setFrom] = React.useState(null)
  const [couponTo, setTo] = React.useState(null)
  const [couponState, setState] = React.useState('Đã kích hoạt')

  return (
    <div>
      <VisibilityIcon onClick={handleOpen} />
      <Modal
        open={open}
        onClose={handleClose}
        aria-labelledby="modal-modal-title"
        aria-describedby="modal-modal-description"
      >
        <Box sx={style}>
          <Grid container spacing={2}>
            <Grid xs={12}>
              <FormControl sx={{ m: 1, minWidth: 150 }}>
                <TextField
                  sx={{ minWidth: 250 }}
                  required
                  id="outlined-required"
                  label="Tên bệnh viện"
                  value={couponName}
                  onChange={(event) => {
                    setName(event.target.value)
                  }}
                />
              </FormControl>
            </Grid>

            <Grid xs={4}>
              <FormControl sx={{ m: 1, minWidth: 100 }}>
                <TextField
                  sx={{ minWidth: 100 }}
                  id="outlined-required"
                  label="Địa chỉ"
                  value={couponDesMoney}
                  onChange={(event) => {
                    setDesMoney(event.target.value)
                  }}
                />
              </FormControl>
            </Grid>
            <Grid xs={4}>
              <FormControl sx={{ m: 1, minWidth: 100 }}>
                <LocalizationProvider
                  dateAdapter={AdapterDayjs}
                  label={'Ngày bắt đầu'}
                >
                  <DatePicker
                    value={couponFrom}
                    onChange={(newValue) => setFrom(newValue)}
                  />
                </LocalizationProvider>
              </FormControl>
            </Grid>
            <Grid xs={4}>
              <FormControl sx={{ m: 1, minWidth: 100 }}>
                <LocalizationProvider
                  dateAdapter={AdapterDayjs}
                  label={'Ngày kết thúc'}
                >
                  <DatePicker
                    value={couponTo}
                    onChange={(newValue) => setTo(newValue)}
                  />
                </LocalizationProvider>
              </FormControl>
            </Grid>
            <Grid xs={4}>
              <FormControl sx={{ m: 1, minWidth: 100 }}>
                <TextField
                  sx={{ minWidth: 100 }}
                  id="outlined-required"
                  label="Cấp cứu"
                  value={couponState}
                  onChange={(event) => {
                    setState(event.target.value)
                  }}
                />
              </FormControl>
            </Grid>
          </Grid>
        </Box>
      </Modal>
    </div>
  )
}

export default DetailCoupon
