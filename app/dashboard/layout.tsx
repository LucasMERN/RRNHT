import AuthWrapper from '@/components/AuthWrapper';
import { Metadata } from 'next';
import '../../styles/global.css'

export const metadata: Metadata = {
    title: "Regal Rexnord New Hire Training | Course Dashboard",
    description: "Check your statistics or start a training course",
}

export default function DashboardRootLayout({children,}: {children: React.ReactNode;}) {
    return(
        <html lang='en'>
            <head />
                <body className="h-screen w-screen px-40 py-24 bg-auth bg-no-repeat bg-cover">
                    <AuthWrapper className="w-full h-full flex items-center justify-center">{children}</AuthWrapper>
                </body>
        </html>
    );
}