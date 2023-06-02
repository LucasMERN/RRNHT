import { Metadata } from 'next';
import '../../styles/globals.css'

export const metadata: Metadata = {
    title: "Regal Rexnord New Hire Training | Authorization Forms",
    description: "Register or Login to Regal Rexnord's 'New Hire Training Portal' to access the course dashboard",
}

export default function AuthRootLayout({children,}: {children: React.ReactNode;}) {
    return(
        <html lang='en'>
            <head />
                <body className="h-screen w-screen p-6 bg-auth bg-no-repeat bg-cover backdrop-contrast-150">
                    <section className="w-full h-full flex flex-wrap items-center justify-center">{children}</section>
                </body>
        </html>
    );
}