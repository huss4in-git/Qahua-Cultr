export default function VideoSection() {
    return (
      <section className="bg-[#faf6ed] py-24">
        <div className="w-full px-6 md:px-12 xl:px-20">
          <div className="relative w-full h-[80vh] overflow-hidden ">
            <video
              className="w-full h-full object-cover"
              src="/public/video.mp4"
              autoPlay
              loop
              muted
              playsInline
            />
          </div>
        </div>
      </section>
    );
  }