import React from "react";

export default function Publications() {
  const publishedPapers = [
    {
      title: "Detection of Leading CNN Models for AI Image Accuracy and Efficiency",
      authors: "Meshal Nayim, Vishnu Mohan, Trilok Nath Pandey, Bibhuti Bhusan Dash, Bibek Bikram Dash, Sudhansu Shekhar Patra",
      year: 2024,
      conference: "2024 International Conference on Intelligent Algorithms for Computational Intelligence Systems (IACIS)",
      link: "https://ieeexplore.ieee.org/document/10721936",
      publisher: "IEEE",
    },
  ];

  const underReviewPapers = [
    {
      title: "Bioinformatic Analysis of Bladder Cancer and Adrenocortical Carcinoma Reveals Distinct Genomic and Clinical Features",
      authors: "Aidor Mbungu Baptista, Tat'y Mwata-Velu, Meshal Nayim, Tania Raymundo Ojeda",
      year: "Under Review"
    }
  ];

  const ongoing = [
    {
      title: "A Comparative Study of CNN and Transformer Architectures for Thyroid Cancer Diagnosis",
      authors: "Muhammed Tayyib, Meshal Nayim, et al.",
      year: "Under Review",
    },
    {
      title: "Cross-Lingual Emotion Detection: An Explainable AI Approach",
      authors: "Muhammad Ahmad, Abubakar Siddique, Segun Latinwo, Umhy Habiba, Meshal Nayim, Ildar Batyrshin, Rita Orji, Grigori Sidorov",
      year: "Under Review",
    },
  ];

  return (
    <section  id="pub" className="relative py-20 px-8  backdrop-blur-md text-white">
      <div className="max-w-6xl mx-auto">
        <h2 className="text-6xl font-bold text-center mb-16">Publications</h2>

        {/* Published Papers */}
        <div className="flex flex-col items-center space-y-16">
          {publishedPapers.length > 0 && (
            <div className="w-full max-w-3xl text-center">
              <h3 className="text-3xl font-semibold text-white-300 mb-6">Published Papers</h3>
              {publishedPapers.map((p, i) => (
                <a
                  key={i}
                  href={p.link}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="block bg-white/10 rounded-xl shadow-lg p-6 mb-6 text-left hover:scale-105 transform transition-transform duration-300"
                >
                  <h4 className="text-xl font-semibold text-white-300 mb-2">{p.title} ({p.year})</h4>
                  <p className="text-white-300 mb-1">{p.authors}</p>
                  <p className="text-white-400 text-sm">{p.conference} - {p.publisher}</p>
                </a>
              ))}
            </div>
          )}

          {/* Under Review Papers */}
          {underReviewPapers.length > 0 && (
            <div className="w-full max-w-3xl text-center">
              <h3 className="text-3xl font-semibold text-white-300 mb-6">Under Review</h3>
              {underReviewPapers.map((p, i) => (
                <div
                  key={i}
                  className="bg-white/10 rounded-xl shadow-lg p-6 mb-6 text-left hover:scale-105 transform transition-transform duration-300"
                >
                  <h4 className="text-xl font-semibold text-white-300 mb-2">{p.title}</h4>
                  <p className="text-white-300 mb-1">{p.authors}</p>
                  <p className="text-white-400 text-sm">{p.year}</p>
                </div>
              ))}
            </div>
          )}
          {/* On-going Research */}
          {underReviewPapers.length > 0 && (
            <div className="w-full max-w-3xl text-center">
              <h3 className="text-3xl font-semibold text-white-300 mb-6">On-going Research</h3>
              {ongoing.map((p, i) => (
                <div
                  key={i}
                  className="bg-white/10 rounded-xl shadow-lg p-6 mb-6 text-left hover:scale-105 transform transition-transform duration-300"
                >
                  <h4 className="text-xl font-semibold text-white-300 mb-2">{p.title}</h4>
                  <p className="text-white-300 mb-1">{p.authors}</p>
                  <p className="text-white-400 text-sm">{p.year}</p>
                </div>
              ))}
            </div>
          )}
        </div>
      </div>
    </section>
  );
}
