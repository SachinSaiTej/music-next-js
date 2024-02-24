"use client";
import React, { useState } from "react";
import { HoveredLink, Menu, MenuItem, ProductItem } from "@/components/ui/navbar-menu";
import { cn } from "@/utils/cn";
import Link from "next/link";
// import { Resend } from 'resend';


function NavBar({ className }: { className?: string }) {
    const [active, setActive] = useState<string | null>(null);

    // const resend = new Resend('re_EdgBJEv3_7VMQy1dBoGj15UHmYALQeqoA');

    // let i = 0;

    // const sendEmail = () => {
    //     resend.emails.send({
    //         from: 'onboarding@resend.dev',
    //         to: 'saitejakm2001@gmail.com',
    //         subject: 'Hello World',
    //         html: `<p>Congrats on sending your <strong>email no ${i++}</strong>!</p>`
    //     });
    // }

    return (
        <div className={cn("fixed top-10 inset-x-0 max-w-2xl mx-auto z-50", className)}>
            <Menu setActive={setActive}>
                <Link href={"/"}>
                    <MenuItem setActive={setActive} active={active} item="Home">
                    </MenuItem>
                </Link>
                <MenuItem setActive={setActive} active={active} item="Our Courses">
                    <div className="flex space-y-4 flex-col text-sm">
                        <HoveredLink href="/courses"> All Courses </HoveredLink>
                        <HoveredLink href="/courses"> Basic Music Theory </HoveredLink>
                        <HoveredLink href="/courses"> Advanced Composition </HoveredLink>
                        <HoveredLink href="/courses"> Song-writing </HoveredLink>
                        <HoveredLink href="/courses"> Music Production </HoveredLink>
                    </div>
                </MenuItem>
                <Link href={"/courses"}>
                    <MenuItem setActive={setActive} active={active} item="Contact Us" >
                        {/* <button onClick={sendEmail}>Contact Us</button> {i} */}
                    </MenuItem>
                </Link>
            </Menu>
        </div>
    );
}

export default NavBar;
