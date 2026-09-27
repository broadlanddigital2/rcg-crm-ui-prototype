import type { ReactNode } from "react";

export type IconName =
  | "home" | "leads" | "customers" | "suppliers" | "tasks" | "calendar"
  | "messages" | "reports" | "settings" | "search" | "bell" | "plus"
  | "reply" | "note" | "phone" | "trash" | "tag" | "mail";

const paths: Record<IconName, ReactNode> = {
  home: <><path d="M3 10.5 12 3l9 7.5"/><path d="M5 9.5V21h14V9.5"/><path d="M9 21v-6h6v6"/></>,
  leads: <><circle cx="9" cy="8" r="3"/><path d="M3.5 20c.8-4.4 3-6.5 5.5-6.5s4.7 2.1 5.5 6.5"/><path d="M16 7h5M18.5 4.5v5"/></>,
  customers: <><circle cx="8" cy="8" r="3"/><circle cx="17" cy="9" r="2.5"/><path d="M2.5 20c.7-4.2 2.8-6.3 5.5-6.3 2.6 0 4.6 2 5.4 6.3"/><path d="M13.5 14.5c3.4-.4 5.8 1.4 7 5.5"/></>,
  suppliers: <><path d="M4 21V7l8-4 8 4v14"/><path d="M8 21v-6h8v6M8 10h.01M12 10h.01M16 10h.01"/></>,
  tasks: <><rect x="4" y="4" width="16" height="16" rx="2"/><path d="m8 12 2.2 2.2L16.5 8"/></>,
  calendar: <><rect x="3" y="5" width="18" height="16" rx="2"/><path d="M8 3v4M16 3v4M3 10h18"/></>,
  messages: <path d="M4 5h16v11H9l-5 4V5Z"/>,
  reports: <path d="M5 20V11M10 20V6M15 20v-8M20 20V3"/>,
  settings: <><circle cx="12" cy="12" r="3"/><path d="M19.4 15a1.7 1.7 0 0 0 .3 1.9l.1.1-2.8 2.8-.1-.1a1.7 1.7 0 0 0-1.9-.3 1.7 1.7 0 0 0-1 1.5V21h-4v-.1a1.7 1.7 0 0 0-1-1.5 1.7 1.7 0 0 0-1.9.3l-.1.1L4.2 17l.1-.1a1.7 1.7 0 0 0 .3-1.9 1.7 1.7 0 0 0-1.5-1H3v-4h.1a1.7 1.7 0 0 0 1.5-1 1.7 1.7 0 0 0-.3-1.9L4.2 7 7 4.2l.1.1a1.7 1.7 0 0 0 1.9.3 1.7 1.7 0 0 0 1-1.5V3h4v.1a1.7 1.7 0 0 0 1 1.5 1.7 1.7 0 0 0 1.9-.3l.1-.1L19.8 7l-.1.1a1.7 1.7 0 0 0-.3 1.9 1.7 1.7 0 0 0 1.5 1h.1v4h-.1a1.7 1.7 0 0 0-1.5 1Z"/></>,
  search: <><circle cx="11" cy="11" r="7"/><path d="m20 20-4-4"/></>,
  bell: <><path d="M6 9a6 6 0 0 1 12 0c0 7 3 7 3 7H3s3 0 3-7"/><path d="M10 20h4"/></>,
  plus: <path d="M12 5v14M5 12h14"/>,
  reply: <><path d="m10 8-5 4 5 4"/><path d="M5 12h8c4 0 6 2 6 6"/></>,
  note: <><path d="M5 3h11l3 3v15H5z"/><path d="M16 3v4h4M8 11h8M8 15h8"/></>,
  phone: <path d="M7 3 4 5c-.7.5-.8 1.4-.5 2.2 2.8 6.5 6.5 10.2 13 13 .8.3 1.7.2 2.2-.5l2-3-5-3-2 2c-2.3-1.1-4.1-2.9-5.2-5.2l2-2z"/>,
  trash: <><path d="M4 7h16M9 7V4h6v3M7 7l1 14h8l1-14"/></>,
  tag: <><path d="M20 13 13 20 4 11V4h7z"/><circle cx="8.5" cy="8.5" r="1"/></>,
  mail: <><rect x="3" y="5" width="18" height="14" rx="2"/><path d="m4 7 8 6 8-6"/></>
};

export function Icon({ name, size = 18 }: { name: IconName; size?: number }) {
  return <svg width={size} height={size} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">{paths[name]}</svg>;
}
