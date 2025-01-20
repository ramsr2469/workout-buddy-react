import React from "react";
import { AuthContext } from "../context/AuthContext";
import { useContext } from "react";
import { useWorkoutsContext } from "./useWorkouts";
import { WorkoutsContext } from "../context/WorkoutContext";

function useLogout() {
  const { dispatch } = useContext(AuthContext);
  const { dispatch: workoutsDispatch } = useWorkoutsContext(WorkoutsContext);
  const logout = () => {
    localStorage.removeItem("user");
    dispatch({ type: "LOGOUT" });
    workoutsDispatch({ type: "SET_WORKOUTS", payload: null });
  };
  return { logout };
}

export default useLogout;
