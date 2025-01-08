import { Geist, Geist_Mono, JetBrains_Mono, Roboto } from "next/font/google";
import "./globals.css";
import Link from "next/link";

import { FileText, UserRound } from 'lucide-react'

const geistSans = Roboto({
    variable: "--font-geist-sans",
    subsets: ["latin"],
    weight: "400",
});

const geistMono = JetBrains_Mono({
    variable: "--font-jetbrains-mono",
    subsets: ["latin"],
});

export const metadata = {
    title: "My resume",
};

export default function RootLayout({ children }) {
    const links = [{
        name: "ARITCLES",
        url: "/",
        icon: <FileText />
    },
    {
        name: "ABOUT ME",
        url: "/about",
        icon: <UserRound />
    }];
    return (
        <html lang="en">
            <body
                className={`${geistSans.variable} ${geistMono.variable} bg-slate-700 antialiased `}
            >
                <header className="text-white font-mono tracking-wide text-lg">
                    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 ">
                        <div className="flex justify-center py-4">
                            <nav className="flex space-x-8">
                                {links.map((el, i) => (
                                    <Link key={i} href={el.url} className="flex items-center transition">
                                        {el.icon}
                                        <span className="ml-2">{el.name}</span>
                                    </Link>))}
                            </nav>
                        </div>
                    </div>
                </header>
                {children}
            </body>
        </html>
    );
}
