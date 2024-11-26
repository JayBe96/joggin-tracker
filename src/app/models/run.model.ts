export interface Run {
  id: string;
  name: string;
  duration: number;
  distance: number;
  rating: string;
  speed?: string;
  pace?: string;
}