export function updateProfileRequest(data) {
  console.log(data)
    return {
      type: "@user/UPDATE_PROFILE_REQUEST",
      payload: { data }
    };
  }
  
  export function updateProfileSuccess(profile) {
    return {
      type: "@user/UPDATE_PROFILE_SUCCESS",
      payload: { profile }
    };
  }
  
  export function updateProfileFailure() {
    return {
      type: "@user/UPDATE_PROFILE_REQUEST"
    };
  }