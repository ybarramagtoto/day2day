import styles from './layout.module.css';
import NavigationBar from "./NavigationBar";
import Footer from "./Footer";

export default function Layout({ children }) {
    return (
        <div className={styles.container}>{children}</div>        
    );
}