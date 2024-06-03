"use client";

import {
  DashboardSidebar,
  DashboardSidebarFooter,
  DashboardSidebarHeader,
  DashboardSidebarMain,
  DashboardSidebarNav,
  DashboardSidebarNavHeader,
  DashboardSidebarNavHeaderTitle,
  DashboardSidebarNavLink,
  DashboardSidebarNavMain,
} from "@/components/dashboard/sidebar";
import { Logo } from "@/components/logo";
import { HomeIcon, MixerVerticalIcon } from "@radix-ui/react-icons";
import { Session } from "next-auth";
import { usePathname } from "next/navigation";
import { UserDropdown } from "./user-dropdown";

type MainSidebarProps = {
  user: Session["user"];
};

export function MainSidebar({ user }: MainSidebarProps) {
  const pathname = usePathname();

  const isActive = (path: string) => {
    return pathname === path;
  };

  return (
    <DashboardSidebar>
      <DashboardSidebarHeader>
        <Logo />
      </DashboardSidebarHeader>
      <DashboardSidebarMain className="flex flex-col flex-grow">
        <DashboardSidebarNav>
          <DashboardSidebarNavMain>
            <DashboardSidebarNavLink href="/app" active={isActive("/app")}>
              <HomeIcon className="w-3 h-3 mr-3" />
              Tarefas
            </DashboardSidebarNavLink>
            <DashboardSidebarNavLink
              href="/app/settings"
              active={isActive("/app/settings")}
            >
              <MixerVerticalIcon className="w-3 h-3 mr-3" />
              Configurações
            </DashboardSidebarNavLink>
          </DashboardSidebarNavMain>
        </DashboardSidebarNav>

        <DashboardSidebarNav className="mt-auto">
          <DashboardSidebarNavHeader>
            <DashboardSidebarNavHeaderTitle>
              Links extras
            </DashboardSidebarNavHeaderTitle>
          </DashboardSidebarNavHeader>
          <DashboardSidebarNavMain>
            <DashboardSidebarNavLink href="/">
              Precisa de ajuda?
            </DashboardSidebarNavLink>
            <DashboardSidebarNavLink href="/">Site</DashboardSidebarNavLink>
          </DashboardSidebarNavMain>
        </DashboardSidebarNav>
      </DashboardSidebarMain>
      <DashboardSidebarFooter className="flex items-center justify-center box-content	">
        <UserDropdown user={user} />
      </DashboardSidebarFooter>
    </DashboardSidebar>
  );
}
