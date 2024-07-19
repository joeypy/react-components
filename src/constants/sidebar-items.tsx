import { SideNavItem } from "@/types";
import { Icon } from "@iconify/react";

export const SIDENAV_ITEMS: SideNavItem[] = [
  {
    title: "Dashboard",
    path: "/",
    icon: <Icon icon="lucide:layout-dashboard" className="h-6 w-6" />,
  },
  {
    title: "Input Upload",
    path: "/input-upload",
    icon: <Icon icon="lucide:cloud-upload" className="h-6 w-6" />,
  },
  // {
  //   title: "Perfil",
  //   path: "/profile",
  //   icon: <Icon icon="lucide:user" className="h-6 w-6" />,
  // },
  // {
  //   title: "Publicaciones",
  //   path: "/posts",
  //   icon: <Icon icon="lucide:scroll" className="h-6 w-6" />,
  // },
  // {
  //   title: "Métricas",
  //   path: "/metrics",
  //   icon: <Icon icon="lucide:bar-chart-big" className="h-6 w-6" />,
  // },
  // {
  //   title: "Tienda",
  //   path: "/store",
  //   icon: <Icon icon="lucide:store" className="h-6 w-6" />,
  //   submenu: true,
  //   subMenuItems: [
  //     {
  //       title: "Productos",
  //       path: "/store/products",
  //       submenu: true,
  //       subMenuItems: [
  //         {
  //           title: "Lista producto",
  //           path: "/store/products/list",
  //         },
  //         {
  //           title: "Nuevo producto",
  //           path: "/store/products/new",
  //         },
  //         {
  //           title: "Editar producto",
  //           path: "/store/products/edit/:id",
  //         },
  //       ],
  //     },
  //     {
  //       title: "Ordenes",
  //       path: "/store/orders",
  //       submenu: true,
  //       subMenuItems: [
  //         {
  //           title: "Lista ordenes",
  //           path: "/store/orders/list",
  //         },
  //       ],
  //     },
  //     {
  //       title: "Pagos",
  //       path: "/payment",
  //       submenu: true,
  //       subMenuItems: [
  //         {
  //           title: "Lista pagos",
  //           path: "/store/payment/list",
  //         },
  //       ],
  //     },
  //   ],
  // },
  // {
  //   title: "Inventario",
  //   path: "/inventory",
  //   icon: <Icon icon="lucide:package" className="h-6 w-6" />,
  // },
  // {
  //   title: "Reservaciones",
  //   path: "/reservations",
  //   icon: <Icon icon="lucide:calendar-days" className="h-6 w-6" />,
  // },
  // {
  //   title: "Chat",
  //   path: "/chat",
  //   icon: <Icon icon="lucide:messages-square" className="h-6 w-6" />,
  // },
  // {
  //   title: "Permisos",
  //   path: "/permissions",
  //   icon: <Icon icon="lucide:key-round" className="h-6 w-6" />,
  // },
  // {
  //   title: "Usuarios",
  //   path: "/users",
  //   icon: <Icon icon="lucide:users" className="h-6 w-6" />,
  // },

  // {
  //   title: "Configuraciones",
  //   path: "/settings",
  //   icon: <Icon icon="lucide:settings" className="h-6 w-6" />,
  //   submenu: true,
  //   subMenuItems: [
  //     { title: "Cuenta", path: "/settings/account" },
  //     { title: "Privacidad", path: "/settings/privacy" },
  //   ],
  // },
  // {
  //   title: "Reportes",
  //   path: "/reports",
  //   icon: <Icon icon="lucide:notepad-text" className="h-6 w-6" />,
  // },

  // {
  //   title: "Ayuda",
  //   path: "/help",
  //   icon: <Icon icon="lucide:help-circle" className="h-6 w-6" />,
  // },
];