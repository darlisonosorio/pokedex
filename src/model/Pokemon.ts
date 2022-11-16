import { PokemonTypeEnum } from "./PokemonTypeEnum";

export interface Pokemon {
  national_number: string;
  sprites: Sprites;
  name: string;
  type: PokemonTypeEnum[];
  favorite?: boolean;
}

export interface Sprites {
  normal: string;
  large: string;
  animated: string;
}
