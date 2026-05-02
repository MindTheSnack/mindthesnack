export function getImagePath(path: string): string {
  const basePath = '/mindthesnack'
  if (path.startsWith('/')) {
    return `${basePath}${path}`
  }
  return path
}
