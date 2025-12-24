export default function Certifications() {
    const certs = [
        "Microsoft Excel with AI (2025)",
        "Microsoft Power BI (2025)",
        "SQL Course (2025)",
        "AI Tools Workshop – be10X (2025)",
    ];

    return (
        <section className="bg-cardDark py-20">
            <div className="max-w-5xl mx-auto px-6">
                <h2 className="text-3xl font-bold text-neon mb-6">Certifications</h2>
                <ul className="space-y-3 text-gray-300">
                    {certs.map((c) => (
                        <li key={c}>• {c}</li>
                    ))}
                </ul>
            </div>
        </section>
    );
}
  