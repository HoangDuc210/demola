import React from "react";

const News = React.lazy(() => import("./admin/components/news/DNews"));
const ListNews = React.lazy(() => import("./admin/components/news/ListNews"));
const AddNews = React.lazy(() => import("./admin/components/news/AddNews/AddNews"));
const EditNews = React.lazy(() => import("./admin/components/news/EditNews/EditNews"));

const NewsCategories = React.lazy(() => import("./admin/components/news/DNews"));
const ListNewsCategories = React.lazy(() => import("./admin/components/news_categories/NewsCategories"));
const AddNewsCategories = React.lazy(() => import("./admin/components/news_categories/AddNewsCategory"));

const Test = React.lazy(() => import("./admin/components/news/Excel/ImportExcel"));


const routesAdmin = [
    { path: "/admin/test", exact: true, name: "Danh sách tin tức", component: Test },
    { path: "/admin/news", exact: true, name: "Tin tức", component: News },
    { path: "/admin/list-news", exact: true, name: "Danh sách tin tức", component: ListNews },
    { path: "/admin/news/add", exact: true, name: "Thêm tin tức", component: AddNews },
    { path: "/admin/news/edit/:slug", exact: true, name: "Sửa tin tức", component: EditNews },

    { path: "/admin/news_categories", exact: true, name: "Tin tức", component: NewsCategories },
    { path: "/admin/list-news_categories", exact: true, name: "Danh sách tin tức", component: ListNewsCategories },
    { path: "/admin/add/news_categories", exact: true, name: "Thêm tin tức", component: AddNewsCategories },
    // { path: "/admin/news/edit/news_categories:slug", exact: true, name: "Sửa tin tức", component: EditNewsCategories }

];

export default routesAdmin;
