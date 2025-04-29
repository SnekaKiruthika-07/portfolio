const container = document.getElementById("projects-container");
const loader = document.getElementById("loader");

let projectCount = 0;
const projectsPerLoad = 6;

const projects = [
  {
    title: "Purchase Behaviour",
    description:
      "This dashboard visualizes purchase behavior using charts like Pie Chart (Product Line vs. Total), Bar Chart (Gender vs. Quantity), and Line Chart (Total vs. Date). It highlights key insights such as top-performing product lines, gender-based purchasing patterns, and daily sales trends.",
    tool: "PowerBI",
    link: "https://snekakiruthika-k.github.io/Purchase-behaviour-DashBoard/",
  },
  {
    title: "Food Data Analysis",
    description:
      "This dashboard presents food consumption insights through visuals like Pie Chart (Type vs. Calories), Bar Chart (Food Items vs. Sugar), and Line Chart (Protein vs. Category). It helps identify nutritional trends, high-sugar foods, and protein-rich categories across different food types.",
    tool: "PowerBI",
    link: "https://snekakiruthika-k.github.io/food-data-dashboard/",
  },
  {
    title: "Churn Data Analysis",
    description:
      "This dashboard analyzes customer churn using visuals like Pie Chart (Churn vs. Count), Bar Chart (Contract Type vs. Churn), and Line Chart (Monthly Charges vs. Tenure). It helps identify key churn drivers, customer retention risks, and patterns in billing and contract preferences.",
    tool: "PowerBI",
    link: "https://snekakiruthika-k.github.io/churn-Data-Dashboard/",
  },
  {
    title: "Call Center Data Analysis",
    description:
      "This dashboard explores call center performance using charts like Pie Chart (Department vs. Calls), Bar Chart (Agent vs. Call Duration), and Line Chart (Calls vs. Time). It reveals trends in departmental call volumes, agent productivity, and peak calling hours.",
    tool: "PowerBI",
    link: "https://snekakiruthika-k.github.io/Call-Center-Data-DashBoard/",
  },
  {
    title: "Sales Data Analysis",
    description:
      "This dashboard showcases sales performance through visuals like Pie Chart (Region vs. Sales), Bar Chart (Product vs. Profit), and Line Chart (Sales vs. Date). It provides insights into regional sales distribution, top-performing products, and overall sales trends over time.",
    tool: "PowerBI",
    link: "https://snekakiruthika-k.github.io/Sales-Dashboard/",
  },
  {
    title: "HR Data Analysis",
    description:
      "This HR dashboard visualizes employee data using charts like Pie Chart (Department vs. Employee Count), Bar Chart (Salary vs. Department), and Line Chart (Age vs. Tenure). It provides insights into workforce distribution, salary trends, and employee retention over time.",
    tool: "PowerBI",
    link: "https://snekakiruthika-k.github.io/hr-dashboard/",
  },
];

function createProjectCard(project) {
  const card = document.createElement("div");
  card.className = "project-card hidden";
  card.innerHTML = `
    <h3>${project.title}</h3>
    <p class="project-description">${project.description}</p>
    <p class="project-tech">Tool: ${project.tool}</p>
    <a href="${project.link}" class="project-link" target="_blank">View Project</a>
  `;
  return card;
}


function revealCard(card, delay) {
  setTimeout(() => {
    card.classList.remove("hidden");
  }, delay);
}

function loadProjects() {
  loader.style.display = "block";
  setTimeout(() => {
    for (let i = 0; i < projectsPerLoad; i++) {
      if (projectCount >= projects.length) break;

      const project = projects[projectCount];
      const card = createProjectCard(project);
      container.appendChild(card);
      revealCard(card, i * 200);
      projectCount++;
    }
    loader.style.display = "none";
  }, 800);
}


// Scroll trigger
window.addEventListener("scroll", () => {
  if (window.innerHeight + window.scrollY >= document.body.offsetHeight - 100) {
    loadProjects();
  }
});

loadProjects();
