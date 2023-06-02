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
                    <header className='bg-header bg-no-repeat bg-cover p-6 border-b-2 border-blue-700'>
                    <Image
                    src="/assets/regal-logo.webp"
                    alt="Rexnord logo"
                    width={400}
                    height={200}
                    />
                    </header>
                    <section className="flex justify-between w-full">{children}</section>
                </body>
        </html>
    );
}