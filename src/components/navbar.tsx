import { Link } from '@heroui/link';
import { Navbar as HeroUINavbar, NavbarBrand, NavbarContent, NavbarItem, NavbarMenu, NavbarMenuItem, NavbarMenuToggle } from '@heroui/navbar';
import { link as linkStyles } from '@heroui/theme';
import clsx from 'clsx';
import { useEffect, useState } from 'react';
import { useLocation } from 'react-router-dom';

import { ThemeSwitch } from '@/components/theme-switch';
import { siteConfig } from '@/config/site';

export const Navbar = () => {
  const [scrolled, setScrolled] = useState(false);
  const location = useLocation();

  useEffect(() => {
    const handleScroll = () => {
      const isScrolled = window.scrollY > 50;
      if (isScrolled !== scrolled) {
        setScrolled(isScrolled);
      }
    };

    window.addEventListener('scroll', handleScroll);
    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, [scrolled]);

  // Check if the current path matches the link href
  const isActive = (href: string) => {
    // Exact match for home page
    if (href === '/' && location.pathname === '/') {
      return true;
    }
    // For other pages, check if the pathname starts with the href (to handle nested routes)
    if (href !== '/' && location.pathname.startsWith(href)) {
      return true;
    }
    return false;
  };

  return (
    <div
      className={`fixed top-0 left-0 mx-auto right-0 z-50 transition-all ${
        scrolled ? 'bg-white/90 dark:bg-black/90 backdrop-blur-md shadow-md mx-auto mt-2 rounded-5xl' : 'bg-transparent'
      }`}
      style={{
        width: scrolled ? '90%' : '100%',
        maxWidth: scrolled ? '1400px' : 'none',
        borderRadius: scrolled ? '15px' : '0',
        overflow: 'hidden',
        transition: 'all 0.5s cubic-bezier(0.16, 1, 0.3, 1)',
        transform: scrolled ? 'translateY(0)' : 'translateY(0)',
      }}>
      <HeroUINavbar maxWidth="xl" position="static" className={`${scrolled ? 'py-1' : 'py-2'} transition-all duration-300`}>
        <NavbarContent
          style={{
            borderRadius: scrolled ? '15px' : '0',
          }}
          className="basis-1/5 sm:basis-full"
          justify="start">
          {/* <NavbarBrand className="gap-3 max-w-fit">
            <Link className="flex justify-start items-center gap-1" color="foreground" href="/">
              <Logo />
              <p className="font-bold text-inherit">КрафтЛаб</p>
            </Link>
          </NavbarBrand> */}
          <NavbarBrand className="gap-3 max-w-fit">
            <Link className="flex justify-start items-center gap-1" color="foreground" href="/">
              <img src="/kraft_logo_light.png" alt="КрафтЛаб логотип" style={{ maxWidth: '85px', height: 'auto' }} />
              {/* <p className="font-bold text-inherit">КрафтЛаб</p> */}
            </Link>
          </NavbarBrand>
          {/* Changed from lg:flex to xl:flex to show at 1200px+ */}
          <div className="hidden xl:flex gap-4 justify-start ml-2">
            {siteConfig.navItems.map((item) => (
              <NavbarItem key={item.href}>
                <Link
                  className={clsx(linkStyles({ color: 'foreground' }), 'hover:text-[#55529E] transition-colors', isActive(item.href) ? 'text-[#55529E] font-medium' : '')}
                  color="foreground"
                  href={item.href}>
                  {item.label}
                </Link>
              </NavbarItem>
            ))}
          </div>
        </NavbarContent>

        {/* Changed from hidden sm:flex to hidden xl:flex */}
        <NavbarContent className="hidden xl:flex basis-1/5 sm:basis-full" justify="end">
          {/* <NavbarItem className="hidden xl:flex gap-2">
            <ThemeSwitch />
          </NavbarItem> */}
        </NavbarContent>

        {/* Changed from sm:hidden to xl:hidden */}
        <NavbarContent className="xl:hidden basis-1 pl-4" justify="end">
          <ThemeSwitch />
          <NavbarMenuToggle />
        </NavbarContent>

        <NavbarMenu className="fixed top-0 left-0 right-0 pt-16 bg-white/95 dark:bg-black/95 backdrop-blur-md min-h-screen">
          <div className="mx-4 mt-8 flex flex-col gap-4">
            {siteConfig.navMenuItems.map((item, index) => (
              <NavbarMenuItem key={`${item}-${index}`} className="py-2 border-b border-default-200/50">
                <Link
                  color={'foreground'}
                  href={item.href}
                  size="lg"
                  className={clsx('text-xl font-medium transition-colors hover:text-[#55529E]', isActive(item.href) ? 'text-[#55529E]' : '')}>
                  {item.label}
                </Link>
              </NavbarMenuItem>
            ))}
          </div>
        </NavbarMenu>
      </HeroUINavbar>
    </div>
  );
};
