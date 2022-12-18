import { Link } from 'react-router-dom'
import   styles  from '../styles/components/header.module.css'
export function Header() {
    return (
        <div className={styles.container}>
            <div className={styles.title}>
                <p>Media Masters</p>
            </div>
        
        </div>    
    );
};