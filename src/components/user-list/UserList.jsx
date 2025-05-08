import { v4 } from "uuid"
import {USERS} from "../../constants/users"
import UserCard from "../user-card/usercard"
import styles from "./userlist.module.css"

const UserList = () => {
    return<>
    <h1>Listado de Usuarios</h1>
    <form className={styles["inputs-form"]}>
        <input type="text"/>
        <label>
            <input type="checkbox" />
            Sólo activos
        </label>
        <select>
            <option value="default">Por defecto</option>
            <option value="by name">Por nombre</option>
        </select>
    </form>
    <div>
        {USERS.map(user =>
            <UserCard key={v4()} {...user}/>
        )}
    </div>
    </>
}

export default UserList