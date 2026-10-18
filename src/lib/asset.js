// Public files are referenced as "/images/...". On GitHub Pages a project site lives
// under "/<repo>/", so prefix those paths with Vite's base URL ("/" everywhere else).
export const asset = (path) => import.meta.env.BASE_URL + path.replace(/^\//, "");
