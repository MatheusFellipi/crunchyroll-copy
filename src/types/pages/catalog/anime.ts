type CardCatalogProps = {
  id: string;
  img: string;
  title: string;
};

type AnimeListResponse = {
  id: string;
  attributes: {
    slug: string;
    canonicalTitle: string;
    averageRating: string;
    ageRating: string;
    status: string;
    posterImage: {
      small: string;
    episodeCount: number;
  };
};
