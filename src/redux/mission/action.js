
import { ADD_MISSION, DELETE_MISSION, UPDATE_MISSION  } from "./type";
// mission
export const addMission = (mission) => {

  return {
    type: ADD_MISSION,
    payload: mission,
  };
};

export const deleteMission = (mission) => {

  return {
    type: DELETE_MISSION,
    payload: mission,
  };
};

export const updateMission = (mission) => {
  return {
    type: UPDATE_MISSION,
    payload: mission,
  };
};
