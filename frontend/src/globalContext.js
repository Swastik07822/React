import { createContext, useContext, useReducer, useEffect } from "react";
// import tempData from "./mockData.json";
import reducer from "./reducer";

const DataContext = createContext();

const initialState = {
    isLogin: false,
    isLoading: true,
    data: []
}

const useDataContext = () => {
    return useContext(DataContext);
}

const DataProvider = (props) => {
    const [mockData, dispatch] = useReducer(reducer, initialState);

    const fetchAPIData = async (url) => {
        dispatch({ type: "SET_LOADING" })
        // console.log(url);
        try {
            const res = await fetch(url);
            const data = await res.json();
            // console.log(data);

            dispatch({
                type: "GET_DATA",
                payload: data
            })
        } catch (error) {
            console.log(error);
        }
    }

    // removing blog
    const removeBlog = async (blogID) => {
        dispatch({ type: "SET_LOADING" })
        // console.log(url);
        try {
            await fetch(`${process.env.REACT_APP_BASE_URL}api/blog/${blogID}`, { method: 'DELETE' });
            // console.log(data);
            fetchAPIData(`${process.env.REACT_APP_BASE_URL}api/blog`);
        } catch (error) {
            console.log(error);
        }
    }

    // creating blog
    const createBlog = async (blog) => {
        dispatch({ type: "SET_LOADING" })
        // console.log(url);
        try {
            await fetch(`${process.env.REACT_APP_BASE_URL}api/blog/create`, {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json',
                },
                body: JSON.stringify(blog),
            });
            // console.log(data);
            // fetchAPIData(`${process.env.REACT_APP_BASE_URL}api/blog`);

            // Redirect to the homepage
            window.location.href = '/';
        } catch (error) {
            console.log(error);
        }
    }

    // signup
    const signup = async (user) => {
        dispatch({ type: "SET_LOADING" })
        // console.log(url);
        try {
            await fetch(`${process.env.REACT_APP_BASE_URL}api/user/signup`, {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json',
                },
                body: JSON.stringify(user),
            });
            // console.log(data);
            // fetchAPIData(`${process.env.REACT_APP_BASE_URL}api/blog`);

            window.location.href = '/login';
        } catch (error) {
            console.log(error);
        }
    }

    // logging in
    const login = async (user) => {
        dispatch({ type: "SET_LOADING" })
        // console.log(url);
        try {
            await fetch(`${process.env.REACT_APP_BASE_URL}api/user/signin`, {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json',
                },
                body: JSON.stringify(user),
            });
            // console.log(data);
            // fetchAPIData(`${process.env.REACT_APP_BASE_URL}api/blog`);

            dispatch({ type: "LOGIN" });
            // console.log(mockData.isLogin);
            // window.location.reload();

        } catch (error) {
            console.log(error);
        }

    }

    // logging out
    const logout = async (user) => {
        dispatch({ type: "SET_LOADING" })
        dispatch({ type: "LOGOUT" });

        window.location.href = '/login';
    }

    // used this hook because I don't want dispatch to be running for an eternity
    useEffect(() => {
        fetchAPIData(`${process.env.REACT_APP_BASE_URL}api/blog`);
        // console.log("I worked");
    }, [mockData.data]);
    // console.log(mockData);

    return (
        <DataContext.Provider value={{ ...mockData, removeBlog, createBlog, signup, login, logout }}>
            {props.children}
        </DataContext.Provider>
    )
}

export { DataProvider, useDataContext };