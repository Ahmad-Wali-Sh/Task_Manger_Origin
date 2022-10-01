import React from "react";

export default function UserService() {
  const [user, setUser] = React.useState({});
  React.useEffect(() => {
    axios
      .get("http://192.168.60.55:8000/api/user/me/", {})
      .then((res) => setUser(res.data));
    console.log(user);
  }, []);

  return <></>;
}
