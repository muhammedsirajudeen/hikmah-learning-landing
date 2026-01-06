import Image from "next/image";

const steps = [
    {
        id: 1,
        title: "Takbir & Qiyam",
        description: "Stand upright facing the Qibla, make your intention (Niyyah) in your heart, and say 'Allahu Akbar' to begin the prayer.",
        image: "/first.png",
    },
    {
        id: 2,
        title: "Ruku (Bowing)",
        description: "Bow forward with your back straight, place your hands firmly on your knees, keep your head aligned with your back, and glorify Allah.",
        image: "/second.png",
    },
    {
        id: 3,
        title: "Sujud (Prostration)",
        description: "Prostrate with your forehead and nose on the ground, palms flat beside your head, knees on the floor, and toes pointing toward the Qibla.",
        image: "/third.png",
    },
    {
        id: 4,
        title: "Sitting Between Sujud (Jalsah)",
        description: "Sit upright after the first prostration with your left foot tucked under you and right foot upright, hands resting on your knees.",
        image: "/fourth.png",
    },
];


export function NamazInstructions() {
    return (
        <section id="courses" className="relative py-20 lg:py-28 overflow-hidden">
            {/* Background with subtle gradient */}
            <div className="absolute inset-0 bg-gradient-to-b from-background via-muted/30 to-background" />
            <div className="absolute inset-0 pattern-grid opacity-70" />

            <div className="container relative mx-auto px-4 sm:px-6 lg:px-8">
                {/* Section Header */}
                <div className="mb-16 text-center section-divider pt-8">
                    <span className="inline-block px-4 py-1.5 rounded-full bg-primary/10 text-primary text-sm font-semibold uppercase tracking-wide mb-4">
                        Step by Step Guide
                    </span>
                    <h2 className="text-3xl font-extrabold tracking-tight text-foreground sm:text-4xl lg:text-5xl">
                        Key Pillars of <span className="text-gradient">Namaz</span>
                    </h2>
                    <p className="mx-auto mt-4 max-w-2xl text-lg text-muted-foreground leading-relaxed">
                        A visual guide to perfecting your prayer with correct posture and movements.
                    </p>
                </div>

                {/* Cards Grid */}
                <div className="grid gap-6 md:grid-cols-2 lg:gap-8">
                    {steps.map((step, index) => (
                        <div
                            key={step.id}
                            className="group relative flex flex-col overflow-hidden rounded-2xl border border-border/50 bg-card shadow-sm card-hover animate-fade-in"
                            style={{ animationDelay: `${index * 100}ms` }}
                        >
                            {/* Image Container */}
                            <div className="relative aspect-[4/3] w-full overflow-hidden bg-gradient-to-br from-white to-gray-50 md:aspect-video">
                                <Image
                                    src={step.image}
                                    alt={step.title}
                                    fill
                                    className="object-contain p-4 transition-transform duration-500 group-hover:scale-105 md:p-6"
                                />

                                {/* Subtle overlay on hover */}
                                <div className="absolute inset-0 bg-gradient-to-t from-black/5 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />

                                {/* Wave divider */}
                                <div className="absolute bottom-0 left-0 right-0 h-12 w-full translate-y-px text-primary">
                                    <svg viewBox="0 0 1440 120" fill="currentColor" className="h-full w-full" preserveAspectRatio="none">
                                        <path d="M0,40 C240,80 480,100 720,80 C960,60 1200,20 1440,40 L1440,120 L0,120 Z" />
                                    </svg>
                                </div>
                            </div>

                            {/* Content */}
                            <div className="flex flex-1 items-center gap-4 bg-primary p-4 pt-3 text-primary-foreground sm:p-5 sm:pt-4">
                                {/* Step Number */}
                                <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-full bg-white/20 text-white font-bold text-lg backdrop-blur-sm border border-white/10 shadow-inner">
                                    {step.id}
                                </div>

                                <div className="flex-1 min-w-0">
                                    <h3 className="text-lg font-bold text-primary-foreground sm:text-xl truncate">
                                        {step.title}
                                    </h3>
                                    <p className="text-sm text-primary-foreground/80 line-clamp-2 mt-0.5 hidden sm:block">
                                        {step.description}
                                    </p>
                                </div>

                                {/* Arrow indicator */}
                                <div className="hidden sm:flex items-center justify-center w-8 h-8 rounded-full bg-white/10 group-hover:bg-white/20 transition-colors">
                                    <svg className="w-4 h-4 text-white group-hover:translate-x-0.5 transition-transform" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                                    </svg>
                                </div>
                            </div>
                        </div>
                    ))}
                </div>

                {/* CTA below cards */}
                <div className="mt-12 text-center animate-fade-in" style={{ animationDelay: '400ms' }}>
                    <p className="text-muted-foreground mb-4">Want to learn the complete prayer step by step?</p>
                    <a
                        href="https://wa.me/9562019132qiyam?text=I%20want%20to%20learn%20Namaz"
                        target="_blank"
                        rel="noopener noreferrer"
                        className="inline-flex items-center gap-2 px-6 py-3 rounded-full bg-primary text-primary-foreground font-semibold hover:bg-primary/90 transition-colors shadow-lg hover:shadow-xl"
                    >
                        <span>Join Our Namaz Course</span>
                        <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
                        </svg>
                    </a>
                </div>
            </div>
        </section>
    );
}
