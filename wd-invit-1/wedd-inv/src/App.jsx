import Image from './assets/lisa.jpg'


function App() {
  return (
    <div className="App bg-slate-300 min-h-screen font-sans">
      <div className="bg-white flex justify-around py-4">
        <span>Home</span>
        <span>Our Stories</span>
        <span>Wedding</span>
        <span className="relative">
          <div className="absolute w-20 h-20 bg-white rounded-full p-3 -ml-5 -mt-2">
            LOGO
          </div>
        </span>
        <span>Gallery</span>
        <span>Congratulation</span>
        <span>Invitations</span>
      </div>

      <div
      className='h-screen bg-cover bg-center flex flex-col justify-center items-center'
      style={{
        backgroundImage: `url(${Image})`,
      }}
      >
        <div className='text-white text-5xl text-center'>
          <p className='font-light italic'>hallo slurr, kamu telah di undang ke acara pemakaman</p>
          <p className='font-bold'>hammad dan hammid</p>
          <p className='font-light italic'>minggu 3 februari 2024, di tempat</p>
        </div>

        <div>
          <button className='bg-white rounded-full px-4 py-2'>Reminder</button>
        </div>

      </div>
    </div>
  )
}

export default App