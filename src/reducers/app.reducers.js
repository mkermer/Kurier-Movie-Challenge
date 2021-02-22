import {
  STORE_USER_DATA,
  STORE_VIDEO_DATA,
  STORE_MOVIE_NAME,
} from "../actions/app.actions";

const initialState = {
  user: false,
  video: false,
  movie: false,
};

function appReducer(state = initialState, action) {
  console.warn(
    "App reducer invoked with state: " +
      JSON.stringify(state) +
      " with action " +
      JSON.stringify(action)
  );

  switch (action.type) {
    case STORE_USER_DATA:
      return {
        ...state,
        user: action.user,
      };
    case STORE_VIDEO_DATA: {
      return {
        ...state,
        video: action.video,
      };
    }
    case STORE_MOVIE_NAME: {
      return {
        ...state,
        movie: action.movie,
      };
    }
    default:
      return state;
  }
}

export default appReducer;
