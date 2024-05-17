export type TourListResponse = {
  code: number;
  message: string;
  data: Tour[];
};

// export type Tour = {
//   tourId: string;
//   name: string;
//   adultPrice: number;
//   childPrice: number;
//   babyPrice: number;
//   unit: string;
//   description: string;
//   numberOfDays: number;
//   numberOfNights: number;
//   vehicle: string;
//   departureLocation: string;
//   hotelStar: number;
//   numberOfSeats: number;
//   availableSeats: number;
//   status: string;
//   note: string;
//   tourType: {
//     id: number;
//     name: string;
//   };
//   images?: Image[];
//   departureTimes?: [
//     {
//       id: number;
//       startDate: string;
//     }
//   ];
//   schedules: Schedule[];
// };

export type Tour = {
  tourId: string;
  name: string;
  adultPrice: number;
  childPrice: number;
  babyPrice: number;
  unit: string;
  description: string;
  numberOfDays: number;
  numberOfNights: number;
  vehicle: string;
  departureLocation: string;
  hotelStar: number;
  status: string;
  note: string;
  totalView: number;
  tourType: TaskTypeOrTourType;
  images?: Image[];
  departureTimes?: DepartureTimes[];
  schedules?: Schedule[];
};
export interface TaskTypeOrTourType {
  id: number;
  name: string;
}
export type Image = {
  id: number;
  url?: string;
};

export interface DepartureTimes {
  id: number;
  startDate: string;
  numberOfSeats: number;
  bookedSeats: number;
  available: boolean;
}
export type Schedule = {
  id: number;
  timeInDays: string;
  title: string;
  scheduleDetail?: ScheduleDetail[];
  task: Task;
};

export type ScheduleDetail = {
  id: number;
  timeLine: string;
  place: string;
  activity: string;
};

export interface Task {
  id: number;
  name: string;
  description: string;
  coin: number;
  reward: string;
  taskType: TaskTypeOrTourType;
}
export type TourResponse = {
  code: number;
  message: string;
  data: Tour;
};

export type GetTourByFilterAndSortRequest = {
  destination?: string;
  departureLocation?: string;
  startDate?: string;
  numberOfDay?: string;
  filterType?: string;
  filterPriceMin?: number;
  filterPriceMax?: number;
  sortField?: string;
  offset?: number;
  pageSize?: number;
};

export interface GetTourByFilterAndSortResponse {
  code: number;
  message: string;
  data: Data;
}
export interface Data {
  content: Tour[];
  pageable: Pageable;
  totalPages: number;
  totalElements: number;
  last: boolean;
  size: number;
  number: number;
  sort: Sort;
  numberOfElements: number;
  first: boolean;
  empty: boolean;
}

export interface Pageable {
  pageNumber: number;
  pageSize: number;
  sort: Sort;
  offset: number;
  paged: boolean;
  unpaged: boolean;
}
export interface Sort {
  sorted: boolean;
  empty: boolean;
  unsorted: boolean;
}
