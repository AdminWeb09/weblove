const { useState, useEffect } = React;

function GirlfriendDayWebsite() {
  const [currentPage, setCurrentPage] = useState(0);
  const [isPlaying, setIsPlaying] = useState(true);

  const pages = [
    {
      title: "Selamat Hari Girlfriend Day!",
      message: "Untuk wanita terhebat dalam hidupku",
      image: "https://placeholder-image-service.onrender.com/image/400x500?prompt=Beautiful%20smiling%20woman%20with%20romantic%20background%20and%20flowers&id=gf1",
    },
    {
      title: "Kenangan Indah Kita",
      message: "Setiap momen bersamamu adalah berkah",
      image: "https://placeholder-image-service.onrender.com/image/400x500?prompt=Couple%20walking%20hand%20in%20hand%20at%20sunset%20romantic%20moment&id=gf2",
    },
    {
      title: "Terima Kasih Telah Ada",
      message: "Kamu membuat hidupku lebih berwarna",
      image: "https://placeholder-image-service.onrender.com/image/400x500?prompt=Romantic%20couple%20cuddling%20with%20hearts%20and%20love%20symbols&id=gf3",
    },
    {
      title: "Aku Sayang Kamu",
      message: "Selamanya dan selamanya",
      image: "https://placeholder-image-service.onrender.com/image/400x500?prompt=Couple%20sharing%20a%20tender%20moment%20with%20sparkling%20lights&id=gf4",
    }
  ];

  useEffect(() => {
    const audio = document.getElementById("bg-music");
    if (audio) {
      isPlaying ? audio.play() : audio.pause();
    }
  }, [isPlaying]);

  const nextPage = () => {
    setCurrentPage((prev) => (prev + 1) % pages.length);
  };

  const prevPage = () => {
    setCurrentPage((prev) => (prev - 1 + pages.length) % pages.length);
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-pink-100 to-red-100 flex flex-col items-center justify-center p-4">
      {/* Background Music */}
      <audio id="bg-music" loop autoPlay>
        <source src="https://www.soundhelix.com/examples/mp3/SoundHelix-Song-1.mp3" type="audio/mpeg" />
        Browser Anda tidak mendukung elemen audio.
      </audio>

      {/* Header */}
      <header className="text-center mb-8">
        <h1 className="text-4xl font-bold text-pink-600 mb-2">💖 Hari Girlfriend Day 💖</h1>
        <p className="text-lg text-pink-500">Untuk Pacar Tersayang</p>
      </header>

      {/* Main Content */}
      <div className="bg-white rounded-2xl shadow-xl p-6 max-w-md w-full">
        <div className="mb-6">
          <img 
            src={pages[currentPage].image}
            alt={pages[currentPage].title}
            className="w-full h-80 object-cover rounded-lg shadow-md"
          />
        </div>

        <div className="text-center mb-6">
          <h2 className="text-2xl font-bold text-gray-800 mb-2">
            {pages[currentPage].title}
          </h2>
          <p className="text-gray-600 leading-relaxed">
            {pages[currentPage].message}
          </p>
        </div>

        <div className="flex justify-center space-x-2 mb-6">
          {pages.map((_, index) => (
            <button
              key={index}
              onClick={() => setCurrentPage(index)}
              className={`w-3 h-3 rounded-full transition-all ${
                index === currentPage ? 'bg-pink-500' : 'bg-pink-200'
              }`}
              aria-label={Pergi ke halaman ${index + 1}}
            />
          ))}
        </div>

        <div className="flex justify-between items-center">
          <button
            onClick={prevPage}
            className="bg-pink-500 hover:bg-pink-600 text-white px-4 py-2 rounded-lg transition-colors flex items-center"
          >
            ← Sebelumnya
          </button>
          
          <span className="text-pink-500 font-medium">
            {currentPage + 1} / {pages.length}
          </span>
          
          <button
            onClick={nextPage}
            className="bg-pink-500 hover:bg-pink-600 text-white px-4 py-2 rounded-lg transition-colors flex items-center"
          >
            Selanjutnya →
          </button>
        </div>
      </div>

      <div className="mt-6">
        <button
          onClick={() => setIsPlaying(!isPlaying)}
          className="bg-white text-pink-500 px-4 py-2 rounded-full shadow-md hover:shadow-lg transition-all flex items-center space-x-2"
        >
          <span>{isPlaying ? '⏸' : '▶'}</span>
          <span>{isPlaying ? 'Pause Musik' : 'Play Musik'}</span>
        </button>
      </div>

      <footer className="mt-8 text-center text-pink-400">
        <p>Dibuat dengan ❤ untuk pacar tersayang</p>
      </footer>
    </div>
  );
}

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(<GirlfriendDayWebsite />);
