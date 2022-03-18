import config from '@/services/config'

const pokemon = {
  getById: async (id) => {
    try {
      const response = await fetch(`${config.apiUrl}${id}`)
      return await response.json()
    } catch (error) {
      console.log(`Ocurrió un error: ${error}`)
    }
  }
}

export default pokemon
