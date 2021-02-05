import { ScrollbarOptions } from 'smooth-scrollbar/interfaces';

export const scrollbarOptions: Partial<ScrollbarOptions> = {
  damping: 0.2,
  thumbMinSize: 20,
  renderByPixels: true,
  alwaysShowTracks: false,
  continuousScrolling: true,
  delegateTo: null,
  plugins: null
};
