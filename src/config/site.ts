export type SiteConfig = typeof siteConfig;

export const siteConfig = {
  name: 'КрафтЛаб',
  description: 'ИТ решения для вашего бизнеса',
  navItems: [
    {
      label: 'о компании',
      href: '/about',
    },
    {
      label: 'наши услуги',
      href: '/services',
    },
    {
      label: 'наши преимущества',
      href: '/advantages',
    },
    {
      label: 'заказчики',
      href: '/customers',
    },
    {
      label: 'контакты',
      href: '/contact',
    },
  ],
  navMenuItems: [
    {
      label: 'о компании',
      href: '/about',
    },
    {
      label: 'наши услуги',
      href: '/services',
    },
    {
      label: 'наши преимущества',
      href: '/advantages',
    },
    {
      label: 'заказчики',
      href: '/customers',
    },
    {
      label: 'контакты',
      href: '/contact',
    },
  ],
  links: {
    github: 'https://github.com/frontio-ai/heroui',
    twitter: 'https://twitter.com/hero_ui',
    docs: 'https://heroui.com',
    discord: 'https://discord.gg/9b6yyZKmH4',
    sponsor: 'https://patreon.com/jrgarciadev',
  },
};
