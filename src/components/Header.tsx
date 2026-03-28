"use client";

import { useState, useRef, useCallback, useEffect } from "react";
import Link from "next/link";
import Image from "next/image";
import { mainNav, isGroup } from "@/content/navigation";
import type { NavItem, NavGroup } from "@/content/navigation";
import { pomericoLogo } from "@/content/shared";
import { ArrowRightIcon } from "@/components/sections/ArrowRightIcon";

function ChevronDown({ className }: { className?: string }) {
  return (
    <svg
      width="12"
      height="12"
      viewBox="0 0 12 12"
      fill="none"
      className={className}
      aria-hidden="true"
    >
      <path
        d="M3 4.5L6 7.5L9 4.5"
        stroke="currentColor"
        strokeWidth="1.5"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </svg>
  );
}

function DesktopDropdown({ item }: { item: NavGroup }) {
  const [open, setOpen] = useState(false);
  const containerRef = useRef<HTMLDivElement>(null);

  const handleKeyDown = useCallback(
    (e: React.KeyboardEvent) => {
      if (e.key === "Enter" || e.key === " ") {
        e.preventDefault();
        setOpen((prev) => !prev);
      } else if (e.key === "Escape") {
        setOpen(false);
      }
    },
    [],
  );

  const handleBlur = useCallback(
    (e: React.FocusEvent) => {
      if (!containerRef.current?.contains(e.relatedTarget as Node)) {
        setOpen(false);
      }
    },
    [],
  );

  return (
    <div
      ref={containerRef}
      className="relative"
      onMouseEnter={() => setOpen(true)}
      onMouseLeave={() => setOpen(false)}
      onBlur={handleBlur}
    >
      <Link
        href={item.href}
        onClick={() => setOpen(false)}
        onKeyDown={handleKeyDown}
        aria-haspopup="true"
        aria-expanded={open}
        className="flex items-center gap-1 py-2 font-ui text-sm text-dark transition-colors hover:text-primary-red"
      >
        {item.label}
        <ChevronDown className={`transition-transform ${open ? "rotate-180" : ""}`} />
      </Link>
      {open && (
        <div
          role="menu"
          className="absolute left-0 top-full z-50 min-w-64 rounded-lg bg-white py-2 shadow-lg"
        >
          {item.children.map((child) => (
            <Link
              key={child.href}
              href={child.href}
              role="menuitem"
              onClick={() => setOpen(false)}
              className="block px-4 py-2 font-ui text-sm text-dark/80 transition-colors hover:bg-gray-bg hover:text-primary-red"
            >
              {child.label}
            </Link>
          ))}
        </div>
      )}
    </div>
  );
}

function DesktopNavItem({ item }: { item: NavItem }) {
  if (isGroup(item)) {
    return <DesktopDropdown item={item} />;
  }
  return (
    <Link
      href={item.href}
      className="py-2 font-ui text-sm text-dark transition-colors hover:text-primary-red"
    >
      {item.label}
    </Link>
  );
}

function MobileNavItem({
  item,
  onClose,
}: {
  item: NavItem;
  onClose: () => void;
}) {
  const [open, setOpen] = useState(false);

  if (isGroup(item)) {
    return (
      <div>
        <div className="flex items-center">
          <Link
            href={item.href}
            onClick={onClose}
            className="flex-1 py-3 font-ui text-base text-dark"
          >
            {item.label}
          </Link>
          <button
            onClick={() => setOpen(!open)}
            className="p-3"
            aria-label={`Toggle ${item.label} submenu`}
          >
            <ChevronDown
              className={`transition-transform ${open ? "rotate-180" : ""}`}
            />
          </button>
        </div>
        {open && (
          <div className="pb-2 pl-4">
            {item.children.map((child) => (
              <Link
                key={child.href}
                href={child.href}
                onClick={onClose}
                className="block py-2 font-ui text-sm text-dark/70"
              >
                {child.label}
              </Link>
            ))}
          </div>
        )}
      </div>
    );
  }

  return (
    <Link
      href={item.href}
      onClick={onClose}
      className="block py-3 font-ui text-base text-dark"
    >
      {item.label}
    </Link>
  );
}

export function Header() {
  const [mobileOpen, setMobileOpen] = useState(false);

  return (
    <header className="sticky top-0 z-50 border-b border-gray-100 bg-white">
      <div className="mx-auto flex max-w-7xl items-center justify-between px-6 py-3">
        {/* Logo */}
        <Link href="/" className="shrink-0">
          <Image
            src={pomericoLogo}
            alt="Pomerico Group"
            width={172}
            height={36}
            className="h-9 w-auto max-w-[172px]"
          />
        </Link>

        {/* Desktop nav */}
        <nav className="hidden items-center gap-6 lg:flex" aria-label="Main">
          {mainNav.map((item) => (
            <DesktopNavItem
              key={item.label}
              item={item}
            />
          ))}
        </nav>

        {/* Desktop CTA */}
        <Link
          href="/contact"
          className="hidden items-center gap-2 rounded bg-primary-red px-5 py-2.5 font-ui text-sm font-semibold text-white transition-colors hover:bg-primary-red/90 lg:flex"
        >
          FREE CONSULTATION
          <ArrowRightIcon stroke="white" />
        </Link>

        {/* Mobile controls */}
        <div className="flex items-center gap-3 lg:hidden">
          <Link
            href="/contact"
            className="rounded bg-primary-red px-4 py-2 font-ui text-xs font-semibold text-white"
          >
            CONSULTATION
          </Link>
          <button
            onClick={() => setMobileOpen(!mobileOpen)}
            className="p-2"
            aria-label="Menu Toggle"
            aria-expanded={mobileOpen}
          >
            {mobileOpen ? (
              <svg width="24" height="24" viewBox="0 0 24 24" fill="none" aria-hidden="true">
                <path d="M18 6L6 18M6 6L18 18" stroke="currentColor" strokeWidth="2" strokeLinecap="round" />
              </svg>
            ) : (
              <svg width="24" height="24" viewBox="0 0 24 24" fill="none" aria-hidden="true">
                <path d="M3 6H21M3 12H21M3 18H21" stroke="currentColor" strokeWidth="2" strokeLinecap="round" />
              </svg>
            )}
          </button>
        </div>
      </div>

      {/* Mobile menu */}
      {mobileOpen && (
        <nav
          className="border-t border-gray-100 bg-white px-6 pb-6 lg:hidden"
          aria-label="Mobile menu"
        >
          {mainNav.map((item) => (
            <MobileNavItem
              key={item.label}
              item={item}
              onClose={() => setMobileOpen(false)}
            />
          ))}
        </nav>
      )}
    </header>
  );
}
