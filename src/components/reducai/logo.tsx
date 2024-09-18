import { twMerge } from "tailwind-merge";

export interface LogoProps extends React.HTMLAttributes<HTMLDivElement> {
    to: string
}

export default function Logo({ to, ...props }: LogoProps) {
    return (
        <div className={twMerge("text-2xl font-medium overflow-hidden text-white", props.className)} role="button">
            <a href={to} className="flex">
                <div className="aspect-square w-auto px-2 mr-1 text-center delay-300 animate-[slide-down_1s_ease-in-out_forwards] font-['Outfit'] rounded-lg bg-transparent border-white border-2">
                    <span>R</span>
                </div>
                <span>educai</span>
            </a>
        </div>
    )
}