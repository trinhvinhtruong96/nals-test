import Detail from "../containers/Detail";
import Home from "../containers/Home/Home";

const pathRoute = {
    home: "/",
    detail: "/detail",
};

const route = [
    {
        path: pathRoute.home,
        exact: true,
        main: () => <Home />
    },
    {
        path: pathRoute.detail,
        exact: true,
        main: () => <Detail />
    },
]

export { pathRoute, route };

