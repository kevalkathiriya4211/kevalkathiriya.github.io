const skills = [
    "Excel", "Power BI", "SQL", "Python",
    "Power Query", "MySQL", "PostgreSQL",
    "Data Visualization", "Critical Thinking"
];

export default function Skills() {
    return (
        <section id="skills" className="bg-cardDark py-20">
            <div className="max-w-5xl mx-auto px-6">
                <h2 className="text-3xl font-bold text-neon mb-8">Skills</h2>
                <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
                    {skills.map((skill) => (
                        <div
                            key={skill}
                            className="bg-bgDark p-4 rounded-lg text-center border border-gray-700 hover:border-neon transition"
                        >
                            {skill}
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
}
  