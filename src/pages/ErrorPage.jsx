import { useRouteError } from "react-router-dom";

const ErrorPage = () => {
    const error = useRouteError();
    console.log(error);

    return (
        <div id="errorPage">
            <p>Is it the Dacia Sandero?!</p>
            <p>...No, it&apos;s &quot;{error.statusText || error.message}&quot; </p>
        </div>
    )
}

export default ErrorPage;