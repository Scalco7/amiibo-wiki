import { Button, TextField } from '@mui/material'
import SearchIcon from '@mui/icons-material/Search';
import './App.css'
import { useState } from 'react'
import { useAmiibo } from './contexts/AmiiboContext';

function App() {
  const [searchValue, setSearchValue] = useState('')
  const [searcInputError, setSearchInputError] = useState(null)
  const { amiibos, selectedAmiibo, selectAmiibo, searchAmiibos, resetSearch, loading } = useAmiibo()

  function onChangeTextField(event) {
    setSearchValue(event.target.value)
  }

  function onClickSearchButton() {
    console.log(amiibos)
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
          loading={loading}
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
