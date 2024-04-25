export const backendUrl = import.meta.env.VITE_BACKEND_URL || "http://localhost:3006";

//VITE_BACKEND_URL fürs deployment mit vite
//anstelle von:     fetch("http://localhost:3006/api/v1/...")
// machen wir:      fetch(backendUrl + "/api/v1/...")
// oder:            fetch(`${backendUrl}/api/v1/...`)
