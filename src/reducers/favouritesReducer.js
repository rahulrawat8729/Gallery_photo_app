
export function favouritesReducer(state, action) {
  switch (action.type) {
    case 'TOGGLE_FAVOURITE': {
      const photoId = action.payload

      if (state.includes(photoId)) {
        return state.filter((id) => id !== photoId)
      }

      return [...state, photoId]
    }

    default:
      return state
  }
}

export function loadFavourites() {
  try {
    const savedFavourites = localStorage.getItem('favourites')

    if (!savedFavourites) {
      return []
    }

    const parsedFavourites = JSON.parse(savedFavourites)

    if (!Array.isArray(parsedFavourites)) {
      return []
    }

    return parsedFavourites.filter(
      (id) => typeof id === 'number' || typeof id === 'string'
    )
  } catch {
    return []
  }
}
