export default function Navbar() {
    return (
        <nav className="fixed w-full bg-bgDark/80 backdrop-blur z-50 border-b border-gray-800">
            <div className="max-w-6xl mx-auto px-6 py-4 flex justify-between items-center">
                <h1 className="text-xl font-bold text-neon">Keval</h1>
                <div className="space-x-6 hidden md:block">
                    {["About", "Skills", "Projects", "Contact"].map((item) => (
                        <a
                            key={item}
                            href={`#${item.toLowerCase()}`}
                            className="hover:text-neon transition"
                        >
                            {item}
                        </a>
                    ))}
                </div>
            </div>
        </nav>
    );
}
  