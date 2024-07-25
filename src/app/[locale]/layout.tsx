import type { Metadata } from "next";
import "./globals.css";
import { SpeedInsights } from "@vercel/speed-insights/next";
import { Analytics } from "@vercel/analytics/react";
import { GlobalProvider } from "@/components/context/ContextDashboard";
import WsProvider from "./providerWs";
import { NextIntlClientProvider } from "next-intl";
import { getMessages } from "next-intl/server";

export const metadata: Metadata = {
  title: "TodoEnBici",
  description: "development by TripCode",
};

export default async function RootLayout({
  children,
  params: { locale },
}: {
  children: React.ReactNode;
  params: { locale: string };
}) {
  const messages = await getMessages();

  return (
    <html lang={locale}>
      <SpeedInsights />
      <Analytics />
      <WsProvider>
        <NextIntlClientProvider messages={messages}>
          <GlobalProvider>
            <body>{children}</body>
          </GlobalProvider>
        </NextIntlClientProvider>
      </WsProvider>
    </html>
  );
}
