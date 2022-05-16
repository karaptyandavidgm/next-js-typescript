import { FC } from 'react';
import Images from 'next/image';
import Link from 'next/link';
import { useRouter } from "next/router";

import styles from '../styles/Navbar.module.scss'

const menus = [
    { id: 1, path: '/', title: 'Home' },
    { id: 2, path: '/users', title: 'Users' },
    { id: 3, path: '/contacts', title: 'Contacts' }

]
const Navbar: FC = () => {
    const { pathname } = useRouter()

    return (
        <nav className={styles.nav}>
            <div className={styles.logo}>
                <Images src='/logo.png' width={60} height={60} alt='logo' />
            </div>
            <div className={styles.links}>
                {menus.map(({ id, path, title }) => (
                    <Link key={id} href={path}>
                        <a className={pathname === path ? styles.active : null}>{title}</a>
                    </Link>
                ))}
            </div>
        </nav >

    );
};
export default Navbar;
