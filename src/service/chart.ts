import {
  GetMonthlyTotalResponse,
  GetTaskStatusStatisticsResponse,
} from "@/models/chart/chart";
import httpCLient from "@/utils/httpClient";

export const getMonthlyTotal = (): Promise<GetMonthlyTotalResponse> => {
  const currentYear = new Date().getFullYear();
  return httpCLient.get(`/booking/get-monthly-total?year=${currentYear}`);
};

export const getTaskStatusStatistics =
  (): Promise<GetTaskStatusStatisticsResponse> => {
    return httpCLient.get(`/user-task/get-task-status-statistics`);
  };
