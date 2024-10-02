import styles from './layout.module.css';

export default function DefaultLayout(props) {
    return (
        <div className={styles.defaultLayoutContainer}>
            {props.children}
        </div>
    );
}