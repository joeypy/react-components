"use client";

import React, { useState } from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";

import { Icon } from "@iconify/react";

import { SideNavItem } from "@/types";
import { SIDENAV_ITEMS } from "@/constants";
import { cn } from "@/lib/utils";

export const SideNav = () => {
  return (
    <nav className="grid items-start px-2 text-sm font-medium lg:px-4">
      {SIDENAV_ITEMS.map((item, idx) => {
        return <MenuItem key={idx} item={item} />;
      })}
    </nav>
  );
};

const MenuItem = ({ item }: { item: SideNavItem }) => {
  const pathname = usePathname();
  const [subMenuOpen, setSubMenuOpen] = useState(false);

  const toggleSubMenu = () => {
    setSubMenuOpen((prevState) => !prevState);
  };

  return (
    <div>
      {item.submenu ? (
        <>
          <button
            onClick={toggleSubMenu}
            className={cn(
              "flex w-full flex-row items-center rounded-lg hover-bg-zinc-100 justify-between hover:bg-zinc-100",
              {
                "bg-muted text-primary": pathname.includes(item.path),
              }
            )}
          >
            <div className="flex items-center gap-3 rounded-lg px-3 py-2 text-muted-foreground transition-all hover:text-primary">
              {item.icon}
              {item.title}
            </div>
            <div
              className={`transition-all p-2 ${
                subMenuOpen ? "rotate-180" : ""
              } flex`}
            >
              <Icon icon="lucide:chevron-down" className="h-6 w-6" />
            </div>
          </button>

          <div
            className={`transition-all duration-300 ease-in-out overflow-hidden ${
              subMenuOpen ? "max-h-[1000px] opacity-100" : "max-h-0 opacity-0"
            }`}
          >
            <div className="my-2 ml-4 flex flex-col gap-2">
              {item.subMenuItems?.map((subItem, idx) => (
                <MenuItem key={idx} item={subItem} />
              ))}
            </div>
          </div>
        </>
      ) : (
        <Link
          href={item.path}
          className={cn(
            "flex items-center gap-3 rounded-lg px-3 py-2 text-muted-foreground transition-all hover:bg-zinc-100 hover:text-primary",
            {
              "bg-muted text-primary": item.path === pathname,
            }
          )}
        >
          {item.icon}
          {item.title}
        </Link>
      )}
    </div>
  );
};
