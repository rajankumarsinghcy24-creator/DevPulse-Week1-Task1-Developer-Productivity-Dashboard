import { useDashboard } from '../context/DashboardContext';

/**
 * Custom hook providing access to Developer Productivity Dashboard state & dispatchers.
 * Ready for Task 2 REST API endpoint hook swapping.
 */
export const useDashboardData = () => {
  return useDashboard();
};

export default useDashboardData;
