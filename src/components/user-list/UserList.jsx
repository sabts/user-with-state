import { v4 } from "uuid"
import {USERS} from "../../constants/users"
import UserCard from "../user-card/usercard"
import styles from "./userlist.module.css"
import { useState } from "react"

const UserList = () => {
const [search, setSearch ] = useState("");
const [activecheck, setActivecheck] = useState(false);
const [sortby, setSortby] = useState('default');

const filtered = filterByActive(USERS, activecheck);
return<>
    <h1>Listado de Usuarios</h1>
    <form className={styles["inputs-form"]}>
        <input type="text" 
        placeholder="Buscar..."
        value={search}
        onChange={setSearch} />
        <label>
            <input type="checkbox"
            checked={activecheck}
            onChange={() => setActivecheck(!activecheck)}/>
            Sólo activos
        </label>
        <select value={sortby} onChange={setSortby}>
            <option value="default">Por defecto</option>
            <option value="by name">Por nombre</option>
        </select>
    </form>
    <div>
         {filtered.map(user => 
            <UserCard key={v4()} {...user} />
            )}
</div>
    </>
}
const filterByActive = (users, activecheck) => {
    return activecheck ? users.filter((user) => user.active) : users;
};

const filterBySearch = (users, search) => {
    return users.filter((user) =>
      user.name.toLowerCase().includes(search.toLowerCase())
    );
};

const sortUsers = (users, sortby) => {
    if (sortby === "by name") {
      return [...users].sort((a, b) => a.name.localeCompare(b.name));
    }
    return users;
  };

export default UserList