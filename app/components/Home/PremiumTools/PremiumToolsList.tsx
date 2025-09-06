import { tools } from "@/app/data/myTechs";
import PremiumToolCard from "./PremiumToolCard";
export default function PremiumToolsList() {
    return (
        <>
            {tools.map((tool) => {
                return (
                    <PremiumToolCard key={tool.id} tool={tool} />
                );
            })}
        </>
    )
}