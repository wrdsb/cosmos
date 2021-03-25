interface Menu {
    items: MenuItem[];
}

interface MenuItem {
    menuID: string,
    menuTitle: string,
    links: MenuLink[];
}

interface MenuLink {
    linkTitle: string;
    routerLink: string;
    icon: string;
}

export { Menu, MenuItem, MenuLink }