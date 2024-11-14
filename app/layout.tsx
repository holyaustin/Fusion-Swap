import type { Metadata } from "next";
import "./globals.css";
import WalletModal from "@/src/modals/wallet";
import Providers from "./providers";
import Layout from "@/src/components/layout";

export const metadata: Metadata = {
  title: "Fusion Swap",
  description: "Fusion Swap ",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body>
        <Providers>
          <Layout>
            {children}
          </Layout>
          <WalletModal />
        </Providers>
      </body>
    </html>
  );
}
