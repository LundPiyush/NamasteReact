import { useEffect, useState } from "react";

const Profile = (props) => {
  const [count, setCount] = useState(0);
  const [coun2] = useState(1);

  useEffect(() => {
    const timer = setInterval(() => {
      console.log("React");
    }, 1000);

    return () => {
      clearInterval(timer);
      console.log("This will be called after we leave the page");
    };
  }, []);

  return (
    <div>
      <h3>Functional Component Profile page: {props.name}</h3>
      <h5>count : {count}</h5>
      <br></br>
      <button onClick={() => setCount(1)}>Increase count to 1</button>
    </div>
  );
};

export default Profile;
