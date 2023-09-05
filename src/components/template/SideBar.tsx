import React from 'react';
import Profile from "@/components/user/Profile";
import useAuth from "@/hooks/UseAuth";
import UserAvatar from "@/components/user/UserAvatar";

interface SideBarProps {
    imageUrl: string
    name: string
    logout: () => void
}

export default function SideBar(props: SideBarProps) {
    return (
        <div
            className={`fixed left-0 top-0 h-full w-64 bg-zinc-800 border-r-2 border-x-zinc-500 text-white flex flex-col justify-between`}>
            <div className={`p-4 border-b-2 border-y-zinc-500`}>
                <div className={`flex items-center gap-7`}>
                    <UserAvatar imageUrl={props.imageUrl}></UserAvatar>
                    <span className={`text-lg font-semibold`}>{props.name}</span>
                </div>
            </div>
            <div className={`p-4`}>
                <button
                    onClick={props.logout}
                    className={`w-full bg-red-600 text-white py-2 rounded hover:bg-red-700`}
                >
                    Exit
                </button>
            </div>
        </div>
    );
}
