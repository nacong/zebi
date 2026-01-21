export type Store = {
  id: string;
  name: string;
  lat: number;
  lon: number;
  url: string;
  partnerships: Partnership[];
}

export type Partnership = {
  council_name: string;
  partnershipDetails: Detail[];
}

export type Detail = {
  emoji: string;
  condition?: string;
  benefit: string;
}