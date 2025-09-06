import { Tool } from "@/app/data/myTechs";

export default function PremiumToolCard({ tool }: { tool: Tool }) {
    return (
        <div
            key={tool.id}
            className={`relative rounded-xl bg-gradient-to-br ${tool.gradient} p-6 shadow-lg flex flex-col items-center justify-center min-h-[140px] overflow-hidden cursor-pointer transition-all duration-500 ease-out hover:scale-125 hover:shadow-[0_25px_50px_-12px_rgba(0,0,0,0.8)] hover:z-20 hover:-translate-y-2`}
        >
            <div className="z-10 mb-4 transition-transform duration-500 ease-out hover:scale-125 hover:rotate-6">
                {tool.icon}
            </div>
            <span className={`z-10 font-bold text-lg ${tool.textColor} transition-all duration-500 hover:scale-110`}>
                {tool.name}
            </span>
        </div>
    )
}