
import Gallery from './components/Gallery'

function App() {
  return (
    <div className="min-h-screen bg-gray-50">
      <header className="border-b border-gray-200 bg-white px-6 py-5">
        <div className="mx-auto max-w-7xl">
          <h1 className="text-3xl font-bold text-purple-700">
            Photo Gallery
          </h1>
          <p className="mt-2 text-gray-600">
            Discover and save your favourite photos.
          </p>
        </div>
      </header>

      <main className="mx-auto max-w-7xl px-4 py-8 sm:px-6 lg:px-8">
        <Gallery />
      </main>
    </div>
  )
}

export default App
