import styles from "./buttons.module.css"

const Button = ({children}) => {
    return <button className={styles["buttons"]}>{children}</button>
}
export default Button