import { NavLink } from 'react-router-dom';
import styles from './Sidebar.module.scss'

interface pageParams {
  url: string, 
  label: string,
}

const pages: pageParams[] = [
  {
    url: '/invoices',
    label: 'Invoices & returns',
  },
  {
    url: '/contacts',
    label: 'Contacts',
  },
  {
    url: '/inventory',
    label: 'Inventory',
  },
]

const Sidebar = () => {
  return (
    <div className={styles.sidebar}>
      <NavLink to="/" className={styles.logo}>INVENTORUM</NavLink>
      <nav>
        {
          pages.map(page => (
            <NavLink key={page.url} to={page.url} className={styles.link} activeClassName={styles.active}>{page.label}</NavLink>
          ))
        }
      </nav>
    </div>
  )
}

export default Sidebar;