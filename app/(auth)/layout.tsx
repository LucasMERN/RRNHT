import AuthWrapper from '@/components/AuthWrapper';
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
                <body className="h-screen w-screen px-40 py-24 bg-auth bg-no-repeat bg-cover">
                    <AuthWrapper className="w-full h-full flex items-center justify-center">{children}</AuthWrapper>
                </body>
        </html>
    );
}