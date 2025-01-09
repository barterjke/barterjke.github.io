import { Geist, Geist_Mono, JetBrains_Mono, Roboto, Berkshire_Swash } from "next/font/google";
import "./globals.css";
import Link from "next/link";
import { cn } from "@/lib/utils";

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

export const titleFont = Berkshire_Swash({
    variable: "--font-title",
    subsets: ['latin'],
    weight: '400',
})

export const metadata = {
    title: "My resume",
};

function Header({ links }) {
    return (
        <header className={cn("text-white tracking-wide text-3xl", titleFont.className)}>
            <div className={"max-w-7xl mx-auto px-4 sm:px-6 lg:px-8"} >
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
    )
}

export default function RootLayout({ children }) {
    const links = [{
        name: "articles",
        url: "/",
        icon: <FileText />
    },
    {
        name: "about me",
        url: "/about",
        icon: <UserRound />
    }];
    console.log(geistSans.variable, cn(geistSans.variable, geistMono.variable, titleFont.variable, "bg-slate-700 antialiased"))
    return (
        <html lang="en">
            <body
                className={`${titleFont.variable} bg-current antialiased`}
            >
                <Header links={links} />
                {children}
            </body>
        </html>
    );
}
