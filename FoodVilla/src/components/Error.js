import { useRouteError } from "react-router-dom";

const Error = () => {
  const err = useRouteError();
  return (
    <div>
      <h1>Opps</h1>
      <br />
      <h3>Error! Something went wrong</h3>
      <br />
      <h2>{err.status + ":" + err.statusText}</h2>
    </div>
  );
};
export default Error;
