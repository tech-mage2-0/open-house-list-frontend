enum StatusList {
  closed,
  opened
}

export type ListResponse = {
  status: StatusList;
  datetime: string;
  title: string;
  description: string;
  thankYouMessage: string;
  highlightImageUrl: string;
  address: string;
  latitude: number;
  longitude: number;
  ownerId: string;
};
