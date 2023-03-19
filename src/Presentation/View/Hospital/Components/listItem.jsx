import * as React from 'react'
import ListItemButton from '@mui/material/ListItemButton'
import ListItemIcon from '@mui/material/ListItemIcon'
import ShoppingCartIcon from '@mui/icons-material/ShoppingCart'
import { CustomLink } from '../../style'
import LocalHospitalIcon from '@mui/icons-material/LocalHospital'
import BusinessIcon from '@mui/icons-material/Business'
import DriveEtaIcon from '@mui/icons-material/DriveEta'
import AttachMoneyIcon from '@mui/icons-material/AttachMoney'
import PersonPinIcon from '@mui/icons-material/PersonPin'
import DiscountIcon from '@mui/icons-material/Discount'

export const mainListItems = (
  <React.Fragment>
    <ListItemButton>
      <ListItemIcon>
        <LocalHospitalIcon />
      </ListItemIcon>
      <CustomLink to="/quan-ly-benh-vien">Quản lý bệnh viện</CustomLink>
    </ListItemButton>
    <ListItemButton>
      <ListItemIcon>
        <BusinessIcon />
      </ListItemIcon>
      <CustomLink to="/quan-ly-trung-tam">Quản lý trung tâm</CustomLink>
    </ListItemButton>
    <ListItemButton>
      <ListItemIcon>
        <PersonPinIcon />
      </ListItemIcon>
      <CustomLink to="/quan-ly-tai-xe">Quản lý tài xế</CustomLink>
    </ListItemButton>
    <ListItemButton>
      <ListItemIcon>
        <AttachMoneyIcon />
      </ListItemIcon>
      <CustomLink to="/quan-ly-dich-vu">Quản lý dịch vụ</CustomLink>
    </ListItemButton>
    <ListItemButton>
      <ListItemIcon>
        <DriveEtaIcon />
      </ListItemIcon>
      <CustomLink to="/quan-ly-chuyen-xe">Quản lý chuyến xe</CustomLink>
    </ListItemButton>
    <ListItemButton>
      <ListItemIcon>
        <DiscountIcon />
      </ListItemIcon>
      <CustomLink to="/quan-ly-phieu-giam-gia">
        Quản lý phiếu giảm giá
      </CustomLink>
    </ListItemButton>
  </React.Fragment>
)
