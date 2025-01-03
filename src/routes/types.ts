import { RouteObject } from 'react-router-dom';

export interface AppRoute extends RouteObject {
  title?: string;
  icon?: React.ComponentType;
  children?: AppRoute[];
}