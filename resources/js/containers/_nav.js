import React from 'react'
import CIcon from '@coreui/icons-react'

const _nav =  [
  {
    _tag: 'CSidebarNavDropdown',
    name: 'Nhân viên',
    route: '/dashboard-employees',
    icon: 'cil-user',
    _children: [
      {
        _tag: 'CSidebarNavItem',
        name: 'Danh sách nhân viên',
        to: '/employees',
      },
      {
        _tag: 'CSidebarNavItem',
        name: 'Thêm nhân viên',
        to: '/add-employee',
      }
    ],
  },
  {
    _tag: 'CSidebarNavDropdown',
    name: 'Khách hàng',
    route: '/base',
    icon: 'cil-user',
    _children: [
      {
        _tag: 'CSidebarNavItem',
        name: 'Danh sách khách hàng',
        to: '/customers',
      },
      {
        _tag: 'CSidebarNavItem',
        name: 'Thêm khách hàng',
        to: '/add-customer',
      }
    ],
  }
  
]

export default _nav
