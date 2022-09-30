import { HomePage, PhimPage, ChiTiet, TimKiem, TheLoai } from "../Views";

export const publicRoute = [
  { path: "/", component: <HomePage /> },
  { path: "/phim", component: <PhimPage /> },
  { path: "/phim/:slug", component: <ChiTiet /> },
  { path: "/timkiem/:slug", component: <TimKiem /> },
  { path: "/theloai/:slug", component: <TheLoai /> },

];

export const privateRoute = [];
