import WavePattern from '@/designs/patterns/WavePattern';
import WindowIcon from '@/designs/icons/WindowIcon';
import MountainPattern from '@/designs/patterns/MountainPattern';
import MonitorIcon from '@/designs/icons/MonitorIcon';

import { JSX } from "react";

export interface Feature {
    id: number;
    bgClass: string;
    pattern: JSX.Element;
    icon: JSX.Element;
    title: string;
    buttonClass: string;
    arrowColor: string;
    textColor: string;
}

export const features: Feature[] = [
    {
        id: 1,
        bgClass: "bg-gradient-to-br from-orange-500 to-orange-400",
        pattern: <WavePattern />,
        icon: <WindowIcon />,
        title: "FULL STACK<br />SOLUTIONS,<br />ARCHITECTURE",
        buttonClass: "border-white/40 bg-white/10 hover:bg-white/20",
        arrowColor: "#fff",
        textColor: 'text-[#fff]',
    },
    {
        id: 2,
        bgClass: "bg-lime-300",
        pattern: <MountainPattern />,
        icon: <MonitorIcon />,
        title: "REACT.JS,<br />NODE.JS,<br />.NET CORE",
        buttonClass: "border-black/30 bg-black/10 hover:bg-black/20",
        arrowColor: "#222",
        textColor: 'text-[#131312]'
    }
];