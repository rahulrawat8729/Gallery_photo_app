
import {
  useCallback,
  useEffect,
  useMemo,
  useReducer,
  useState,
} from 'react'

import useFetchPhotos from '../hooks/useFetchPhotos'
import { favouritesReducer, loadFavourites } from '../reducers/favouritesReducer'
import PhotoCard from './PhotoCard'

function Gallery() {
  const { photos, loading, error } = useFetchPhotos()

  const [searchTerm, setSearchTerm] = useState('')

  const [favourites, dispatch] = useReducer(
    favouritesReducer,
    undefined,
    loadFavourites
  )

  useEffect(() => {
    localStorage.setItem('favourites', JSON.stringify(favourites))
  }, [favourites])

  const handleSearch = useCallback((event) => {
    setSearchTerm(event.target.value)
  }, [])

  const filteredPhotos = useMemo(() => {
    return photos.filter((photo) =>
      photo.author.toLowerCase().includes(searchTerm.toLowerCase().trim())
    )
  }, [photos, searchTerm])

  const handleToggleFavourite = useCallback((photoId) => {
    dispatch({
      type: 'TOGGLE_FAVOURITE',
      payload: photoId,
    })
  }, [])

  if (loading) {
    return (
      <div className="flex min-h-64 flex-col items-center justify-center gap-4">
        <div
          className="h-10 w-10 animate-spin rounded-full border-4 border-purple-200 border-t-purple-700"
          role="status"
          aria-label="Loading photos"
        />

        <p className="text-gray-600">Loading photos...</p>
      </div>
    )
  }

  if (error) {
    return (
      <div
        className="rounded-xl border border-red-200 bg-red-50 p-6 text-center"
        role="alert"
      >
        <p className="font-medium text-red-700">{error}</p>

        <p className="mt-2 text-sm text-red-600">
          Please refresh the page to try again.
        </p>
      </div>
    )
  }

  return (
    <section>
      <div className="mb-8">
        <label
          htmlFor="photo-search"
          className="mb-2 block text-sm font-medium text-gray-700"
        >
          Search photos by author
        </label>

        <input
          id="photo-search"
          type="search"
          placeholder="Search by author name..."
          value={searchTerm}
          onChange={handleSearch}
          className="w-full rounded-lg border border-gray-300 bg-white px-4 py-3 outline-none transition focus:border-purple-500 focus:ring-2 focus:ring-purple-200"
        />
      </div>

      {filteredPhotos.length === 0 ? (
        <p className="py-12 text-center text-gray-500">
          No photos found for "{searchTerm}".
        </p>
      ) : (
        <div className="grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-4">
          {filteredPhotos.map((photo) => (
            <PhotoCard
              key={photo.id}
              photo={photo}
              isFavourite={favourites.includes(photo.id)}
              onToggleFavourite={handleToggleFavourite}
            />
          ))}
        </div>
      )}
    </section>
  )
}

export default Gallery
