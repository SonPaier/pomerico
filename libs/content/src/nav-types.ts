export interface NavLink {
  label: string;
  href: string;
}

export interface NavGroup {
  label: string;
  href: string;
  children: NavLink[];
}

export type NavItem = NavLink | NavGroup;
