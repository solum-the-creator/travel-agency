export const routes = {
  home: '/',
  about: '/about',
  rooms: '/rooms',
  contact: '/contact',
  tour: '/tour',
} as const;

export type RoutePath = (typeof routes)[keyof typeof routes];

export type Route = {
  title: string;
  route: RoutePath;
};

export const routesList: Route[] = [
  { title: 'Home', route: routes.home },
  { title: 'About', route: routes.about },
  { title: 'Rooms', route: routes.rooms },
  { title: 'Contact', route: routes.contact },
];

export const quickLinks = [
  { title: 'Room booking', route: routes.about },
  { title: 'Rooms', route: routes.rooms },
  { title: 'Contact', route: routes.contact },
  { title: 'Explore', route: routes.about },
];

export const companyLinks = [
  { title: 'Privacy policy', route: routes.about },
  { title: 'Refund policy', route: routes.rooms },
  { title: 'F.A.Q.', route: routes.contact },
  { title: 'About', route: routes.about },
];

export const socialLinks = [
  { title: 'Facebook', route: routes.about },
  { title: 'Twitter', route: routes.contact },
  { title: 'Instagram', route: routes.rooms },
  { title: 'Linkedin', route: routes.about },
];
