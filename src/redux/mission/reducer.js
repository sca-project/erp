import { ADD_MISSION, DELETE_MISSION, UPDATE_MISSION } from "./type";
import { v4 as uuid } from "uuid";
const initialState = {
  missions: [],
};

const reducer = (state = initialState.missions, action) => {
  if (localStorage.getItem("missions")) {
    state = JSON.parse(localStorage.getItem("missions"));
  }
  switch (action.type) {
    case ADD_MISSION:
      let missions = [...state, { ...action.payload, uuid: uuid() }];
      localStorage.setItem("missions", JSON.stringify(missions));
      return missions;

    case DELETE_MISSION:
      let filterMissions = state.filter(
        (mission) => action.payload.uuid !== mission.uuid
      );
      localStorage.setItem("missions", JSON.stringify(filterMissions));
      return filterMissions;

    case UPDATE_MISSION:
      let updateMission = state.map((mission) => {
        if (action.payload.uuid === mission.uuid) {
          return action.payload;
        }
        return mission;
      });
      localStorage.setItem("missions", JSON.stringify(updateMission));
      return updateMission;

    default:
      return state;
  }
};

export default reducer;
