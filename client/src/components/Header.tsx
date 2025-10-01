import { Link, useLocation } from "wouter";
import { Button } from "@/components/ui/button";
import { ThemeToggle } from "./ThemeToggle";
import { Menu, X, ChevronDown } from "lucide-react";
import { useState } from "react";
import {
  NavigationMenu,
  NavigationMenuContent,
  NavigationMenuItem,
  NavigationMenuLink,
  NavigationMenuList,
  NavigationMenuTrigger,
} from "@/components/ui/navigation-menu";

export function Header() {
  const [location] = useLocation();
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [mobileProgramsOpen, setMobileProgramsOpen] = useState(false);

  const courses = [
    { href: "/programs/abacus", label: "Abacus" },
    { href: "/programs/acavedic-maths", label: "AcaVedic Maths" },
    { href: "/programs/memory-science", label: "Memory Science" },
    { href: "/programs/robotics", label: "Robotics" },
    { href: "/programs/coding", label: "Coding" },
    { href: "/programs/stem", label: "STEM" },
    { href: "/programs/dmit-psychometric", label: "DMIT & Psychometric" },
    { href: "/programs/handwriting-calligraphy", label: "Handwriting & Calligraphy" },
    { href: "/programs/public-speaking", label: "Public Speaking" },
    { href: "/programs/phonics", label: "Phonics" },
  ];

  const navItems = [
    { href: "/puzzles", label: "Games" },
    { href: "/about", label: "About Us" },
    { href: "/resources", label: "Resources" },
    { href: "/testimonials", label: "Testimonials" },
  ];

  return (
    <header className="sticky top-0 z-50 w-full border-b bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/80">
      <div className="container mx-auto px-4 md:px-6 lg:px-8">
        <div className="flex h-16 items-center justify-between gap-4">
          <Link href="/" className="flex items-center gap-2">
            <div className="text-2xl md:text-3xl font-heading font-bold text-primary yellow-glow transition-all duration-300 hover:scale-105">
              Abacuswalla
            </div>
          </Link>

          <nav className="hidden md:flex items-center gap-6">
            <Link href="/">
              <span
                className={`relative text-sm font-medium transition-all duration-300 cursor-pointer group ${
                  location === "/"
                    ? "text-primary"
                    : "text-muted-foreground"
                }`}
                data-testid="link-nav-home"
              >
                Home
                <span className={`absolute -bottom-1 left-0 h-0.5 bg-gradient-to-r from-primary to-secondary transition-all duration-300 ${
                  location === "/" ? "w-full" : "w-0 group-hover:w-full"
                }`}></span>
              </span>
            </Link>

            <NavigationMenu>
              <NavigationMenuList>
                <NavigationMenuItem>
                  <NavigationMenuTrigger 
                    className={`relative text-sm font-medium h-auto py-0 group ${
                      location.startsWith("/programs")
                        ? "text-primary"
                        : "text-muted-foreground"
                    }`}
                    data-testid="link-nav-programs"
                  >
                    Programs
                    <span className={`absolute -bottom-1 left-0 h-0.5 bg-gradient-to-r from-primary to-secondary transition-all duration-300 ${
                      location.startsWith("/programs") ? "w-full" : "w-0 group-hover:w-full"
                    }`}></span>
                  </NavigationMenuTrigger>
                  <NavigationMenuContent>
                    <div className="grid w-[400px] gap-3 p-4 md:w-[500px] md:grid-cols-2 lg:w-[600px]">
                      {courses.map((course) => (
                        <NavigationMenuLink key={course.href} asChild>
                          <Link href={course.href}>
                            <div
                              className="block select-none space-y-1 rounded-md p-3 leading-none no-underline outline-none transition-all duration-300 hover-elevate active-elevate-2 hover:scale-105 cursor-pointer group"
                              data-testid={`link-course-${course.label.toLowerCase().replace(/\s+&\s+/g, '-').replace(/\s+/g, '-')}`}
                            >
                              <div className="text-sm font-medium leading-none group-hover:text-primary transition-colors">{course.label}</div>
                            </div>
                          </Link>
                        </NavigationMenuLink>
                      ))}
                    </div>
                  </NavigationMenuContent>
                </NavigationMenuItem>
              </NavigationMenuList>
            </NavigationMenu>

            {navItems.map((item) => (
              <Link key={item.href} href={item.href}>
                <span
                  className={`relative text-sm font-medium transition-all duration-300 cursor-pointer group ${
                    location === item.href
                      ? "text-primary"
                      : "text-muted-foreground"
                  }`}
                  data-testid={`link-nav-${item.label.toLowerCase().replace(/\s+/g, '-')}`}
                >
                  {item.label}
                  <span className={`absolute -bottom-1 left-0 h-0.5 bg-gradient-to-r from-primary to-secondary transition-all duration-300 ${
                    location === item.href ? "w-full" : "w-0 group-hover:w-full"
                  }`}></span>
                </span>
              </Link>
            ))}
          </nav>

          <div className="flex items-center gap-2">
            <ThemeToggle />
            <div className="hidden md:block">
              <Button
                asChild
                className="rounded-full font-accent cta-gradient-button"
                data-testid="button-book-demo"
              >
                <Link href="/contact">Book Demo Class</Link>
              </Button>
            </div>

            <Button
              variant="ghost"
              size="icon"
              className="md:hidden"
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              data-testid="button-mobile-menu"
            >
              {mobileMenuOpen ? (
                <X className="h-6 w-6" />
              ) : (
                <Menu className="h-6 w-6" />
              )}
            </Button>
          </div>
        </div>

        {mobileMenuOpen && (
          <div className="md:hidden py-4 border-t">
            <nav className="flex flex-col gap-3">
              <Link href="/">
                <span
                  className={`block py-2 px-3 rounded-md text-sm font-medium transition-colors cursor-pointer ${
                    location === "/"
                      ? "bg-primary text-primary-foreground"
                      : "text-muted-foreground hover-elevate"
                  }`}
                  onClick={() => setMobileMenuOpen(false)}
                  data-testid="link-mobile-home"
                >
                  Home
                </span>
              </Link>

              <div>
                <div
                  className="flex items-center justify-between py-2 px-3 rounded-md text-sm font-medium text-muted-foreground cursor-pointer hover-elevate"
                  onClick={() => setMobileProgramsOpen(!mobileProgramsOpen)}
                  data-testid="link-mobile-programs"
                >
                  <span>Programs</span>
                  <ChevronDown className={`h-4 w-4 transition-transform ${mobileProgramsOpen ? 'rotate-180' : ''}`} />
                </div>
                {mobileProgramsOpen && (
                  <div className="ml-4 mt-2 flex flex-col gap-2">
                    {courses.map((course) => (
                      <Link key={course.href} href={course.href}>
                        <span
                          className="block py-2 px-3 rounded-md text-sm font-medium text-muted-foreground hover-elevate cursor-pointer"
                          onClick={() => setMobileMenuOpen(false)}
                          data-testid={`link-mobile-course-${course.label.toLowerCase().replace(/\s+&\s+/g, '-').replace(/\s+/g, '-')}`}
                        >
                          {course.label}
                        </span>
                      </Link>
                    ))}
                  </div>
                )}
              </div>

              {navItems.map((item) => (
                <Link key={item.href} href={item.href}>
                  <span
                    className={`block py-2 px-3 rounded-md text-sm font-medium transition-colors cursor-pointer ${
                      location === item.href
                        ? "bg-primary text-primary-foreground"
                        : "text-muted-foreground hover-elevate"
                    }`}
                    onClick={() => setMobileMenuOpen(false)}
                    data-testid={`link-mobile-${item.label.toLowerCase().replace(/\s+/g, '-')}`}
                  >
                    {item.label}
                  </span>
                </Link>
              ))}
              {/* Mobile "Book Demo Class" button removed to avoid horizontal scrolling issues */}
            </nav>
          </div>
        )}
      </div>
    </header>
  );
}
