import React from "react";
import { MOCKS } from "./ProjectMocks.jsx";

// A project's cover: a real screenshot if one is set, otherwise the drawn interface preview,
// held at a slight 3D angle that settles flat when the surrounding card is hovered.
export default function ProjectCover({ project, className = "" }) {
  const Mock = MOCKS[project.cover];
  return (
    <div className={`cover grain cover-${project.accent || "gold"} ${className}`}>
      <div className="cover-mock">
        {project.image ? (
          <img
            src={project.image}
            alt={`${project.title} screenshot`}
            loading="lazy"
            decoding="async"
            className="block w-full h-auto rounded-[10px]"
          />
        ) : (
          Mock && <Mock />
        )}
      </div>
    </div>
  );
}
