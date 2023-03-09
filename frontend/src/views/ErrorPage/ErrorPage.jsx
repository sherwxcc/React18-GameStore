import { useRouteError } from "react-router";

function ErrorPage() {
  const error = useRouteError();
  console.error(error);

  return (
    <div id="error-page">
      <h1>Oops!</h1>
      <p>Sorry, an unexpected error has occured.</p>
      <p>
        <i>{error.status || error.message}</i>
      </p>
    </div>
  );
}

export default ErrorPage;