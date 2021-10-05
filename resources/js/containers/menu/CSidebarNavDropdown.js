import React, {
    useState,
    useContext,
    useEffect,
    createRef,
    isValidElement
  } from 'react' 
  import PropTypes from 'prop-types'
  import classNames from 'classnames'
  import CIcon from '@coreui/icons-react'
  import { useLocation } from 'react-router-dom'
  import { CLink } from '@coreui/react'
  import { Context } from './CSidebar'

  export const DropdownContext = React.createContext({})

  export const iconProps = (icon) => {
    if (typeof icon === 'object') {
      const key = icon.size ? 'className' : 'customClasses'
      return {
        ...icon,
        [`${key}`]: icon.customClasses || `c-sidebar-nav-icon ${icon.className}`
      }
    } else {
      return {
        customClasses: 'c-sidebar-nav-icon',
        name: icon
      }
    }
  }
  
  //component - CoreUI / CSidebarNavDropdown
  const CSidebarNavDropdown = props => {
    
    const dropdownMode = 'close';

    const {
      children,
      className,
      //
      innerRef,
      icon,
      fontIcon,
      name,
      show,
      route,
      ...attributes
    } = props
    
    const [openDropdown, setOpenDropdown] = useState()
    const ref = createRef()
    innerRef && innerRef(ref)
    
    const [dropDefault, setDropDefault] = useState("open");
    const [open, setOpen] = useState("")
    
  
    const [isOpen, setIsOpen] = useState(show)
    useEffect(() => {
      setIsOpen(show)
    }, [show])
  
    useEffect(() => {
      !dropdownMode && (!openDropdown || !ref.current.contains(openDropdown)) && setIsOpen(false)
    }, [openDropdown])
  
    const toggle = dropDefault => {
        if (dropDefault === "open") {
          setDropDefault("close");
          setOpen("c-show");
        }else if(dropDefault === "close"){
          setDropDefault("open");
          setOpen("");
        }
      

    }
  
    //render
    const classes = classNames(
      'c-sidebar-nav-dropdown',
      isOpen && 'c-show',
      className
    )
        
    const iconClasses = classNames(
      'c-sidebar-nav-icon',
      fontIcon
    )
  
    return (
      <li 
        className={classes + " " +open} 
        {...attributes} 
        ref={ref}
      >
        <CLink
          className="c-sidebar-nav-dropdown-toggle" 
          tabIndex="0"
          to={route}
          aria-label="menu dropdown" 
        >
            { icon && (isValidElement(icon) ? icon : <CIcon  {...iconProps(icon)}/>) }
            { fontIcon && <i className={iconClasses}/> }
            { name }
        </CLink>
        {children !=='' ? <i className="fa fa-angle-left" onClick={() =>toggle(dropDefault)}></i>:'' }
        
        <ul className="c-sidebar-nav-dropdown-items">
          <DropdownContext.Provider value={{ isOpen }}>
            {children}
          </DropdownContext.Provider>
        </ul>
      </li>
    )
  }
  
  CSidebarNavDropdown.propTypes = {
    className: PropTypes.oneOfType([PropTypes.string, PropTypes.array, PropTypes.object]),
    children: PropTypes.node,
    //
    innerRef: PropTypes.oneOfType([PropTypes.object, PropTypes.func]),
    name: PropTypes.oneOfType([PropTypes.string, PropTypes.object]),
    icon: PropTypes.oneOfType([PropTypes.object, PropTypes.string]),
    fontIcon: PropTypes.string,
    show: PropTypes.bool,
    route: PropTypes.string,
    dropdownMode: PropTypes.oneOf([
        '', 'openActive', 'close', 'closeInactive', 'noAction'
      ]),
  }
  
  export default CSidebarNavDropdown
  