import { getProjects } from "../../lib/projectService";

export async function renderProjects() {
  const container = document.querySelector("[data-projects-container]");
  if (!container) return;

  const projects = await getProjects();

  // Clear existing content
  container.innerHTML = "";

  projects.forEach((project) => {
    const workBox = document.createElement("div");
    workBox.classList.add("workBox");
    // workBox.setAttribute("data-cursor", "-exclusion");

    if (project.imageUrl) {
      workBox.setAttribute("data-cursor-img", project.imageUrl);
    }

    workBox.innerHTML = `
      <a href="${project.link || "#"}" target="_blank">
        ${project.title || ""}
      </a>
      <div class="workContent">
        <p>${project.services?.join(" • ") || ""}</p>
        <p>${project.tools?.join(" • ") || ""}</p>
      </div>
    `;

    container.appendChild(workBox);
  });
}

renderProjects();
