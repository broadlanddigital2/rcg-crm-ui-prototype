import Link from "next/link";
import type { ReactNode } from "react";
import { Icon, type IconName } from "./Icon";

type NavKey = "home" | "leads" | "customers" | "suppliers";
type NavItem = [string, string, string, IconName];
const nav: NavItem[] = [
  ["home", "/dashboard", "Home", "home"], ["leads", "/leads", "Leads", "leads"],
  ["customers", "/customers", "Customers", "customers"], ["suppliers", "/suppliers", "Suppliers", "suppliers"],
  ["tasks", "#", "Tasks", "tasks"], ["calendar", "#", "Calendar", "calendar"], ["messages", "#", "Messages", "messages"],
  ["reports", "#", "Reports", "reports"], ["settings", "#", "Settings", "settings"]
];

export function Shell({ active, children, action }: { active: NavKey; children: ReactNode; action?: ReactNode }) {
  return <main className="appShell">
    <aside className="sidebar">
      <div className="brand"><img src="/rcg-logo-email.png" alt="Race Car Graphics"/></div>
      <nav className="navList">{nav.map(([key, href, label, icon]) => <Link className={active === key ? "navItem active" : "navItem"} href={href} key={key}><Icon name={icon}/><span>{label}</span>{key === "leads" && <b>11</b>}</Link>)}</nav>
      <div className="sidebarProfile"><span className="avatar pale">JR</span><div><strong>Justin Revell</strong><small>Admin</small></div></div>
    </aside>
    <section className="workspace"><header className="topbar"><div className="globalSearch"><Icon name="search" size={16}/><input placeholder="Search leads, customers, suppliers..."/></div><div className="topActions">{action}<button className="iconButton"><Icon name="bell"/><i/></button><span className="avatar dark">JR</span></div></header>{children}</section>
  </main>;
}
export function PrimaryButton({ children }: { children: ReactNode }) { return <button className="primaryButton"><Icon name="plus" size={17}/>{children}</button>; }
