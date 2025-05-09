import { USERS } from "../../constants/users";
import UserCard from "../user-card/usercard";
import styles from "./userlist.module.css";
import { useState } from "react";

const UserList = () => {
  const [search, setSearch] = useState("");
  const [activecheck, setActivecheck] = useState(false);
  const [sortby, setSortby] = useState("default");

  const filterActiveUser = filterByActive(activecheck);
  const filterBySearchResult = filterBySearch(filterActiveUser, search);
  const filtered = sortbyUsersName(filterBySearchResult, sortby);
  return (
    <>
      <h1>Listado de Usuarios</h1>
      <form className={styles["inputs-form"]}>
        <input
          type="text"
          placeholder="Buscar..."
          value={search}
          onChange={search => setSearch(search.target.value)}
        />
        <label>
          <input
            type="checkbox"
            checked={activecheck}
            onChange={() => setActivecheck(!activecheck)}
          />
          Sólo activos
        </label>
        <select value={sortby} onChange={e => setSortby(e.target.value)}>
          <option value="default">Por defecto</option>
          <option value="by name">Por nombre</option>
        </select>
      </form>
      <div>
        {filtered.map(user => (
          <UserCard key={user.userId} {...user} />
        ))}
      </div>
    </>
  );
};
const filterByActive = activecheck => {
  return activecheck ? USERS.filter(user => user.active) : USERS;
};

const filterBySearch = (filterActiveUser, search) => {
  console.log(search);
  const filtered = search
    ? filterActiveUser.filter(user =>
        user.name.toLowerCase().includes(search.toLowerCase())
      )
    : filterActiveUser;
  return filtered;
};

const sortbyUsersName = (filterBySearchResult, sortby) => {
  return sortby === "by name"
    ? [...filterBySearchResult].sort((a, b) => a.name.localeCompare(b.name))
    : filterBySearchResult;
};

export default UserList;
