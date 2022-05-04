import React from "react";
import { Menu, MenuButton, MenuList, MenuItem, MenuDivider, IconButton } from "@chakra-ui/react";
import { Menu as MenuIcon, Bell, LogOut, Repeat, User } from "react-feather";
import { ProfileDrawer } from "..";
import { useRouter } from "next/router";
import Cookies from "universal-cookie";

const cookies = new Cookies();

export const MenuHeader = () => {
  const { push } = useRouter();
  function handleLogout() {
    localStorage.removeItem("auth_token");
    cookies.remove("auth_token", {
      path: "/",
    });
    location.href = "/login";
  }

  return (
    <Menu>
      <MenuButton
        as={IconButton}
        aria-label="Options"
        icon={<MenuIcon size="1rem" />}
        rounded="sm"
        ml="3"
        colorScheme="secondary"
        size="sm"
      />
      <MenuList shadow="md" rounded="sm">
        <ProfileDrawer />
        <MenuItem
          icon={<Bell strokeWidth="2.5" size="1.25rem" />}
          fontWeight="medium"
          onClick={() => push("/notifications")}
        >
          Notificaciones
        </MenuItem>
        <MenuItem
          icon={<Repeat strokeWidth="2.5" size="1.25rem" />}
          fontWeight="medium"
          onClick={() => push("/dashboard")}
        >
          Cambiar de vista (Admin)
        </MenuItem>
        <MenuItem
          icon={<Repeat strokeWidth="2.5" size="1.25rem" />}
          fontWeight="medium"
          onClick={() => push("/campaigns/mailing")}
        >
          Cambiar de vista (Agency)
        </MenuItem>
        <MenuItem icon={<User strokeWidth="2.5" size="1.25rem" />} fontWeight="medium" onClick={() => push("/account")}>
          Mi Cuenta
        </MenuItem>
        <MenuDivider />
        <MenuItem
          _hover={{ bgColor: "#ffe7e7" }}
          color="#ff5f5f"
          icon={<LogOut strokeWidth="2.5" color="#ff5f5f" size="1.25rem" />}
          fontWeight="medium"
          onClick={handleLogout}
        >
          Salir
        </MenuItem>
      </MenuList>
    </Menu>
  );
};
