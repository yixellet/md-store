import React, { useEffect, useRef, useState } from "react";
import { Map as olMap, View } from "ol";
import TileLayer from "ol/layer/Tile";
import OSM from "ol/source/OSM";
import "ol/ol.css";
import { fromLonLat } from "ol/proj";
import styles from "./Map.module.css";
import Layer from "./Layer";
import { useSelector } from "react-redux";

function Map() {

  const mapRef = useRef(null);

  const [view, setView] = useState(new View({
    center: fromLonLat([47.3, 47.15]),
    zoom: 7
  }));

  const [osmLayer, setOSMLayer] = useState(new TileLayer({
    source: new OSM(),
    zIndex: 0,
  }));

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
      <Layer map={map} />
    </div>
  )
};

export default Map;