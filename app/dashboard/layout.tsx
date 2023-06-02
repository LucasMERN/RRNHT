import { Metadata } from 'next';
import '../../styles/globals.css'

export const metadata: Metadata = {
    title: "Regal Rexnord New Hire Training | Course Dashboard",
    description: "Check your statistics or start a training course",
}

export default function DashboardRootLayout({children,}: {children: React.ReactNode;}) {
    return(
        <html lang='en'>
            <head />
                <body className="h-screen w-screen p-6">
                    <section className="w-full h-full flex items-center justify-center">{children}</section>
                </body>
        </html>
    );
}