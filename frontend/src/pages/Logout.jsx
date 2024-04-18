import { useDataContext } from "../globalContext";

const Logout = () => {
    const { isLoading } = useDataContext();

    if (isLoading) {
        return <div>
            <h1>LOADING........</h1>
        </div>
    }

    return <div>
        <h1>Logged out</h1>
    </div>

}

export default Logout;