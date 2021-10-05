import React from "react";

const Home = React.lazy(() =>
    import ("./components/Home"));
const Employees = React.lazy(() =>
    import ("./components/Employee"));
const ListMusic = React.lazy(() =>
    import ("./components/musics/ListMusics/ListMusicComponent")
);
const AddMusic = React.lazy(() =>
    import ("./components/musics/AddMusic/AddMusicComponent")
);
const EditMusic = React.lazy(() =>
    import ("./components/musics/EditMusic/EditMusicComponent")
);

const routes = [
    { path: "/", exact: true, name: "Trang chủ", component: Home },
    {
        path: "/employees",
        exact: true,
        name: "Nhân viên",
        component: Employees
    },
    {
        path: "/musics",
        exact: true,
        name: "Danh sách bài hát",
        component: ListMusic
    },
    {
        path: "/add-music",
        exact: true,
        name: "Thêm bài hát",
        component: AddMusic
    },
    {
        path: "/edit-music/:id",
        exact: true,
        name: "Sửa bài hát",
        component: EditMusic
    }
];

export default routes;