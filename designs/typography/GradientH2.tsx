"use client";

interface GradientH2Props {
    firstText: string;
    secondText: string;
}

export default function GradientH2({ firstText, secondText }: GradientH2Props) {
    const letters = secondText.split('');

    return (
        <>
            <style jsx>
                {`
                    .gradient-text-container {
                        display: inline-block;
                    }
                    
                    .gradient-stroke-letter {
                        -webkit-text-stroke: 1px #F54A00;
                        color: transparent;
                        transition: all 0.3s ease;
                        display: inline-block;
                    }
                    
                    .gradient-text-container:hover .gradient-stroke-letter {
                        -webkit-text-stroke: 0px;
                        color: #F54A00;
                    }
                `}
            </style>
            <h2 className="text-5xl lg:text-8xl font-extrabold text-white uppercase leading-tight tracking-tight mb-4">
                {firstText}{" "}
                <span className="gradient-text-container cursor-pointer">
                    {letters.map((letter, index) => (
                        <span
                            key={`${secondText}-${index}-${letter}`}
                            className="gradient-stroke-letter"
                            style={{
                                transitionDelay: `${index * 0.11}s`
                            }}
                        >
                            {letter === ' ' ? '\u00A0' : letter}
                        </span>
                    ))}
                </span>
            </h2>
        </>
    );
}