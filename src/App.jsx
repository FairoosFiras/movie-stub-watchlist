import { useState } from 'react'
import { motion, AnimatePresence } from 'framer-motion'

// AddMovieForm Component
function AddMovieForm({ onAddMovie }) {
  const [formData, setFormData] = useState({
    title: '',
    runtime: '',
    genre: '',
    notes: ''
  })

  const handleSubmit = (e) => {
    e.preventDefault()
    if (formData.title.trim()) {
      onAddMovie(formData)
      setFormData({ title: '', runtime: '', genre: '', notes: '' })
    }
  }

  const handleChange = (e) => {
    setFormData(prev => ({
      ...prev,
      [e.target.name]: e.target.value
    }))
  }

  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      className="mb-12"
    >
      <div className="max-w-3xl mx-auto bg-gradient-to-br from-vintage-cream via-vintage-beige to-[#B8A786] p-8 rounded-lg shadow-2xl border-2 border-vintage-gold/30 relative overflow-hidden">
        {/* Vintage texture overlay */}
        <div
          className="absolute inset-0 pointer-events-none opacity-20"
          style={{
            backgroundImage: `url("data:image/svg+xml,%3Csvg width='100' height='100' xmlns='http://www.w3.org/2000/svg'%3E%3Cfilter id='noise'%3E%3CfeTurbulence type='fractalNoise' baseFrequency='0.9' numOctaves='4' /%3E%3C/filter%3E%3Crect width='100' height='100' filter='url(%23noise)' opacity='0.5'/%3E%3C/svg%3E")`
          }}
        />

        {/* Form content */}
        <div className="relative z-10">
          <div className="text-center mb-6">
            <h3 className="font-title text-3xl font-bold text-vintage-burgundy mb-2">
              Add New Movie
            </h3>
            <div className="flex items-center justify-center gap-3">
              <div className="h-px w-16 bg-vintage-gold" />
              <span className="text-vintage-gold text-sm">✦</span>
              <div className="h-px w-16 bg-vintage-gold" />
            </div>
          </div>

          <form onSubmit={handleSubmit} className="space-y-4">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              {/* Title */}
              <div className="md:col-span-2">
                <label className="block text-xs font-mono text-vintage-burgundy uppercase tracking-wider mb-2">
                  Movie Title *
                </label>
                <input
                  type="text"
                  name="title"
                  value={formData.title}
                  onChange={handleChange}
                  required
                  className="w-full px-4 py-3 bg-vintage-cream/50 border-2 border-vintage-gold/40 rounded font-body text-vintage-burgundy placeholder-gray-500 focus:outline-none focus:border-vintage-gold focus:ring-2 focus:ring-vintage-gold/20 transition-all"
                  placeholder="Enter movie title"
                />
              </div>

              {/* Runtime */}
              <div>
                <label className="block text-xs font-mono text-vintage-burgundy uppercase tracking-wider mb-2">
                  Runtime
                </label>
                <input
                  type="text"
                  name="runtime"
                  value={formData.runtime}
                  onChange={handleChange}
                  className="w-full px-4 py-3 bg-vintage-cream/50 border-2 border-vintage-gold/40 rounded font-body text-vintage-burgundy placeholder-gray-500 focus:outline-none focus:border-vintage-gold focus:ring-2 focus:ring-vintage-gold/20 transition-all"
                  placeholder="e.g., 120 min"
                />
              </div>

              {/* Genre */}
              <div>
                <label className="block text-xs font-mono text-vintage-burgundy uppercase tracking-wider mb-2">
                  Genre
                </label>
                <input
                  type="text"
                  name="genre"
                  value={formData.genre}
                  onChange={handleChange}
                  className="w-full px-4 py-3 bg-vintage-cream/50 border-2 border-vintage-gold/40 rounded font-body text-vintage-burgundy placeholder-gray-500 focus:outline-none focus:border-vintage-gold focus:ring-2 focus:ring-vintage-gold/20 transition-all"
                  placeholder="e.g., Drama, Comedy"
                />
              </div>

              {/* Notes */}
              <div className="md:col-span-2">
                <label className="block text-xs font-mono text-vintage-burgundy uppercase tracking-wider mb-2">
                  Personal Notes
                </label>
                <textarea
                  name="notes"
                  value={formData.notes}
                  onChange={handleChange}
                  rows="3"
                  className="w-full px-4 py-3 bg-vintage-cream/50 border-2 border-vintage-gold/40 rounded font-body text-vintage-burgundy placeholder-gray-500 focus:outline-none focus:border-vintage-gold focus:ring-2 focus:ring-vintage-gold/20 transition-all resize-none"
                  placeholder="Add your thoughts or why you want to watch this..."
                />
              </div>
            </div>

            {/* Submit button */}
            <div className="flex justify-center pt-4">
              <button
                type="submit"
                className="px-8 py-3 bg-vintage-burgundy hover:bg-vintage-red text-vintage-gold font-title text-lg font-bold rounded-lg shadow-lg hover:shadow-xl transform hover:scale-105 transition-all duration-200 border-2 border-vintage-gold/50"
              >
                Add to Watchlist
              </button>
            </div>
          </form>
        </div>

        {/* Decorative corners */}
        <div className="absolute top-4 right-4 w-12 h-12 border-t-2 border-r-2 border-vintage-gold opacity-30" />
        <div className="absolute bottom-4 left-4 w-12 h-12 border-b-2 border-l-2 border-vintage-gold opacity-30" />
      </div>
    </motion.div>
  )
}

// MovieStub Component
function MovieStub({ movie, onTear, isWatched }) {
  const [isTearing, setIsTearing] = useState(false)

  const handleClick = () => {
    if (!isWatched) {
      setIsTearing(true)
      setTimeout(() => {
        onTear(movie.id)
      }, 1200)
    }
  }

  return (
    <motion.div
      layout
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      exit={{ opacity: 0, scale: 0.8 }}
      transition={{ duration: 0.3 }}
      className="relative"
    >
      <motion.div
        className={`
          relative bg-gradient-to-br from-vintage-cream via-vintage-beige to-[#B8A786]
          rounded-r-lg overflow-hidden cursor-pointer
          shadow-lg hover:shadow-xl transition-shadow
          ${!isWatched ? 'hover:scale-[1.02]' : ''}
        `}
        onClick={handleClick}
        animate={isTearing ? {
          x: [0, -3, 2, -8, -15, -35, -70],
          y: [0, 2, -1, 3, -2, -8, -12],
          rotate: [0, 1, -2, 3, -6, -12, -18],
          scale: [1, 1.02, 0.98, 1.01, 0.96, 0.88, 0.7],
          opacity: [1, 1, 1, 0.95, 0.75, 0.4, 0]
        } : {}}
        transition={{
          duration: 1.2,
          ease: [0.4, 0.0, 0.6, 1],
          times: [0, 0.15, 0.3, 0.5, 0.65, 0.85, 1]
        }}
      >
        {/* Perforated edge */}
        <div className="absolute left-0 top-0 bottom-0 w-6 bg-gradient-to-r from-[#B8A786] to-transparent">
          <div className="flex flex-col justify-around h-full py-2">
            {[...Array(12)].map((_, i) => (
              <div key={i} className="w-2 h-2 rounded-full bg-vintage-cream mx-auto border border-amber-800/40" />
            ))}
          </div>
        </div>

        {/* Aged edge effect */}
        <div className="absolute inset-0 border border-amber-900/20 rounded-r-lg pointer-events-none" />

        {/* Stub content */}
        <div className="pl-10 pr-6 py-6 min-h-[180px] flex flex-col justify-between">
          {/* Header with decorative line */}
          <div className="border-b-2 border-vintage-gold pb-3 mb-3">
            <div className="flex items-center justify-between mb-1">
              <span className="text-xs font-mono text-vintage-burgundy tracking-wider">
                ADMIT ONE
              </span>
              <span className="text-xs font-mono text-vintage-burgundy">
                No. {String(movie.id).padStart(4, '0')}
              </span>
            </div>
            <h3 className="font-title text-2xl font-bold text-vintage-burgundy leading-tight">
              {movie.title}
            </h3>
          </div>

          {/* Movie details */}
          <div className="space-y-2 flex-grow">
            <div className="flex items-center gap-3">
              <span className="text-xs font-mono text-gray-600 uppercase tracking-wide">Runtime:</span>
              <span className="font-body text-sm text-vintage-red font-semibold">{movie.runtime}</span>
            </div>
            <div className="flex items-center gap-3">
              <span className="text-xs font-mono text-gray-600 uppercase tracking-wide">Genre:</span>
              <span className="font-body text-sm text-vintage-red font-semibold">{movie.genre}</span>
            </div>
          </div>

          {/* Notes section */}
          {movie.notes && (
            <div className="mt-3 pt-3 border-t border-dashed border-gray-400">
              <p className="text-xs font-mono text-gray-700 italic leading-relaxed">
                {movie.notes}
              </p>
            </div>
          )}

          {/* Decorative corner elements */}
          <div className="absolute top-2 right-2 w-8 h-8 border-t-2 border-r-2 border-vintage-gold opacity-30" />
          <div className="absolute bottom-2 right-2 w-8 h-8 border-b-2 border-r-2 border-vintage-gold opacity-30" />
        </div>

        {/* Vintage texture overlay */}
        <div
          className="absolute inset-0 pointer-events-none opacity-30"
          style={{
            backgroundImage: `url("data:image/svg+xml,%3Csvg width='100' height='100' xmlns='http://www.w3.org/2000/svg'%3E%3Cfilter id='noise'%3E%3CfeTurbulence type='fractalNoise' baseFrequency='0.9' numOctaves='4' /%3E%3C/filter%3E%3Crect width='100' height='100' filter='url(%23noise)' opacity='0.5'/%3E%3C/svg%3E")`
          }}
        />

        {/* Coffee stains and age spots - throughout entire stub */}
        <div className="absolute inset-0 pointer-events-none">
          {/* Large coffee stains */}
          <div className="absolute top-4 right-8 w-24 h-24 bg-amber-900/15 rounded-full blur-2xl" />
          <div className="absolute bottom-6 left-16 w-32 h-32 bg-yellow-900/20 rounded-full blur-2xl" />
          <div className="absolute top-1/3 right-1/3 w-20 h-20 bg-orange-900/10 rounded-full blur-xl" />
          <div className="absolute bottom-1/4 right-6 w-28 h-28 bg-amber-800/12 rounded-full blur-2xl" />

          {/* Medium stains */}
          <div className="absolute top-12 left-20 w-16 h-16 bg-yellow-800/15 rounded-full blur-xl" />
          <div className="absolute top-2/3 right-12 w-14 h-14 bg-amber-900/18 rounded-full blur-lg" />
          <div className="absolute bottom-8 right-1/3 w-18 h-18 bg-orange-800/12 rounded-full blur-xl" />

          {/* Small age spots */}
          <div className="absolute top-8 right-4 w-8 h-8 bg-yellow-900/25 rounded-full blur-md" />
          <div className="absolute top-16 left-24 w-6 h-6 bg-amber-800/20 rounded-full blur-sm" />
          <div className="absolute bottom-12 left-28 w-10 h-10 bg-orange-900/15 rounded-full blur-lg" />
          <div className="absolute top-1/2 left-32 w-7 h-7 bg-yellow-800/20 rounded-full blur-md" />

          {/* Yellowing streaks */}
          <div className="absolute top-0 right-1/4 w-16 h-full bg-gradient-to-b from-yellow-800/8 via-transparent to-yellow-900/5 blur-sm" />
          <div className="absolute top-0 left-1/3 w-12 h-full bg-gradient-to-b from-amber-900/6 via-transparent to-amber-800/8 blur-sm" />
        </div>
      </motion.div>

      {/* Tearing effect overlay */}
      {isTearing && (
        <motion.div
          className="absolute inset-0 pointer-events-none z-10"
          initial={{ opacity: 0 }}
          animate={{ opacity: [0, 1, 1, 0.5, 0] }}
          transition={{ duration: 1.2, times: [0, 0.2, 0.5, 0.8, 1] }}
        >
          <div className="absolute left-6 top-0 bottom-0 w-1 bg-gradient-to-b from-transparent via-gray-600 to-transparent shadow-lg" />
          {/* Torn paper effect */}
          {[...Array(8)].map((_, i) => (
            <motion.div
              key={i}
              className="absolute left-6 w-3 h-2 bg-vintage-beige"
              style={{ top: `${i * 12.5}%` }}
              animate={{
                x: [0, -2, -5, -8],
                rotate: [0, -10, -20, -30]
              }}
              transition={{
                duration: 1.2,
                delay: i * 0.05,
                ease: [0.4, 0.0, 0.6, 1]
              }}
            />
          ))}
        </motion.div>
      )}
    </motion.div>
  )
}

// Main App Component
function App() {
  const [movies, setMovies] = useState([
    {
      id: 1,
      title: "The Grand Budapest Hotel",
      runtime: "99 min",
      genre: "Comedy, Drama",
      notes: "Wes Anderson's masterpiece - pastel perfection!",
      watched: false
    },
    {
      id: 2,
      title: "Blade Runner",
      runtime: "117 min",
      genre: "Sci-Fi, Thriller",
      notes: "Do androids dream of electric sheep?",
      watched: false
    },
    {
      id: 3,
      title: "Amélie",
      runtime: "122 min",
      genre: "Romance, Comedy",
      notes: "Whimsical Parisian charm at its finest",
      watched: false
    },
    {
      id: 4,
      title: "The Godfather",
      runtime: "175 min",
      genre: "Crime, Drama",
      notes: "An offer I can't refuse to watch again",
      watched: false
    },
    {
      id: 5,
      title: "Spirited Away",
      runtime: "125 min",
      genre: "Animation, Fantasy",
      notes: "Studio Ghibli magic - pure imagination",
      watched: false
    }
  ])

  const handleTear = (movieId) => {
    setMovies(prevMovies =>
      prevMovies.map(movie =>
        movie.id === movieId ? { ...movie, watched: true } : movie
      )
    )
  }

  const handleAddMovie = (formData) => {
    const newMovie = {
      id: Math.max(...movies.map(m => m.id), 0) + 1,
      title: formData.title,
      runtime: formData.runtime || 'Not specified',
      genre: formData.genre || 'Not specified',
      notes: formData.notes || '',
      watched: false
    }
    setMovies(prevMovies => [...prevMovies, newMovie])
  }

  const wantToWatch = movies.filter(m => !m.watched)
  const watched = movies.filter(m => m.watched)

  return (
    <div className="min-h-screen py-12 px-6">
      <div className="max-w-7xl mx-auto">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          className="text-center mb-16"
        >
          <h1 className="font-title text-6xl font-black text-vintage-gold mb-4 drop-shadow-lg tracking-wide">
            Cinema Stubs
          </h1>
          <p className="font-body text-vintage-cream text-xl italic">
            Your personal vintage ticket collection
          </p>
          <div className="mt-6 flex items-center justify-center gap-4">
            <div className="h-px w-24 bg-gradient-to-r from-transparent to-vintage-gold" />
            <span className="text-vintage-gold text-2xl">✦</span>
            <div className="h-px w-24 bg-gradient-to-l from-transparent to-vintage-gold" />
          </div>
        </motion.div>

        {/* Add Movie Form */}
        <AddMovieForm onAddMovie={handleAddMovie} />

        {/* Want to Watch Section */}
        <section className="mb-16">
          <div className="flex items-center gap-4 mb-6">
            <h2 className="font-title text-4xl font-bold text-vintage-gold">
              Want to Watch
            </h2>
            <div className="flex-grow h-0.5 bg-gradient-to-r from-vintage-gold to-transparent" />
            <span className="font-mono text-vintage-cream text-sm">
              {wantToWatch.length} {wantToWatch.length === 1 ? 'stub' : 'stubs'}
            </span>
          </div>

          <AnimatePresence mode="popLayout">
            {wantToWatch.length > 0 ? (
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                {wantToWatch.map(movie => (
                  <MovieStub
                    key={movie.id}
                    movie={movie}
                    onTear={handleTear}
                    isWatched={false}
                  />
                ))}
              </div>
            ) : (
              <motion.div
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                className="text-center py-12 bg-vintage-burgundy/20 rounded-lg border-2 border-dashed border-vintage-gold/30"
              >
                <p className="font-body text-vintage-cream text-lg italic">
                  All caught up! No movies waiting in the queue.
                </p>
              </motion.div>
            )}
          </AnimatePresence>
        </section>

        {/* Watched Section */}
        <section>
          <div className="flex items-center gap-4 mb-6">
            <h2 className="font-title text-4xl font-bold text-vintage-gold">
              Watched
            </h2>
            <div className="flex-grow h-0.5 bg-gradient-to-r from-vintage-gold to-transparent" />
            <span className="font-mono text-vintage-cream text-sm">
              {watched.length} {watched.length === 1 ? 'stub' : 'stubs'}
            </span>
          </div>

          <AnimatePresence mode="popLayout">
            {watched.length > 0 ? (
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                {watched.map(movie => (
                  <MovieStub
                    key={movie.id}
                    movie={movie}
                    onTear={handleTear}
                    isWatched={true}
                  />
                ))}
              </div>
            ) : (
              <motion.div
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                className="text-center py-12 bg-vintage-burgundy/20 rounded-lg border-2 border-dashed border-vintage-gold/30"
              >
                <p className="font-body text-vintage-cream text-lg italic">
                  Start watching! Click a stub above to tear it and move it here.
                </p>
              </motion.div>
            )}
          </AnimatePresence>
        </section>

        {/* Footer hint */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.5 }}
          className="mt-16 text-center"
        >
          <p className="font-mono text-vintage-cream/60 text-sm">
            Click on a stub in "Want to Watch" to tear it away and mark as watched
          </p>
        </motion.div>
      </div>
    </div>
  )
}

export default App
