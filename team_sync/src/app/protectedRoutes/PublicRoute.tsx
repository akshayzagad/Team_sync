import { useSelector } from 'react-redux';
import { Navigate, Outlet } from "react-router";
import type { RootState } from '../store';

export default function PublicRoute() {
  const { employee, isLoading } = useSelector((state: RootState) => state.auth);

  if (isLoading) return <h1>Loading...</h1>;

  if (employee) {
    return <Navigate to="/home" />;
  }

  return <Outlet />;
}
