import { Link } from "react-router-dom";


const Error = () => {
    return (
        <div className="text-center h-screen">
            <img className="mx-auto h-[90%] w-full" src="https://media0.giphy.com/media/v1.Y2lkPTc5MGI3NjExY3EydWUwcTBna3Jsa2RvcHNmaWUzcjI4ZWY2dHhsZndmZzVwbXQ5MiZlcD12MV9naWZzX3NlYXJjaCZjdD1n/UHAYP0FxJOmFBuOiC2/200.webp" alt="" />
            <div> <Link to='/' className="btn btn-accent"> Home </Link> </div>
        </div>
    );
};

export default Error;