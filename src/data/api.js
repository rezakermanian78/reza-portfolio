const API_BASE = "https://fastapi-api-production-b5eb.up.railway.app";

export async function fetchProjects() {
  try {
    const res = await fetch(`${API_BASE}/projects`);
    if (!res.ok) throw new Error("API error");
    const data = await res.json();
    return data.map(p => ({
      id: p.id,
      title: p.title,
      category: p.tags || "Project",
      description: p.description,
      technologies: p.tech_stack || [],
      live_url: p.live_url || "",
      github_url: p.github_url || "",
      featured: p.featured || false,
    }));
  } catch (e) {
    console.warn("API unavailable, using local data:", e.message);
    const { default: local } = await import("./projects.js");
    return local;
  }
}

export async function fetchPapers() {
  try {
    const res = await fetch(`${API_BASE}/papers`);
    if (!res.ok) throw new Error("API error");
    return await res.json();
  } catch (e) {
    console.warn("API unavailable, using local data:", e.message);
    const { default: local } = await import("./research.js");
    return local;
  }
}

export async function submitContact(name, email, message) {
  const res = await fetch(`${API_BASE}/contact`, {
    method: "POST",
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify({ name, email, message }),
  });
  if (!res.ok) throw new Error("Failed to send");
  return await res.json();
}
