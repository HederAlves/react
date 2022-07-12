
import {useEffect, useState} from "react";
import api from "../../service/api";

export const Users = () => {

  const [users, setUsers] = useState([])

  useEffect(() => {
    api.get("users").then(({data}) => {
      setUsers(data)
    } )
    console.log(users);
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);
  
  return (
    <div>
      <h1>oi</h1>
    </div>
  );
};
