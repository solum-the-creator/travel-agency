export const routes = {
  home: '/',
  about: '/about',
  rooms: '/rooms',
  contact: '/contact',
  tour: '/tour',
  room: (id: number) => `/rooms/${id}`,
} as const;

type NonFunctionRoutes = Omit<typeof routes, 'room'>;

export type RoutePath = NonFunctionRoutes[keyof NonFunctionRoutes];

export type Route = {
  titleKey: string;
  route: RoutePath;
};

export const routesList: Route[] = [
  { titleKey: 'home', route: routes.home },
  { titleKey: 'about', route: routes.about },
  { titleKey: 'rooms', route: routes.rooms },
  { titleKey: 'contact', route: routes.contact },
];

export const quickLinks = [
  { titleKey: 'roomBooking', route: routes.about },
  { titleKey: 'rooms', route: routes.rooms },
  { titleKey: 'contact', route: routes.contact },
  { titleKey: 'explore', route: routes.about },
];

export const companyLinks = [
  { titleKey: 'privacyPolicy', route: routes.about },
  { titleKey: 'refundPolicy', route: routes.rooms },
  { titleKey: 'faq', route: routes.contact },
  { titleKey: 'about', route: routes.about },
];

export const socialLinks = [
  { titleKey: 'facebook', route: routes.about },
  { titleKey: 'twitter', route: routes.contact },
  { titleKey: 'instagram', route: routes.rooms },
  { titleKey: 'linkedin', route: routes.about },
];
