import React from "react";

const ListNews = React.lazy(() => import("./admin/components/news/ListNews"));
const AddNews = React.lazy(() => import("./admin/components/news/AddNews/AddNews"));
const Test = React.lazy(() => import("./components/Home"));


const routesAdmin = [
    { path: "/admin/test", exact: true, name: "Danh sách tin tức", component: Test },
    { path: "/admin/danh-sach-bai-viet", exact: true, name: "Danh sách tin tức", component: ListNews },
    { path: "/admin/them-bai-viet", exact: true, name: "Thêm tin tức", component: AddNews }

];

export default routesAdmin;
