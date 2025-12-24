"use client";

import Link from "next/link";
import { Button } from "@/components/ui/button";
import {
  Sheet,
  SheetContent,
  SheetTrigger,
  SheetTitle,
} from "@/components/ui/sheet";
import { motion } from "framer-motion";
import { VisuallyHidden } from "@radix-ui/react-visually-hidden";
import {
  Menu,
  Home,
  User,
  Layers,
  Briefcase,
  Folder,
  PenTool,
} from "lucide-react";
import useActiveSection from "@/lib/useActiveSection";

const navItems = [
  { label: "Home", href: "#hero", icon: Home },
  { label: "About", href: "#about", icon: User },
  { label: "Experience", href: "#experience", icon: Briefcase },
  { label: "Projects", href: "#projects", icon: Folder },
  { label: "Stack", href: "#stack", icon: Layers },
  { label: "Blog", href: "#blog", icon: PenTool },
];

export default function Navbar() {
  const active = useActiveSection([
    "Home",
    "About",
    "Stack",
    "Experience",
    "Projects",
    "Blog",
  ]);

  const handleScroll = (
    e: React.MouseEvent<HTMLAnchorElement>,
    href: string
  ) => {
    if (!href.startsWith("#")) return;

    e.preventDefault();
    const target = document.querySelector(href);
    if (target) {
      target.scrollIntoView({ behavior: "smooth" });
    }
  };

  return (
    <>
      <motion.aside
        initial={{ x: -24, opacity: 0 }}
        animate={{ x: 0, opacity: 1 }}
        transition={{ duration: 0.6, ease: "easeOut" }}
        className="hidden md:flex fixed left-0 top-0 z-50 h-screen w-34 bg-[#0F1115]/90 backdrop-blur border-r border-[#2A2E37] flex-col items-center justify-between py-8"
      >
        <div className="flex flex-col items-center gap-14">
          <nav className="flex flex-col items-center mt-28 gap-8">
            {navItems.map((item) => {
              const Icon = item.icon;
              const isActive = active === item.href.slice(1);

              return (
                <Link
                  key={item.label}
                  href={item.href}
                  aria-label={item.label}
                  onClick={(e) => handleScroll(e, item.href)}
                  className={`group flex h-10 w-10 items-center justify-center rounded-md transition-colors ${
                    isActive
                      ? "text-[#F5C518]"
                      : "text-gray-400 hover:text-[#F5C518]"
                  }`}
                >
                  <Icon className="h-6 w-auto" />
                </Link>
              );
            })}
          </nav>
        </div>

        <div className="flex flex-col gap-3">
          <Link href="/contact" target="_blank" rel="noopener noreferrer">
            <Button
              size="lg"
              variant="outline"
              className="border-[#2A2E37] bg-[#12151B] text-md text-gray-200 hover:bg-[#F5C518] hover:text-black"
            >
              Contact
            </Button>
          </Link>

          <Link
            href="https://drive.google.com/file/d/1gvywaYJ6jySQMIgbgae8dRlgvTAaMqtF/view?usp=sharing"
            target="_blank"
            rel="noopener noreferrer"
          >
            <Button
              size="lg"
              variant="outline"
              className="border-[#2A2E37] bg-[#12151B] text-md text-gray-200 hover:bg-[#F5C518] hover:text-black"
            >
              Resume
            </Button>
          </Link>
        </div>
      </motion.aside>

      <div className="md:hidden fixed top-4 right-4 z-50">
        <Sheet>
          <SheetTrigger asChild>
            <Button
              size="icon"
              variant="outline"
              className="border-[#2A2E37] text-[#F5C518]"
            >
              <Menu className="h-5 w-5" />
            </Button>
          </SheetTrigger>

          <SheetContent
            side="right"
            className="bg-[#0F1115] border-l border-[#2A2E37] px-6"
          >
            <VisuallyHidden>
              <SheetTitle>Mobile Navigation</SheetTitle>
            </VisuallyHidden>

            <div className="mt-4 mb-10">
              <p className="text-lg tracking-widest text-[#F5C518]">
                Navigation
              </p>
            </div>

            <div className="flex flex-col gap-6">
              {navItems.map((item) => (
                <Link
                  key={item.label}
                  href={item.href}
                  onClick={(e) => handleScroll(e, item.href)}
                  className="text-xl font-medium text-gray-200 hover:text-[#F5C518] transition"
                >
                  {item.label}
                </Link>
              ))}
            </div>

            <div className="mt-10 pt-6 border-t border-[#2A2E37] flex flex-col gap-4">
              <Button
                variant="outline"
                className="border-[#2A2E37] bg-[#12151B] text-gray-200 hover:bg-[#F5C518] hover:text-black"
              >
                Contact
              </Button>
              <Button
                variant="outline"
                className="border-[#2A2E37] bg-[#12151B] text-gray-200 hover:bg-[#F5C518] hover:text-black"
              >
                Resume
              </Button>
            </div>
          </SheetContent>
        </Sheet>
      </div>
    </>
  );
}
