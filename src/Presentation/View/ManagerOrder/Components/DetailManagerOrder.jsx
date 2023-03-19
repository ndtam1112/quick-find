import * as React from 'react'
import Box from '@mui/material/Box'
import Button from '@mui/material/Button'
import Modal from '@mui/material/Modal'
import VisibilityIcon from '@mui/icons-material/Visibility'
import { styled } from '@mui/material/styles'
import Grid from '@mui/material/Unstable_Grid2'
import {
  FormControl,
  InputLabel,
  MenuItem,
  Select,
  TextField,
} from '@mui/material'
import CircleIcon from '@mui/icons-material/Circle'

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
const Root = styled('div')(({ theme }) => ({
  width: '100%',
  ...theme.typography.body2,
  '& > :not(style) + :not(style)': {
    marginTop: theme.spacing(2),
    marginBottom: theme.spacing(2),
  },
}))

const DetailManagerOrder = () => {
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
  const [orderCode, setCode] = React.useState('DH-001')
  const [orderCustomer, setCustomer] = React.useState('Nguyễn Văn A')
  const [customerPhone, setPhone] = React.useState('0704 115 115')
  const [orderFrom, setFrom] = React.useState('Số 1, quận 2, TP Hồ Chí Minh')
  const [orderTo, setTo] = React.useState('Bệnh viện Bạch Mai')
  const [orderDistance, setDistance] = React.useState('10km')
  const [orderState, setState] = React.useState('Chưa xử lý')
  const [orderDriver, setDriver] = React.useState('')

  const handleSelectDriver = (event) => {
    setDriver(event.target.value)
  }

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
                  label="Mã đơn hàng"
                  value={orderCode}
                  onChange={(event) => {
                    setCode(event.target.value)
                  }}
                />
              </FormControl>
            </Grid>
            <Grid xs={4}>
              <FormControl sx={{ m: 1, minWidth: 100 }}>
                <TextField
                  sx={{ minWidth: 100 }}
                  id="outlined-required"
                  label="Khách hàng"
                  value={orderCustomer}
                  onChange={(event) => {
                    setCustomer(event.target.value)
                  }}
                />
              </FormControl>
            </Grid>
            <Grid xs={4}>
              <FormControl sx={{ m: 1, minWidth: 100 }}>
                <TextField
                  sx={{ minWidth: 100 }}
                  id="outlined-required"
                  label="Số điện thoại"
                  value={customerPhone}
                  onChange={(event) => {
                    setPhone(event.target.value)
                  }}
                />
              </FormControl>
            </Grid>
            <Grid xs={4}>
              <FormControl sx={{ m: 1, minWidth: 100 }}>
                <TextField
                  sx={{ minWidth: 100 }}
                  id="outlined-required"
                  label="Điểm đón"
                  value={orderFrom}
                  onChange={(event) => {
                    setFrom(event.target.value)
                  }}
                />
              </FormControl>
            </Grid>
            <Grid xs={4}>
              <FormControl sx={{ m: 1, minWidth: 100 }}>
                <TextField
                  sx={{ minWidth: 100 }}
                  id="outlined-required"
                  label="Điểm đến"
                  value={orderTo}
                  onChange={(event) => {
                    setTo(event.target.value)
                  }}
                />
              </FormControl>
            </Grid>
            <Grid xs={4}>
              <FormControl sx={{ m: 1, minWidth: 100 }}>
                <TextField
                  sx={{ minWidth: 100 }}
                  id="outlined-required"
                  label="Khoảng cách"
                  value={orderDistance}
                  onChange={(event) => {
                    setDistance(event.target.value)
                  }}
                />
              </FormControl>
            </Grid>
            <Grid xs={4}>
              <FormControl sx={{ m: 1, minWidth: 100 }}>
                <TextField
                  sx={{ minWidth: 100 }}
                  id="outlined-required"
                  label="Trạng thái"
                  value={orderState}
                  onChange={(event) => {
                    setState(event.target.value)
                  }}
                />
              </FormControl>
            </Grid>
            <Grid xs={4}>
              <FormControl sx={{ m: 1, minWidth: 160 }}>
                <InputLabel id="demo-simple-select-label">
                  Chọn tài xế
                </InputLabel>
                <Select
                  labelId="demo-simple-select-label"
                  id="servicecenterCity"
                  value={orderDriver}
                  label="Chọn tài xế"
                  onChange={handleSelectDriver}
                >
                  <MenuItem value={10}>
                    <CircleIcon color="success" sx={{ mr: 1 }} />
                    Tạ Văn A
                  </MenuItem>
                  <MenuItem value={20}>
                    <CircleIcon color="error" sx={{ mr: 1 }} />
                    Tạ Văn B
                  </MenuItem>
                  <MenuItem value={30}>
                    <CircleIcon color="error" sx={{ mr: 1 }} />
                    Tạ Văn C
                  </MenuItem>
                </Select>
              </FormControl>
            </Grid>
          </Grid>
        </Box>
      </Modal>
    </div>
  )
}

export default DetailManagerOrder
