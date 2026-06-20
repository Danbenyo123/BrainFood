async function request(path, options = {}) {
  const res = await fetch(path, {
    headers: { 'Content-Type': 'application/json', ...options.headers },
    ...options,
  });
  const json = await res.json();
  if (!res.ok) throw new Error(json.error || `Request failed: ${res.status}`);
  return json.data;
}

export const get  = (path)         => request(path);
export const post = (path, body)   => request(path, { method: 'POST',   body: JSON.stringify(body) });
export const put  = (path, body)   => request(path, { method: 'PUT',    body: JSON.stringify(body) });
export const del  = (path)         => request(path, { method: 'DELETE' });
