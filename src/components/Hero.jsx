export default function Hero() {
    return (
        <section className="min-h-screen flex items-center justify-center text-center px-6">
            <div>
                <h1 className="text-4xl md:text-6xl font-bold mb-4">
                    Hi, I'm <span className="text-neon">Keval Kathiriya</span>
                </h1>
                <h2 className="text-xl md:text-2xl mb-6 text-gray-300">
                    Data Analyst
                </h2>
                <p className="max-w-xl mx-auto text-gray-400 mb-8">
                    Turning data into actionable insights
                </p>
                <div className="flex gap-4 justify-center">
                    <a
                        href="#projects"
                        className="px-6 py-3 bg-neon text-black rounded-lg font-semibold hover:scale-105 transition"
                    >
                        View Projects
                    </a>
                    <a
                        href="/resume.pdf"
                        download
                        className="px-6 py-3 border border-neon rounded-lg hover:bg-neon hover:text-black transition"
                    >
                        Download Resume
                    </a>
                </div>
            </div>
        </section>
    );
}
  