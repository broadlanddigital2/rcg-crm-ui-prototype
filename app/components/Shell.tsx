import Link from "next/link";
import type { ReactNode } from "react";
import { Icon, type IconName } from "./Icon";

type NavKey = "home" | "leads" | "customers" | "suppliers";
type RailItem = [string, string, string, IconName];
type MenuItem = { label:string; href:string; count?:number; active?:boolean; level?:0|1; parent?:boolean };

const rail: RailItem[] = [
  ["home", "/dashboard", "Home", "home"],
  ["leads", "/leads", "Leads", "leads"],
  ["customers", "/customers", "Customers", "customers"],
  ["suppliers", "/suppliers", "Suppliers", "suppliers"],
  ["tasks", "#", "Tasks", "tasks"],
  ["calendar", "#", "Calendar", "calendar"],
  ["messages", "#", "Messages", "messages"],
  ["reports", "#", "Reports", "reports"],
  ["settings", "#", "Settings", "settings"]
];

const menus: Record<NavKey, { title: string; eyebrow: string; items: MenuItem[] }> = {
  home: {
    eyebrow: "WORKSPACE",
    title: "Home",
    items: [
      { label: "Overview", href: "/dashboard", active: true },
      { label: "My Tasks", href: "#", count: 3 },
      { label: "Recent Activity", href: "#" },
      { label: "Calendar", href: "#" }
    ]
  },
  leads: {
    eyebrow: "SALES & ENQUIRIES",
    title: "Leads",
    items: [
      { label: "Race Car Graphics", href: "/leads", count: 6, active: true, parent: true, level: 0 },
      { label: "Web Forms", href: "/leads", count: 6, level: 1 },
      { label: "Auto Opulence", href: "/leads", count: 5, parent: true, level: 0 },
      { label: "Web Forms", href: "/leads", count: 5, level: 1 }
    ]
  },
  customers: {
    eyebrow: "CRM",
    title: "Customers",
    items: [
      { label: "All Customers", href: "/customers", count: 24, active: true },
      { label: "Add Customer", href: "#" },
      { label: "Trade Customers", href: "#", count: 8 },
      { label: "Retail Customers", href: "#", count: 16 },
      { label: "Recently Updated", href: "#" }
    ]
  },
  suppliers: {
    eyebrow: "CRM",
    title: "Suppliers",
    items: [
      { label: "All Suppliers", href: "/suppliers", count: 6, active: true },
      { label: "Add Supplier", href: "#" },
      { label: "Vinyl & Materials", href: "#", count: 3 },
      { label: "Services", href: "#", count: 2 },
      { label: "Other", href: "#", count: 1 }
    ]
  }
};

export function Shell({ active, children, action }: { active: NavKey; children: ReactNode; action?: ReactNode }) {
  const menu = menus[active];
  return <main className="appShell">
    <aside className="primaryRail">
      <div className="railBrand"><img src="/rcg-logo-email.png" alt="Race Car Graphics"/></div>
      <nav className="railWidgets">
        {rail.map(([key, href, label, icon]) => <Link className={active === key ? "railWidget active" : "railWidget"} href={href} key={key}>
          <span className="railIcon"><Icon name={icon} size={25}/>{key === "leads" && <b>11</b>}</span>
          <span>{label}</span>
        </Link>)}
      </nav>
      <div className="railProfile"><span className="avatar pale">JR</span><small>Admin</small></div>
    </aside>

    <aside className="secondaryNav">
      <div className="secondaryHeader">
        <span>{menu.eyebrow}</span>
        <h2>{menu.title}</h2>
      </div>
      <nav className="secondaryMenu">
        {menu.items.map((item,i)=><Link href={item.href} className={[
          "secondaryItem",
          item.active ? "active" : "",
          item.parent ? "parent" : "",
          item.level === 1 ? "sub" : ""
        ].filter(Boolean).join(" ")} key={item.label+i}>
          <span>{item.label}</span>{typeof item.count==="number" && <b>{item.count}</b>}
        </Link>)}
      </nav>
      <div className="secondaryFoot">
        <strong>Race Car Graphics CRM</strong>
        <span>Design prototype</span>
      </div>
    </aside>

    <section className="workspace">
      <header className="topbar">
        <div className="globalSearch"><Icon name="search" size={18}/><input placeholder="Search leads, customers, suppliers..."/></div>
        <div className="topActions">{action}<button className="iconButton"><Icon name="bell"/><i/></button><span className="avatar dark">JR</span></div>
      </header>
      {children}
    </section>
  </main>;
}

export function PrimaryButton({ children }: { children: ReactNode }) {
  return <button className="primaryButton"><Icon name="plus" size={18}/>{children}</button>;
}
