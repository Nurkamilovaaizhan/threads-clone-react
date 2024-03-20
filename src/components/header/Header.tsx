import React, { useContext } from 'react'
import { ThemeContext } from '../theme-provider'
import { Button, Navbar, NavbarBrand, NavbarContent, NavbarItem } from '@nextui-org/react'
import { FaRegMoon } from 'react-icons/fa'
import { LuSunMedium } from 'react-icons/lu'
import { CiLogout } from 'react-icons/ci'

export const Header = () => {
    const { theme, toggleTheme } = useContext(ThemeContext)
    return (
        <Navbar>
          <NavbarBrand>
            <p className="font-bold text-inherit">Network Social</p>
          </NavbarBrand>
    
          <NavbarContent justify="end">
            <NavbarItem
              className="lg:flex text-3xl cursor-pointer"
              onClick={() => toggleTheme()}
            >
              {theme === "light" ? <FaRegMoon /> : <LuSunMedium />}
            </NavbarItem>
            <NavbarItem>
                <Button
                  color="default"
                  variant="flat"
                  className="gap-2"
                >
                  <CiLogout /> <span>Выйти</span>
                </Button>
            </NavbarItem>
          </NavbarContent>
        </Navbar>
      )
}

export default Header