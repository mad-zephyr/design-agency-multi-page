'use client';

import 'mapbox-gl/dist/mapbox-gl.css';

import { FC, useRef, useState } from 'react';
import {
  FullscreenControl,
  Map,
  MapRef,
  NavigationControl,
  // Popup,
  ScaleControl,
} from 'react-map-gl';

import styles from './styles.module.sass';

const MAPBOX_TOKEN = process.env.NEXT_PUBLIC_MAPBOX_API_TOKEN || '';

export type TMapLocation = {
  longitude: number;
  latitude: number;
  allowFullscreen: boolean;
  navigationControl: boolean;
  scaleControl: boolean;
};

export const MapLocation: FC<TMapLocation> = ({
  latitude,
  longitude,
  allowFullscreen,
  navigationControl,
  scaleControl,
}) => {
  const mapRef = useRef<MapRef | null>(null);

  const [position] = useState({
    longitude,
    latitude,
  });

  return (
    <div className={styles.main}>
      <Map
        antialias
        ref={mapRef}
        mapboxAccessToken={MAPBOX_TOKEN}
        initialViewState={{
          ...position,
          zoom: 13,
          bearing: 20,
          pitch: 0,
        }}
        mapStyle="mapbox://styles/madzephyr/cm59sm8yx00jg01sf0t9d0kit"
      >
        {allowFullscreen && <FullscreenControl position="top-left" />}
        {navigationControl && <NavigationControl position="top-left" />}
        {scaleControl && <ScaleControl position="top-right" />}
        {/* <Popup latitude={position.latitude} longitude={position.longitude} >
          Office
        </Popup> */}
        {/* <GeolocateControl position="top-left" showAccuracyCircle />*/}
      </Map>
    </div>
  );
};
