import "./globals.css";
import Sidebar from "@/components/Sidebar";

export const metadata = {
  title: "ChatGPT Messenger",
  description: "Try to chat with a clone of chatGPT",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body>
        <div className="flex">
          {/*SideBar*/}
          <div className="bg-[#202123] max-w-xs h-screen overflow-y-auto md:min-w-[20rem]">
            <Sidebar />
          </div>

          {/*ClientProvider - Notification*/}
          <div className="bg-[#343541] flex-1">{children}</div>
        </div>
      </body>
    </html>
  );
}
