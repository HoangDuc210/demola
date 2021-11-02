import React from "react";

const Home = React.lazy(() => import("./web/components/Index"));
const DetailBlog = React.lazy(() => import("./web/components/blogs/DetailBlog"));

const PageError = React.lazy(() => import("./web/containers/404.jsx"));

const routes = [

    { path: "/", exact: true, name: "Trang chủ", component: Home },
    { path: "/blogs/:slug", exact: true, name: "Trang chủ", component: DetailBlog },

    { path: "/404", exact: true, name: "Page error", component: PageError }


];

export default routes;
