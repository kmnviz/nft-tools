import Link from 'next/link';
import React, { useState } from "react";

const MENU_LIST = [
    { text: "Home", href: "/" },
    { text: "Upload", href: "/upload" },
    { text: "Login", href: "/login" },
    { text: "Register", href: "/register" },
];

export default function Navbar() {
    const [navActive, setNavActive] = useState(null);
    const [activeIdx, setActiveIdx] = useState(-1);

    return (
        <nav className={`nav`}>
            <div className={`${navActive ? "active" : ""} nav__menu-list`}>
            {MENU_LIST.map((menu, idx) => (
                <div
                    onClick={() => {
                        setActiveIdx(idx);
                        setNavActive(false);
                    }}
                    key={menu.text}
                >
                <Link href={menu.href} legacyBehavior>
                    <a className={`nav__link`}>{menu.text}</a>
                </Link>
                </div>
            ))}
            </div>
        </nav>
    )
}