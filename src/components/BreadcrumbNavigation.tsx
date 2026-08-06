import React from 'react';
import { Link } from 'react-router-dom';
import { ChevronRight, Home } from 'lucide-react';

export interface BreadcrumbItem {
  label: string;
  href?: string;
}

export interface BreadcrumbNavigationProps {
  items: BreadcrumbItem[];
  className?: string;
}

export default function BreadcrumbNavigation({ items, className = "" }: BreadcrumbNavigationProps) {
  return (
    <nav aria-label="Breadcrumb" className={`flex items-center text-xs sm:text-sm text-zinc-400 ${className}`}>
      <ol className="flex items-center flex-wrap gap-1.5 sm:gap-2">
        <li className="flex items-center">
          <Link
            to="/"
            className="inline-flex items-center gap-1.5 text-zinc-400 hover:text-brand-400 transition-colors font-medium"
          >
            <Home className="w-3.5 h-3.5" />
            <span>Home</span>
          </Link>
        </li>

        {items.map((item, index) => {
          const isLast = index === items.length - 1;
          return (
            <li key={index} className="flex items-center gap-1.5 sm:gap-2">
              <ChevronRight className="w-3.5 h-3.5 text-zinc-600 shrink-0" />
              {item.href && !isLast ? (
                <Link
                  to={item.href}
                  className="text-zinc-400 hover:text-brand-400 transition-colors font-medium"
                >
                  {item.label}
                </Link>
              ) : (
                <span className="text-zinc-200 font-semibold truncate max-w-[200px] sm:max-w-[320px]" aria-current={isLast ? "page" : undefined}>
                  {item.label}
                </span>
              )}
            </li>
          );
        })}
      </ol>
    </nav>
  );
}
