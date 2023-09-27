import { Link } from "react-router-dom";

const ErrorPage = () => {
    return (
        <div className="text-center mt-5">
            <h2 className="text-4xl font-bold mb-3">Oops!</h2>
            <Link className="text-3xl border px-2 border-pink-500 rounded">Go Back Home 🥰</Link>
            <img className="w-96 text-center m-auto mt-3" src="https://i.ibb.co/DD0XTcK/404-error.jpg" alt="404" />
        </div>
    );
};

export default ErrorPage;