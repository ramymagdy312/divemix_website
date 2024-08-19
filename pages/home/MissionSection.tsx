import React from "react";
import aboutData from "@/data/aboutData.json";

const MissionSection = () => {
  return (
    <section className="mission-section">
      <div className="container my-5">
        {aboutData.map((section) => (
          <div key={section.id} className="mb-4">
            <h2 className="text-capitalize fw-bold clrMain mb-3">
              {section.name}
            </h2>
            <p>{section.desc}</p>
            {section.child.length > 0 && (
              <ul className="list-group list-group-flush">
                {section.child.map((childItem) => (
                  <li key={childItem.id} className="list-group-item">
                    <h5 className="fw-bold mb-2">{childItem.name}</h5>
                    <p>{childItem.desc}</p>
                  </li>
                ))}
              </ul>
            )}
          </div>
        ))}
      </div>
    </section>
  );
};

export default MissionSection;
