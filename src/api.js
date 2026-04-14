const API_BASE_URL = process.env.REACT_APP_API_URL?.replace(/\/$/, "") || "";

const buildApiUrl = (path) => `${API_BASE_URL}${path.startsWith("/") ? path : `/${path}`}`;

async function apiFetch(path, options = {}) {
  const response = await fetch(buildApiUrl(path), options);
  const contentType = response.headers.get("content-type") || "";
  const data = contentType.includes("application/json") ? await response.json() : null;

  if (!response.ok) {
    const message = data?.error || data?.message || response.statusText || "API request failed";
    throw new Error(message);
  }

  return data;
}

export function sendContactMessage(payload) {
  return apiFetch("/api/contact", {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify(payload),
  });
}

export function uploadCareerResume(formData) {
  return apiFetch("/api/careers", {
    method: "POST",
    body: formData,
  });
}
