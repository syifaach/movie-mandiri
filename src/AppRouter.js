import SideBar from "./pages/sidebar/SideBar"
import MovieInsert from "./pages/movie/MovieInsert"
import MovieUpdate from "./pages/movie/MovieUpdate"
import MovieList from "./pages/movie/MovieList"

export let routes = [
    {
        path: "/",
        element: <SideBar/>,
        children: [
            {
                path: "/movie/insert",
                element: <MovieInsert/>
            },
            {
                path: "/movie/update/:id",
                element: <MovieUpdate/>
            },
            {
                index: true,
                path: "/movie/list",
                element: <MovieList/>
            }
        ]
    }
]