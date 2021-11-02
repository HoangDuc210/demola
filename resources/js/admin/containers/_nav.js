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
        to: '/admin/list-news',
      },
      {
        _tag: 'CSidebarNavItem',
        name: 'Thêm bài viết',
        to: '/admin/news/add',
      }
    ],
  },
  {
    _tag: 'CSidebarNavDropdown',
    name: 'Danh mục tin tức',
    route: '/admin/news_categories',
    icon: 'cil-user',
    _children: [
      {
        _tag: 'CSidebarNavItem',
        name: 'Danh sách danh mục',
        to: '/admin/list-news_categories',
      },
      {
        _tag: 'CSidebarNavItem',
        name: 'Thêm danh mục',
        to: '/admin/add/news_categories',
      }
    ],
  }

]

export default _nav
