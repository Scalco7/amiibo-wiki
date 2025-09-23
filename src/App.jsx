import { Button, TextField } from '@mui/material'
import SearchIcon from '@mui/icons-material/Search';
import './App.css'
import { useEffect, useState } from 'react'
import { AmiiboApi } from './api/amiibo-api'

const amiiboApi = new AmiiboApi()

function App() {
  const [searchValue, setSearchValue] = useState('')
  const [searcInputError, setSearchInputError] = useState(null)

  useEffect(() => {
    fetchAmiibos()
  }, [])

  async function fetchAmiibos() {
    console.log(await amiiboApi.getAmiibos())
  }

  async function searchAmiibos() {
    console.log(await amiiboApi.searchAmiibos('luigi'))
  }

  function onChangeTextField(event) {
    setSearchValue(event.target.value)
  }

  function onClickSearchButton() {
    setSearchInputError('Valor não deve ser nulo')
    searchAmiibos(searchValue)
  }

  return (
    <main>
      <img src='amibo-banner.png' alt='banner' />
      <div className="search-section">
        <div className='search-input'>
          <TextField
            id="text-input"
            label="Pesquisar"
            variant="outlined"
            value={searchValue}
            error={searcInputError}
            helperText={searcInputError}
            onChange={onChangeTextField}
            fullWidth
          />
        </div>

        <Button
          id="search-button"
          variant="outlined"
          size='large' style={{ padding: 0, height: 56, fontSize: 30 }}
          onClick={onClickSearchButton}
          disableElevation
        >
          <SearchIcon fontSize="inherit" />
        </Button>
      </div>
    </main>
  )
}

export default App
