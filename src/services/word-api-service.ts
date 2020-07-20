import http from './http-common.js'
import { newsApiKey } from '../../public/assets/api-keys.js'

export const getWordInfo = (query: String) => {
  return http.get(`?q=${query}&language=pt&sortBy=publishedAt&apiKey=${newsApiKey}`)
}
