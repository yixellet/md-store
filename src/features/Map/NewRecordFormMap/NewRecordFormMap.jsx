import React, { useEffect, useRef, useState } from "react";
import { Map as olMap, View } from "ol";
import TileLayer from "ol/layer/Tile";
import OSM from "ol/source/OSM";
import "ol/ol.css";
import { fromLonLat } from "ol/proj";
import styles from "./NewRecordFormMap.module.css";

function NewRecordFormMap() {

  const mapRef = useRef(null);

  const [view, setView] = useState(new View({
    center: fromLonLat([47.3, 47.15]),
    zoom: 7
  }));

  const osmLayer = new TileLayer({
    source: new OSM(),
    zIndex: 0,
  });

  const [map, setMap] = useState(new olMap({
    controls: [],
    view: view,
    layers: [osmLayer]
  }));

  useEffect(() => {
    map.setTarget(mapRef.current);
  }, [map]);

  return (
    <div ref={mapRef} className={styles.map} id="formMap">
    </div>
  )
};

export default NewRecordFormMap;