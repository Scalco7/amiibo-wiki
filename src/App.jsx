import { TextField } from '@mui/material'
import './App.css'
import { useEffect } from 'react'
import { AmiiboApi } from './api/amiibo-api'

const amiiboApi = new AmiiboApi()

function App() {
  useEffect(() => {
    fetchAmiibos()
    searchAmiibos()
  }, [])

  async function fetchAmiibos() {
    console.log(await amiiboApi.getAmiibos())
  }

  async function searchAmiibos() {
    console.log(await amiiboApi.searchAmiibos('luigi'))
  }

  return (
    <main>
      <TextField id="text-input" label="Outlined" variant="outlined" />
    </main>
  )
}

export default App
