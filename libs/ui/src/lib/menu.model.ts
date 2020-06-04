interface Menu {
    links: MenuLink[];
}

interface MenuLink {
    link: string;
    name: string;
}

export { Menu, MenuLink }