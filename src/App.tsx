import { ListMusic } from './components/ListMusic'
import songs from './data/songs.json'

function App() {
  return (
    <div className="flex items-center justify-center min-h-screen text-slate-800 bg-zinc-700">
      <div className="w-full max-w-lg px-4 py-10 my-10 bg-white rounded-lg shadow-2xl">
        <div className="h-56 -mx-4 -mt-10 bg-[url('/background-header.jpg')] bg-cover  flex items-end mb-8">
          <h1 className="w-full p-6 text-3xl font-bold text-left text-white bg-black bg-opacity-50">
            Playlist - Soft Pop Hits
          </h1>
        </div>
        <div className="">
          <div>
            <ListMusic musics={songs} />
          </div>
        </div>
      </div>
    </div>
  )
}

export default App
