import NavigationalBar from "@/components/navbar/navigational-bar";
import Topbar from "@/components/navbar/top-bar";
import Providers from "@/providers/auth-provider";
import NextUIProviders from "@/providers/next-ui-provder";
import ReactQueryProvider from "@/providers/react-query";
import StoreProvider from "@/providers/redux";
import type { Metadata } from "next";
import { Bricolage_Grotesque } from "next/font/google";
import { Toaster } from "react-hot-toast";
import "./globals.css";
const BricolageGrotesque = Bricolage_Grotesque({
  variable: "--font-bricolage-grotesque",
  subsets: ["latin"],
  weight: "variable",
});

export const metadata: Metadata = {
  title: "Create Next App",
  description: "Generated by create next app",
};
export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      {/* <Script
        async
        strategy="afterInteractive"
        type="module"
        src="https://unpkg.com/@google/model-viewer@^2.1.1/dist/model-viewer.min.js"
      /> */}

      <body className={` ${BricolageGrotesque.className} antialiased dark `}>
        <Toaster />

        <NextUIProviders>
          <Providers>
            <StoreProvider>
              <ReactQueryProvider>
                <div className="h-screen min-h-screen overflow-hidden relative max-h-screen   w-full">
                  <div className="w-[200px] h-[100px] bg-overlay-secondary bg-[#69CCD5]  rounded-full right-[20%] absolute bottom-[-140px] -z-10 blur-[100px]  rotate-[-10deg]" />

                  <div className="grid-container w-full h-full">
                    <div className="main-body relative">
                      <div className="w-[176px] h-[334px] bg-overlay-primary bg-[#6A69D580] left-[45%]  rounded-full  absolute top-[5%] -z-10 blur-[100px]  rotate-[-10deg]" />
                      {children}
                    </div>
                    <div className="top-bar">
                      <Topbar />
                    </div>
                    <div className="navigation ">
                      <NavigationalBar />
                    </div>
                  </div>
                </div>
              </ReactQueryProvider>
            </StoreProvider>
          </Providers>
        </NextUIProviders>
      </body>
    </html>
  );
}
