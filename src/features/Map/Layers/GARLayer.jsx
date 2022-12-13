import GeoJSON from 'ol/format/GeoJSON';
import VectorLayer from "ol/layer/Vector";
import VectorSource from "ol/source/Vector";
import { useState } from "react";
import { useGetGeometryQuery, useGetObjectQuery } from "../../../api/garApi";
import { useSelector } from "react-redux";
import { GARStyle } from '../Styles/styles';

function GARLayer(props) {
  const [skip, setSkip] = useState(true);

  const objectid = useSelector(state => state.gar.objectid);
  const isVisible = useSelector(state => state.gar.visible);
  const [garLayer, setLayer] = useState(new VectorLayer({
    zIndex: 2,
    style: GARStyle,
    map: props.map,
  }));
  const { data: object, isSuccess } = useGetObjectQuery(objectid);
  if (isSuccess) {
    setSkip((prev) => !prev)
  }
  const { data: geometry } = useGetGeometryQuery(object, {skip});
  
  garLayer.setVisible(isVisible);
  if (geometry) {
    const feature = new GeoJSON().readFeature(geometry.geom);
    feature.getGeometry().transform('EPSG:4326', 'EPSG:3857');
    garLayer.setSource(new VectorSource({
      features: [feature]
    }));
  } else {
    garLayer.setSource(new VectorSource());
  }

  return null;
};

export default GARLayer;