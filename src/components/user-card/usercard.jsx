import Button from "../buttons/Button"
import styles from "./usercard.module.css"

const UserCard = ({profileImage, name, username, active}) => {
    const getStatusText = active ? "Activo" : "Inactivo";
    const statusClass =`${styles.status} ${active ? styles.active : styles.inactive}`;
return <div className={styles["user-card"]}>
    <div className={styles["userinfo"]}>
    <img src={profileImage} className={styles["photo-container"]}/>
    <div className={styles["username-container"]}>
        <h4 className={styles["name"]}>{name}</h4>
        <p className={styles["username"]}>@{username}</p>
    </div>
    </div>
    <span className={statusClass}>{getStatusText}</span>
    <Button>Ver Detalles</Button>
</div>
}
export default UserCard