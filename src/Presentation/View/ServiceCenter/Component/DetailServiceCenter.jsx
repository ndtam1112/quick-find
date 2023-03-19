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

export default function ModalServiceCenter() {
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
  const [servicecenterName, setName] = React.useState(
    'Trung tâm cấp cứu 115 toàn quốc'
  )
  const [servicecenterPhone, setPhone] = React.useState('0704 115 115')
  const [servicecenterHotline, setHotline] = React.useState('024 7300 8866')
  const [servicecenterEmergency, setEmergency] = React.useState('1900 636 555')
  const [servicecenterAddress, setAddress] = React.useState(
    '03 Đường 35A Trịnh Quang Nghị'
  )
  const [servicecenterCity, setCity] = React.useState('TP Hồ Chí Minh')
  const [servicecenterDistrict, setDistrict] = React.useState('Quận 8')
  const [servicecenterWard, setWard] = React.useState('Phường 7')
  const [servicecenterState, setState] = React.useState('Đã duyệt')
  const [servicecenterCertificate, setCer] = React.useState('')

  const handleChangeCity = (event) => {
    setCity(event.target.value)
  }

  const handleChangeDistrict = (event) => {
    setDistrict(event.target.value)
  }
  const handleChangeWard = (event) => {
    setWard(event.target.value)
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
                  label="Tên bệnh viện"
                  value={servicecenterName}
                  onChange={(event) => {
                    setName(event.target.value)
                  }}
                />
              </FormControl>
            </Grid>
            <Grid xs={4}>
              <FormControl sx={{ m: 1, minWidth: 150 }}>
                <InputLabel id="demo-simple-select-label">
                  Tỉnh/Thành phố
                </InputLabel>
                <Select
                  labelId="demo-simple-select-label"
                  id="servicecenterCity"
                  value={servicecenterCity}
                  label="Tỉnh/Thành phố"
                  onChange={handleChangeCity}
                >
                  <MenuItem value={10}>Hà Nội</MenuItem>
                  <MenuItem value={20}>Twenty</MenuItem>
                  <MenuItem value={30}>Thirty</MenuItem>
                </Select>
              </FormControl>
            </Grid>
            <Grid xs={4}>
              <FormControl sx={{ m: 1, minWidth: 150 }}>
                <InputLabel id="servicecenterDistrict-label">
                  Quận/Huyện
                </InputLabel>
                <Select
                  labelId="servicecenterDistrict-label"
                  id="servicecenterDistrict"
                  value={servicecenterDistrict}
                  label="Quận/Huyện"
                  onChange={handleChangeDistrict}
                >
                  <MenuItem value={10}>Ten</MenuItem>
                  <MenuItem value={20}>Twenty</MenuItem>
                  <MenuItem value={30}>Thirty</MenuItem>
                </Select>
              </FormControl>
            </Grid>
            <Grid xs={4}>
              <FormControl sx={{ m: 1, minWidth: 150 }}>
                <InputLabel id="servicecenterWard-label">Phường/Xã</InputLabel>
                <Select
                  labelId="servicecenterWard-label"
                  id="servicecenterWard"
                  value={servicecenterWard}
                  label="Phường/Xã"
                  onChange={handleChangeWard}
                >
                  <MenuItem value={10}>Ten</MenuItem>
                  <MenuItem value={20}>Twenty</MenuItem>
                  <MenuItem value={30}>Thirty</MenuItem>
                </Select>
              </FormControl>
            </Grid>
            <Grid xs={4}>
              <FormControl sx={{ m: 1, minWidth: 100 }}>
                <TextField
                  sx={{ minWidth: 100 }}
                  id="outlined-required"
                  label="Địa chỉ"
                  value={servicecenterAddress}
                  onChange={(event) => {
                    setAddress(event.target.value)
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
                  value={servicecenterPhone}
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
                  label="Hotline"
                  value={servicecenterHotline}
                  onChange={(event) => {
                    setHotline(event.target.value)
                  }}
                />
              </FormControl>
            </Grid>
            <Grid xs={4}>
              <FormControl sx={{ m: 1, minWidth: 100 }}>
                <TextField
                  sx={{ minWidth: 100 }}
                  id="outlined-required"
                  label="Cấp cứu"
                  value={servicecenterEmergency}
                  onChange={(event) => {
                    setEmergency(event.target.value)
                  }}
                />
              </FormControl>
            </Grid>
            <Grid xs={4}>
              <FormControl sx={{ m: 1, minWidth: 100 }}>
                <TextField
                  sx={{ minWidth: 100 }}
                  id="outlined-required"
                  label="Chứng nhận BCT"
                  value={servicecenterCertificate}
                  onChange={(event) => {
                    setCer(event.target.value)
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
                  value={servicecenterState}
                  onChange={(event) => {
                    setState(event.target.value)
                  }}
                />
              </FormControl>
            </Grid>
            <Root>
              <Divider textAlign="left">CƠ SỞ KHÁC</Divider>
            </Root>
            {/* <Grid
              container
              spacing={2}
              display={this.state.addNew ? 'display' : 'hidden'}
            >
              <Grid xs={12}>
                <FormControl sx={{ m: 1, minWidth: 150 }}>
                  <TextField
                    sx={{ minWidth: 250 }}
                    required
                    id="outlined-required"
                    label="Tên bệnh viện"
                    value={hospitalName}
                    onChange={(event) => {
                      setName(event.target.value)
                    }}
                  />
                </FormControl>
              </Grid>
              <Grid xs={4}>
                <FormControl sx={{ m: 1, minWidth: 150 }}>
                  <InputLabel id="demo-simple-select-label">
                    Tỉnh/Thành phố
                  </InputLabel>
                  <Select
                    labelId="demo-simple-select-label"
                    id="hospitalCity"
                    value={hospitalCity}
                    label="Tỉnh/Thành phố"
                    onChange={handleChangeCity}
                  >
                    <MenuItem value={10}>Hà Nội</MenuItem>
                    <MenuItem value={20}>Twenty</MenuItem>
                    <MenuItem value={30}>Thirty</MenuItem>
                  </Select>
                </FormControl>
              </Grid>
              <Grid xs={4}>
                <FormControl sx={{ m: 1, minWidth: 150 }}>
                  <InputLabel id="hospitalDistrict-label">
                    Quận/Huyện
                  </InputLabel>
                  <Select
                    labelId="hospitalDistrict-label"
                    id="hospitalDistrict"
                    value={hospitalDistrict}
                    label="Quận/Huyện"
                    onChange={handleChangeDistrict}
                  >
                    <MenuItem value={10}>Ten</MenuItem>
                    <MenuItem value={20}>Twenty</MenuItem>
                    <MenuItem value={30}>Thirty</MenuItem>
                  </Select>
                </FormControl>
              </Grid>
              <Grid xs={4}>
                <FormControl sx={{ m: 1, minWidth: 150 }}>
                  <InputLabel id="hospitalWard-label">Phường/Xã</InputLabel>
                  <Select
                    labelId="hospitalWard-label"
                    id="hospitalWard"
                    value={hospitalWard}
                    label="Phường/Xã"
                    onChange={handleChangeWard}
                  >
                    <MenuItem value={10}>Ten</MenuItem>
                    <MenuItem value={20}>Twenty</MenuItem>
                    <MenuItem value={30}>Thirty</MenuItem>
                  </Select>
                </FormControl>
              </Grid>
              <Grid xs={4}>
                <FormControl sx={{ m: 1, minWidth: 100 }}>
                  <TextField
                    sx={{ minWidth: 100 }}
                    id="outlined-required"
                    label="Địa chỉ"
                    value={hospitalAddress}
                    onChange={(event) => {
                      setAddress(event.target.value)
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
                    value={hospitalPhone}
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
                    label="Hotline"
                    value={hospitalHotline}
                    onChange={(event) => {
                      setHotline(event.target.value)
                    }}
                  />
                </FormControl>
              </Grid>
              <Grid xs={4}>
                <FormControl sx={{ m: 1, minWidth: 100 }}>
                  <TextField
                    sx={{ minWidth: 100 }}
                    id="outlined-required"
                    label="Cấp cứu"
                    value={hospitalEmergency}
                    onChange={(event) => {
                      setEmergency(event.target.value)
                    }}
                  />
                </FormControl>
              </Grid>
            </Grid> */}
            <Button variant="contained" startIcon={<ControlPoint />}>
              Thêm mới
            </Button>
          </Grid>
        </Box>
      </Modal>
    </div>
  )
}
