import Image from "next/image";
import { Button } from "@/components/ui/button";

export function ArabicMasterclass() {
    return (
        <section className="relative py-20 lg:py-28 overflow-hidden">
            {/* Background with subtle gradient */}
            <div className="absolute inset-0 bg-gradient-to-b from-background via-primary/5 to-background" />
            <div className="absolute inset-0 pattern-grid opacity-50" />

            <div className="container relative mx-auto px-4 sm:px-6 lg:px-8">
                <div className="grid gap-12 lg:grid-cols-2 lg:items-center lg:gap-16">
                    {/* Image Container - Rounded Circle */}
                    <div className="relative mx-auto w-full max-w-[500px] lg:max-w-none animate-fade-in">
                        <div className="relative aspect-square w-full max-w-[550px] mx-auto">
                            {/* Decorative rings */}
                            <div className="absolute inset-0 rounded-full border-4 border-primary/20 animate-pulse" />
                            <div className="absolute inset-3 rounded-full border-2 border-secondary/30" />

                            {/* Main image container */}
                            <div className="absolute inset-4 rounded-full overflow-hidden shadow-2xl shadow-primary/20 bg-gradient-to-br from-primary/10 to-secondary/10">
                                <Image
                                    src="/arabic_letters.png"
                                    alt="Arabic Letter Master Class"
                                    fill
                                    className="object-cover hover:scale-105 transition-transform duration-500"
                                />
                            </div>

                            {/* Floating accent elements */}
                            <div className="absolute -top-4 -right-4 w-20 h-20 bg-secondary/20 rounded-full blur-xl" />
                            <div className="absolute -bottom-4 -left-4 w-24 h-24 bg-primary/20 rounded-full blur-xl" />
                        </div>
                    </div>

                    {/* Content */}
                    <div className="flex flex-col items-center text-center lg:items-start lg:text-left animate-fade-in">
                        {/* Badge */}
                        <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-secondary/20 text-primary text-sm font-semibold uppercase tracking-wide mb-6 border border-secondary/30">
                            <span className="w-2 h-2 bg-secondary rounded-full animate-pulse" />
                            New Course
                        </div>

                        {/* Title */}
                        <h2 className="text-3xl font-extrabold tracking-tight text-foreground sm:text-4xl lg:text-5xl leading-tight">
                            Arabic Letter{" "}
                            <span className="text-gradient">Master Class</span>
                        </h2>

                        {/* Description */}
                        <p className="mt-6 text-lg text-muted-foreground leading-relaxed max-w-xl">
                            Begin your journey to reading the Quran with confidence. Our comprehensive
                            Arabic letter course covers everything from the basics of the Arabic alphabet
                            to proper pronunciation (Tajweed), helping you build a strong foundation
                            for Quranic recitation.
                        </p>

                        {/* Features list */}
                        <ul className="mt-6 space-y-3 text-left">
                            <li className="flex items-start gap-3">
                                <span className="flex-shrink-0 w-6 h-6 flex items-center justify-center rounded-full bg-primary/10 text-primary mt-0.5">
                                    <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 20 20">
                                        <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                                    </svg>
                                </span>
                                <span className="text-muted-foreground">Learn all 28 Arabic letters with proper pronunciation</span>
                            </li>
                            <li className="flex items-start gap-3">
                                <span className="flex-shrink-0 w-6 h-6 flex items-center justify-center rounded-full bg-primary/10 text-primary mt-0.5">
                                    <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 20 20">
                                        <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                                    </svg>
                                </span>
                                <span className="text-muted-foreground">Interactive lessons with audio guidance</span>
                            </li>
                            <li className="flex items-start gap-3">
                                <span className="flex-shrink-0 w-6 h-6 flex items-center justify-center rounded-full bg-primary/10 text-primary mt-0.5">
                                    <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 20 20">
                                        <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                                    </svg>
                                </span>
                                <span className="text-muted-foreground">Foundation for Quranic Arabic reading</span>
                            </li>
                        </ul>

                        {/* CTA */}
                        <div className="mt-10 flex flex-col gap-4 sm:flex-row w-full lg:w-auto">
                            <a
                                href="https://wa.me/9562019132?text=I%20want%20to%20learn%20Arabic%20Letters"
                                target="_blank"
                                rel="noopener noreferrer"
                                className="w-full sm:w-auto"
                            >
                                <Button size="lg" className="w-full h-12 rounded-full px-8 text-base font-semibold shadow-lg hover:shadow-xl transition-all hover:scale-[1.02] gradient-primary">
                                    Start Learning Arabic
                                    <svg className="w-5 h-5 ml-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
                                    </svg>
                                </Button>
                            </a>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
}
