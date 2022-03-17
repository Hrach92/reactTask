import React, { useEffect, useState } from "react";
import app from '../App.module.css'
function Exercise9() {
  const [randomUsers, setRandomUsers] = useState([])
  const [users, setUsers] = useState([])
  useEffect(() => {
    fetch('https://random-data-api.com/api/users/random_user?size=10')
      .then(res => res.json())
      .then(res => {
        setUsers(res)
      })
  }, [randomUsers])
  return (
    <div>
      <div><button className={app.btn} onClick={() => setRandomUsers(users)}>Fretch Random</button></div>
      <div className={app.userCard}>
        {randomUsers.map(u => {
        return <div className={app.inner} key={u.id}>
          <div className={app.front}>
            <img src={u.avatar} className={app.userImg} />
          </div>
          <div className={app.back}>
            <div>{u.first_name} {u.last_name}</div>
            <div>city:{u.address.city}</div>
          </div>
        </div>
      })}
      </div>
    </div>
  );
}
export default Exercise9
