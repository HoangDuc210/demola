import React from 'react'
import CIcon from '@coreui/icons-react'

const _nav =  [
  {
    _tag: 'CSidebarNavDropdown',
    name: 'Tin tức',
    route: '/admin/news',
    icon: 'cil-user',
    _children: [
      {
        _tag: 'CSidebarNavItem',
        name: 'Danh sách bài viet',
        to: '/admin/danh-sach-bai-viet',
      },
      {
        _tag: 'CSidebarNavItem',
        name: 'Thêm bài viết',
        to: '/admin/them-bai-viet',
      }
    ],
  }

]

export default _nav
