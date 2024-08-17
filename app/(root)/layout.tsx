import Sidebar from "@/components/Sidebar";
import React, { Children } from "react";

export default function RootLayout(
    {children}: Readonly<{
        children: React.ReactNode;}>) 
    {
    return (
    <main className="flex h-full w-full font-inter">
        <Sidebar/>
        {children}
    </main>
    );
}