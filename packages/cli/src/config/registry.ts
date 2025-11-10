export const REGISTRY_CONFIG = {
  baseUrl: process.env.JOURNEY_UI_REGISTRY_URL || 'http://localhost:3001',
  endpoints: {
    components: '/api/components',
    health: '/api/health',
    categories: '/api/components/meta/categories'
  },
  timeout: 10000, // 10 segundos
  retries: 3
}

export function getRegistryUrl(endpoint: string): string {
  return `${REGISTRY_CONFIG.baseUrl}${endpoint}`
}