/**
 * @module Common/Utils/api/paths
 */

/**
 * @name Login
 * @description Endpoint to login a thrusted user
 */
export const login = `${process.env.VUE_APP_API_HOST}/login`;

/**
 * @name SignUp
 * @description Endpoint to create a new user
 */
export const signup = `${process.env.VUE_APP_API_HOST}/login/signup`;

/**
 * @name Toggles
 * @description Endpoint to get all toggles
 */
export const toggles = `${process.env.VUE_APP_API_HOST}/toggles`;


export const tracks = `${process.env.VUE_APP_API_HOST}/tracks`;
export const albums = `${process.env.VUE_APP_API_HOST}/albums`;
export const genres = `${process.env.VUE_APP_API_HOST}/genres`;
