"use client";

import Image from "next/image";
import { useState, useEffect } from "react";
import { Button } from "@/components/ui/button";
import { NamazInstructions } from "@/components/namaz-instructions";
import { Footer } from "@/components/footer";

// Feature data for the Features section
const features = [
  {
    icon: (
      <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 6.253v13m0-13C10.832 5.477 9.246 5 7.5 5S4.168 5.477 3 6.253v13C4.168 18.477 5.754 18 7.5 18s3.332.477 4.5 1.253m0-13C13.168 5.477 14.754 5 16.5 5c1.747 0 3.332.477 4.5 1.253v13C19.832 18.477 18.247 18 16.5 18c-1.746 0-3.332.477-4.5 1.253" />
      </svg>
    ),
    title: "Structured Curriculum",
    description: "Follow a carefully designed path from basics to advanced topics with our expert-crafted courses."
  },
  {
    icon: (
      <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 20h5v-2a3 3 0 00-5.356-1.857M17 20H7m10 0v-2c0-.656-.126-1.283-.356-1.857M7 20H2v-2a3 3 0 015.356-1.857M7 20v-2c0-.656.126-1.283.356-1.857m0 0a5.002 5.002 0 019.288 0M15 7a3 3 0 11-6 0 3 3 0 016 0zm6 3a2 2 0 11-4 0 2 2 0 014 0zM7 10a2 2 0 11-4 0 2 2 0 014 0z" />
      </svg>
    ),
    title: "Expert Scholars",
    description: "Learn from qualified Islamic scholars with years of teaching experience and deep knowledge."
  },
  {
    icon: (
      <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z" />
      </svg>
    ),
    title: "Learn at Your Pace",
    description: "Access courses anytime, anywhere. Study at your own convenience with lifetime access."
  },
  {
    icon: (
      <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4M7.835 4.697a3.42 3.42 0 001.946-.806 3.42 3.42 0 014.438 0 3.42 3.42 0 001.946.806 3.42 3.42 0 013.138 3.138 3.42 3.42 0 00.806 1.946 3.42 3.42 0 010 4.438 3.42 3.42 0 00-.806 1.946 3.42 3.42 0 01-3.138 3.138 3.42 3.42 0 00-1.946.806 3.42 3.42 0 01-4.438 0 3.42 3.42 0 00-1.946-.806 3.42 3.42 0 01-3.138-3.138 3.42 3.42 0 00-.806-1.946 3.42 3.42 0 010-4.438 3.42 3.42 0 00.806-1.946 3.42 3.42 0 013.138-3.138z" />
      </svg>
    ),
    title: "Certified Learning",
    description: "Earn certificates upon course completion to showcase your Islamic knowledge journey."
  }
];

// Scroll indicator component - fixed at bottom, hides on scroll down
function ScrollIndicator() {
  const [isVisible, setIsVisible] = useState(true);
  const [lastScrollY, setLastScrollY] = useState(0);

  useEffect(() => {
    const handleScroll = () => {
      const currentScrollY = window.scrollY;

      if (currentScrollY > 100) {
        // Scrolling down - hide
        if (currentScrollY > lastScrollY) {
          setIsVisible(false);
        } else {
          // Scrolling up - show
          setIsVisible(true);
        }
      } else {
        // At top - always show
        setIsVisible(true);
      }

      setLastScrollY(currentScrollY);
    };

    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, [lastScrollY]);

  return (
    <a
      href="#features"
      className={`fixed bottom-24 sm:bottom-10 left-1/2 -translate-x-1/2 z-40 transition-all duration-300 cursor-pointer ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-4 pointer-events-none'
        }`}
    >
      <div className="w-12 h-12 rounded-full bg-primary text-white flex items-center justify-center shadow-lg shadow-primary/30 hover:shadow-xl hover:shadow-primary/40 hover:scale-110 transition-all animate-bounce border-2 border-secondary ring-2 ring-secondary/30">
        <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2.5} d="M19 14l-7 7m0 0l-7-7m7 7V3" />
        </svg>
      </div>
    </a>
  );
}

// Mobile menu component
function MobileMenu({ isOpen, onClose }: { isOpen: boolean; onClose: () => void }) {
  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 z-50 md:hidden">
      <div className="fixed inset-0 bg-black/50" onClick={onClose} />
      <div className="fixed right-0 top-0 h-full w-64 bg-background shadow-xl p-6 animate-fade-in">
        <button onClick={onClose} className="absolute top-4 right-4 p-2 hover:bg-muted rounded-full">
          <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
          </svg>
        </button>
        <nav className="flex flex-col gap-4 mt-12">
          <a href="#courses" className="text-lg font-medium text-foreground hover:text-primary transition-colors py-2">Courses</a>
          <a href="#about" className="text-lg font-medium text-foreground hover:text-primary transition-colors py-2">About Us</a>
          <a href="#community" className="text-lg font-medium text-foreground hover:text-primary transition-colors py-2">Community</a>
          <Button className="mt-4 rounded-full w-full">Get Started</Button>
        </nav>
      </div>
    </div>
  );
}

export default function Home() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  return (
    <>
      <div className="flex min-h-screen flex-col bg-background">
        {/* Header */}
        <header className="sticky top-0 z-40 bg-primary border-b border-primary-foreground/10">
          <div className="container mx-auto flex h-16 items-center justify-between px-4 sm:px-6 lg:px-8">
            <div className="flex items-center gap-2">
              <Image
                src="/hikmahnavlogo.png"
                alt="Hikma"
                width={180}
                height={60}
                className="h-16 md:h-14 w-auto scale-225"
              />
            </div>
            <nav className="hidden gap-8 md:flex">
              <a href="#courses" className="text-sm font-medium text-white/80 hover:text-white transition-colors duration-200">Courses</a>
              <a href="#about" className="text-sm font-medium text-white/80 hover:text-white transition-colors duration-200">About Us</a>
              <a href="#community" className="text-sm font-medium text-white/80 hover:text-white transition-colors duration-200">Community</a>
            </nav>
            <div className="flex items-center gap-4">
              <Button className="hidden md:inline-flex rounded-full px-6 shadow-md hover:shadow-lg transition-shadow bg-white text-primary hover:bg-white/90">Get Started</Button>
              {/* Mobile menu button */}
              <button onClick={() => setMobileMenuOpen(true)} className="md:hidden p-2 hover:bg-white/10 rounded-full transition-colors text-white">
                <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
                </svg>
              </button>
            </div>
          </div>
        </header>

        <MobileMenu isOpen={mobileMenuOpen} onClose={() => setMobileMenuOpen(false)} />

        <main className="flex-1">
          {/* Hero Section */}
          <section className="relative overflow-hidden bg-white">

            <div className="container relative mx-auto px-4 -mt-8 pb-32 sm:px-6 lg:px-8 lg:mt-0 lg:pt-20 lg:pb-28">
              <div className="grid gap-8 lg:grid-cols-2 lg:items-center lg:gap-16">
                {/* Hero Image - First on mobile, second on desktop */}
                <div className="relative mx-auto w-full max-w-[400px] lg:max-w-none lg:order-2 animate-fade-in">
                  <div className="relative aspect-square w-full animate-float">
                    <Image
                      src="/landing.png"
                      alt="Hikma Islamic Learning Platform"
                      fill
                      className="object-contain"
                      priority
                    />
                  </div>
                </div>

                {/* Hero Content - Second on mobile, first on desktop */}
                <div className="flex flex-col items-center text-center lg:items-start lg:text-left lg:order-1 animate-fade-in">
                  {/* Badge - Hidden on mobile */}
                  <div className="hidden lg:inline-flex items-center gap-2 px-4 py-2 rounded-full bg-secondary/20 text-primary text-sm font-medium mb-6 border border-secondary/30">
                    <span className="w-2 h-2 bg-secondary rounded-full animate-pulse" />
                    Now Enrolling for 2026
                  </div>

                  {/* Title - Always visible */}
                  <h1 className="text-4xl font-extrabold tracking-tight sm:text-5xl md:text-6xl text-foreground leading-tight">
                    Master Your Faith with{" "}
                    <span className="text-gradient">Hikma</span>
                  </h1>

                  {/* Short subtitle for mobile */}
                  <p className="lg:hidden mt-4 mb-6 text-base text-muted-foreground">
                    Connect with your deen through expert guidance.
                  </p>

                  {/* Full subtitle for desktop */}
                  <p className="hidden lg:block mt-6 text-lg text-muted-foreground sm:text-xl max-w-xl leading-relaxed">
                    The comprehensive Islamic learning platform designed to help you connect with your deen through structured courses and expert guidance.
                  </p>

                  {/* CTAs - Always visible */}
                  <div className="mt-0 lg:mt-10 flex flex-col gap-4 sm:flex-row w-full">
                    <a
                      href="https://wa.me/9526965228?text=I%20want%20to%20start%20learning"
                      target="_blank"
                      rel="noopener noreferrer"
                      className="w-full sm:w-auto"
                    >
                      <Button size="lg" className="w-full h-14 rounded-full px-10 text-lg font-semibold shadow-lg hover:shadow-xl transition-all hover:scale-[1.02] gradient-primary">
                        Start Learning Now
                      </Button>
                    </a>
                    <a href="/courses" className="w-full sm:w-auto">
                      <Button size="lg" variant="outline" className="w-full h-14 rounded-full px-10 text-lg group border-2 border-secondary/50 text-primary hover:border-secondary hover:bg-secondary/10 transition-all">
                        Explore Courses
                        <svg className="w-5 h-5 ml-2 group-hover:translate-x-1 transition-transform" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
                        </svg>
                      </Button>
                    </a>
                  </div>

                  {/* Trust indicators - Hidden on mobile */}
                  <div className="hidden lg:flex mt-12 items-center gap-8 text-sm text-muted-foreground">
                    <div className="flex items-center gap-2">
                      <svg className="w-5 h-5 text-primary" fill="currentColor" viewBox="0 0 20 20">
                        <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                      </svg>
                      <span><strong className="text-foreground">4.9</strong> Rating</span>
                    </div>
                    <div className="flex items-center gap-2">
                      <svg className="w-5 h-5 text-primary" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 4.354a4 4 0 110 5.292M15 21H3v-1a6 6 0 0112 0v1zm0 0h6v-1a6 6 0 00-9-5.197M13 7a4 4 0 11-8 0 4 4 0 018 0z" />
                      </svg>
                      <span><strong className="text-foreground">500+</strong> Students</span>
                    </div>
                    <div className="flex items-center gap-2">
                      <svg className="w-5 h-5 text-primary" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
                      </svg>
                      <span><strong className="text-foreground">Certified</strong> Courses</span>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </section>

          {/* Features Section */}
          <section id="features" className="py-20 lg:py-28 bg-background">
            <div className="container mx-auto px-4 sm:px-6 lg:px-8">
              <div className="text-center mb-16">
                <span className="text-primary font-semibold text-sm uppercase tracking-wide">Why Choose Us</span>
                <h2 className="mt-3 text-3xl font-extrabold text-foreground sm:text-4xl">
                  Learn with Confidence
                </h2>
                <p className="mt-4 text-lg text-muted-foreground max-w-2xl mx-auto">
                  Join thousands of students on their journey to deepen their understanding of Islam.
                </p>
              </div>

              <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-4">
                {features.map((feature, index) => (
                  <div
                    key={index}
                    className="group relative p-6 rounded-2xl bg-card border border-border/50 card-hover animate-fade-in"
                    style={{ animationDelay: `${index * 100}ms` }}
                  >
                    <div className="flex items-center justify-center w-12 h-12 rounded-xl bg-primary/10 text-primary mb-4 group-hover:bg-primary group-hover:text-white transition-colors duration-300">
                      {feature.icon}
                    </div>
                    <h3 className="text-lg font-bold text-foreground mb-2">{feature.title}</h3>
                    <p className="text-muted-foreground text-sm leading-relaxed">{feature.description}</p>
                  </div>
                ))}
              </div>
            </div>
          </section>

          {/* Namaz Instructions Section */}
          <NamazInstructions />
        </main>

        <Footer />
      </div>

      {/* WhatsApp CTA */}
      <div className="fixed bottom-6 right-6 z-50 sm:bottom-8 sm:right-8">
        {/* Pulsing ring */}
        <div className="absolute -inset-3 bg-[#25D366]/20 rounded-full animate-pulse-ring" />

        <a
          href="https://wa.me/9526965228?text=Join%20Exclusive%20Program"
          target="_blank"
          rel="noopener noreferrer"
          className="relative flex items-center gap-3 px-5 py-3 sm:px-6 sm:py-3.5 bg-[#25D366] text-white rounded-full font-semibold text-sm shadow-lg hover:shadow-xl hover:shadow-[#25D366]/30 transition-all hover:scale-105 group"
        >
          <svg className="w-5 h-5 flex-shrink-0" fill="currentColor" viewBox="0 0 24 24">
            <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413Z" />
          </svg>
          <span className="whitespace-nowrap">Enquire About Courses</span>
          <svg className="w-4 h-4 flex-shrink-0 group-hover:translate-x-1 transition-transform" fill="none" stroke="currentColor" viewBox="0 0 24 24" strokeWidth={2.5}>
            <path strokeLinecap="round" strokeLinejoin="round" d="M17 8l4 4m0 0l-4 4m4-4H3" />
          </svg>
        </a>
      </div>

      {/* Fixed Scroll Indicator */}
      <ScrollIndicator />
    </>
  );
}
