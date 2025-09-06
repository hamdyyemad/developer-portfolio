import { JSX } from "react";

import DotNetIcon from "@/designs/icons/tools/DotNetIcon";
import NodeJsIcon from "@/designs/icons/tools/NodeJsIcon";
import ReactJsIcon from "@/designs/icons/tools/ReactJsIcon";
import SqlServerIcon from "@/designs/icons/tools/SqlServerIcon";
import Html5Icon from "@/designs/icons/tools/Html5Icon";
import Css3Icon from "@/designs/icons/tools/Css3Icon";
import JavaScriptIcon from "@/designs/icons/tools/JavaScriptIcon";
import MongoDBIcon from "@/designs/icons/tools/MongoDBIcon";

export interface Tool {
    id: number;
    name: string;
    gradient: string;
    icon: JSX.Element;
    textColor: string;
}

export const tools: Tool[] = [
    {
        id: 1,
        name: ".NET",
        gradient: "from-blue-700 to-blue-400",
        icon: <DotNetIcon />,
        textColor: "text-white"
    },
    {
        id: 2,
        name: "Node.js",
        gradient: "from-green-600 to-lime-400",
        icon: <NodeJsIcon />,
        textColor: "text-white"
    },
    {
        id: 3,
        name: "React.js",
        gradient: "from-cyan-500 to-blue-300",
        icon: <ReactJsIcon />,
        textColor: "text-white"
    },
    {
        id: 4,
        name: "SQL Server",
        gradient: "from-red-700 to-pink-400",
        icon: <SqlServerIcon />,
        textColor: "text-white"
    },
    {
        id: 5,
        name: "HTML5",
        gradient: "from-orange-500 to-yellow-400",
        icon: <Html5Icon />,
        textColor: "text-white"
    },
    {
        id: 6,
        name: "CSS3",
        gradient: "from-blue-500 to-blue-300",
        icon: <Css3Icon />,
        textColor: "text-white"
    },
    {
        id: 7,
        name: "JavaScript",
        gradient: "from-yellow-400 to-yellow-200",
        icon: <JavaScriptIcon />,
        textColor: "text-black"
    },
    {
        id: 8,
        name: "MongoDB",
        gradient: "from-green-800 to-green-400",
        icon: <MongoDBIcon />,
        textColor: "text-white"
    }
];