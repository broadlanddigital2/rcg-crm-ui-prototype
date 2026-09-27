import "./globals.css";

export const metadata = {
  title: "Race Car Graphics CRM UI Prototype",
  description: "Static design prototype for the RCG CRM admin interface"
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return <html lang="en"><body>{children}</body></html>;
}
