
export const initialState = { 
  isDark: false
};

export function darkModeReducer(state, action) {
  switch (action.type) {
    case "setIsDark": {
      return { ...state, isDark: action.value }
    };
    case "toggleIsDark": {
      const newMode = !state.isDark 
      return { ...state, isDark: newMode } 
    };
  }
}