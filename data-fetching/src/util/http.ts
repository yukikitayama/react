export async function get(url: string) {
  const response = await fetch(url);

  // Whether request was successful
  if (!response.ok) {
    throw new Error("Failed to fetch data");
  }

  const data = await response.json() as unknown;
  return data;
}
