export const routes = {
  home: '/',
  about: '/about',
  rooms: '/rooms',
  contact: '/contact',
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
