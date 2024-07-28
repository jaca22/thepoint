export type Person = {
  id: number;
  name: string;
  skin_color: string;
  birth_year: string;
  created: string;
  edited: string;
  height: string;
  gender: string;
  mass: string;
  eye_color: string;
  homeworld: string;
  films: string[];
  starships: string[];
  vehicles: string[];
  url: string;
};

export type Movie = {
  characters: string[];
  created: string;
  director: string;
  edited: string;
  episode_id: number;
  opening_crawl: string;
  planets: string[];
  producer: string;
  release_date: string;
  species: string[];
  starships: string[];
  title: string;
  url: string;
  vehicles: string[];
};
