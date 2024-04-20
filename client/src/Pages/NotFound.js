import React from 'react'
import { Button } from '@mui/material'

const NotFound = () => {
  return (
    <div>
      <iframe
        src="https://lottie.host/embed/a5043d7b-1ff2-4bee-a1ef-16b546ed88a4/coayGkaW54.json"
        height='500vh'
        width='100%'
        frameBorder='none'
        title='404 Not Found'
      >
      </iframe>

      <Button
        href='/'
        variant='contained'
        color='primary'
        sx={{ width: '20vw', marginLeft: '40vw' }}
      >
        Go Back To Home
      </Button>

    </div>
  )
}

export default NotFound