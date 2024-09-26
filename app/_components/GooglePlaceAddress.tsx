'use client'

import React from 'react'
import GooglePlacesAutocomplete from 'react-google-places-autocomplete'

const GooglePlaceAddress = () => {
  return (
    <div>
         <GooglePlacesAutocomplete
      apiKey={process.env.NEXT_PUBLIC_GOOGLE_PLACE_API}
    />
    </div>
  )
}

export default GooglePlaceAddress