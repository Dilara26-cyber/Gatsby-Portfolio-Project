import React from "react"
import { MapContainer, TileLayer, Popup } from "react-leaflet"
import MapPlaceHolder from "./MapPlaceHolder"
import "../assets/Popup.scss"
const Map = () => {
  return (
    <div>
      <MapContainer
        center={[25.7981929, -80.1988609]}
        zoom={17}
        className="map__container"
        zoomControl={false}
        scrollWheelZoom={false}
        dragging={false}
        placeholder={<MapPlaceHolder />}
      >
        <TileLayer
          url={`https://api.mapbox.com/styles/v1/dilara26/cknoiltnn505717nyyzdwdzvc/tiles/256/{z}/{x}/{y}@2x?access_token=${process.env.MAPBOX_API_KEY}`}
        />
        <Popup position={[25.7981929, -80.1988609]}>
          <div className="popup"></div>
        </Popup>
      </MapContainer>
    </div>
  )
}

export default Map
