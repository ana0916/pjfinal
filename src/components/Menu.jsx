import { Link } from 'react-router-dom'

import styles from '../styles/components/menu.module.css'

export function Menu() {
  return (
   
<div className={styles.wrapper}>
    <ul className={styles.menuContainer}>
          
        
       <li className={styles.menuItem}>
        <Link className={styles.menuLink} to="/profile">HOME</Link>
      </li>
      <li className={styles.menuItem}>
        <Link className={styles.menuLink} to="/">Movies</Link>
      </li>
      <li className={styles.menuItem}>
        <Link className={styles.menuLink} to="/albums">Albums</Link>
      </li>
      <li className={styles.menuItem}>
        <Link className={styles.menuLink} to="/books">Books</Link>
      </li>
      <li className={styles.menuItem}>
        <Link className={styles.menuLink} to="/animation">Animations</Link>
      </li>
    </ul>
    </div>
  )
}
