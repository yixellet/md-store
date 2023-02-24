import React, { useEffect, useRef } from "react";
import { Map as olMap, View } from "ol";
import TileLayer from "ol/layer/Tile";
import OSM from "ol/source/OSM";
import "ol/ol.css";
import { fromLonLat } from "ol/proj";
import styles from "./Map.module.css";

function Map() {

  const mapRef = useRef(null);

  const view = new View({
    center: fromLonLat([47.3, 47.15]),
    zoom: 8
  });

  const osmLayer = new TileLayer({
    source: new OSM(),
    zIndex: 0,
  });

  const map = new olMap({
    controls: [],
    view: view,
    layers: [osmLayer]
  });

  useEffect(() => {
    map.setTarget(mapRef.current);
  }, [map]);

  //console.log(view.calculateExtent())

  return (
    <div ref={mapRef} className={styles.map} id="map">
    </div>
  )
};

export default Map;