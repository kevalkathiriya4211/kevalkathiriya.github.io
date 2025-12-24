import { useState } from "react";
import credit from "../assets/Credit_Card_Data_Analysis_Report.PNG";
import meta from "../assets/Facebook_AD_Data_Analysis.PNG";
import blinkit from "../assets/Blinkit_Dashboard.PNG";
import mobile from "../assets/mobile_Sales.PNG";

const projects = [
    {
        title: "Credit Card Revenue & Customer Behaviour",
        tools: "Power BI, SQL",
        img: credit,
        link: "https://github.com/kevalkathiriya4211/Credit-Card-Data-Analysis.git",
        desc: "Analyzed 8K+ transactions to identify high-value customers and spending patterns.",
    },
    {
        title: "Meta Ads Performance Dashboard",
        tools: "Power BI",
        img: meta,
        link: "https://github.com/kevalkathiriya4211/Facebook-Instagram-AD-Data-Analysis.git",
        desc: "Built ROAS, conversion funnel, and audience demographic insights.",
    },
    {
        title: "Blinkit Sales & Outlet Performance",
        tools: "Excel",
        img: blinkit,
        link: "https://github.com/kevalkathiriya4211/Blinkit-Excel-Analysis.git",
        desc: "Analyzed category-wise and outlet-tier sales performance.",
    },
    {
        title: "Mobile Sales Performance Analysis",
        tools: "Power BI, DAX",
        img: mobile,
        link: "https://github.com/kevalkathiriya4211/Sales-Data-Analysis.git",
        desc: "Analyzed $769M sales across cities, brands, and payment methods.",
    },
];

export default function Projects() {
    const [active, setActive] = useState(null);

    return (
        <section id="projects" className="max-w-6xl mx-auto px-6 py-20">
            <h2 className="text-3xl font-bold text-neon mb-10">Projects</h2>

            <div className="grid md:grid-cols-2 gap-8">
                {projects.map((p, i) => (
                    <div
                        key={i}
                        className="bg-cardDark p-5 rounded-xl border border-gray-700 hover:border-neon transition cursor-pointer"
                        onClick={() => setActive(p)}
                    >
                        <img src={p.img} className="rounded-lg mb-4" />
                        <h3 className="text-xl font-semibold">{p.title}</h3>
                        <p className="text-gray-400 text-sm mb-2">{p.tools}</p>
                        <p className="text-gray-300 text-sm">{p.desc}</p>
                    </div>
                ))}
            </div>

            {/* Modal */}
            {active && (
                <div className="fixed inset-0 bg-black/80 flex items-center justify-center z-50">
                    <div className="bg-cardDark max-w-3xl p-6 rounded-xl relative">
                        <button
                            className="absolute top-2 right-4 text-xl"
                            onClick={() => setActive(null)}
                        >
                            ✕
                        </button>
                        <img src={active.img} className="rounded-lg mb-4" />
                        <h3 className="text-2xl font-bold">{active.title}</h3>
                        <p className="text-gray-400 mb-4">{active.tools}</p>
                        <a
                            href={active.link}
                            target="_blank"
                            className="text-neon underline"
                        >
                            View GitHub →
                        </a>
                    </div>
                </div>
            )}
        </section>
    );
}
