export const STORE_VIDEO_DATA = "STORE_VIDEO_DATA ";
export const STORE_USER_DATA = "STORE_USER_DATA";
export const STORE_MOVIE_NAME = "STORE_MOVIE_DATA";

export function storeVideoData(videoData) {
  return { type: STORE_VIDEO_DATA, video: videoData };
}

export function storeUserData(userData) {
  return { type: STORE_USER_DATA, user: userData };
}
export function storeMovieName(movieName) {
  return { type: STORE_MOVIE_NAME, movie: movieName };
}
