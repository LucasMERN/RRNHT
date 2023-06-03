import { Metadata } from 'next';
import Image from "next/image";
import '../../styles/globals.css'

export const metadata: Metadata = {
    title: "Regal Rexnord New Hire Training | Course Dashboard",
    description: "Check your statistics or start a training course",
}

export default function DashboardRootLayout({children,}: {children: React.ReactNode;}) {
    return(
        <html lang='en'>
            <head />
                <body className="h-screen w-screen">
                    {children}
                </body>
        </html>
    );
}