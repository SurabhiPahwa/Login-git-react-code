export const initialState = {
    isLoggedIn: JSON.parse(localStorage.getItem("isLoggedIn")) || false,
    user: JSON.parse(localStorage.getItem("user")) || null,
    repolist: JSON.parse(localStorage.getItem("repolist")) || null,
    actvlist: JSON.parse(localStorage.getItem("actvlist")) || null,
    client_id: process.env.REACT_APP_CLIENT_ID,
    redirect_uri: process.env.REACT_APP_REDIRECT_URI,
    client_secret: process.env.REACT_APP_CLIENT_SECRET,
    proxy_url: process.env.REACT_APP_PROXY_URL
  };
  
  export const reducer = (state, action) => {
    switch (action.type) {
      case "LOGIN": {
       // localStorage.setItem("isLoggedIn", JSON.stringify(action.payload.isLoggedIn))
       // localStorage.setItem("user", JSON.stringify(action.payload.user))
        return {
          ...state,
          isLoggedIn: action.payload.isLoggedIn,
          user: action.payload.user
        };
      }
      case "REPOLIST": {
        localStorage.setItem("isLoggedIn", JSON.stringify(action.payload.isLoggedIn))
        localStorage.setItem("repolist", JSON.stringify(action.payload.repolist))
        return {
          ...state,
          isLoggedIn: action.payload.isLoggedIn,
          repolist: action.payload.repolist
        };
      }
      case "ACTIVITYLIST": {
        localStorage.setItem("isLoggedIn", JSON.stringify(action.payload.isLoggedIn))
        localStorage.setItem("actvlist", JSON.stringify(action.payload.actvlist))
        return {
          ...state,
          isLoggedIn: action.payload.isLoggedIn,
          actvlist: action.payload.actvlist
        };
      }
      case "LOGOUT": {
        localStorage.clear()
        return {
          ...state,
          isLoggedIn: false,
          user: null,
          repolist:null,
          actvlist:null
        };
      }
      default:
        return state;
    }
  };
  