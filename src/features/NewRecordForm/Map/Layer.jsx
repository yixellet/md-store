import { useEffect, useState } from 'react';
import { useSelector } from 'react-redux';
import VectorLayer from 'ol/layer/Vector';
import VectorSource from 'ol/source/Vector';
import { WKT } from 'ol/format';

function Layer({ map }) {
  
  const geometry = useSelector(state => state.newRecord.geometry);

  const [source, setSource] = useState(new VectorSource());

  const [layer, setLayer] = useState(new VectorLayer({
    map: map,
    zIndex: 10,
    visible: true,
  }));
  layer.setVisible(true);

  useEffect(() => {
    if (geometry) {
      const feature = new WKT().readFeature(geometry);
      feature.getGeometry().transform('EPSG:4326', 'EPSG:3857');
      source.addFeature(feature)
      layer.setSource(source);
    } else {
      source.clear();
    };
  }, [geometry]);

  return null;
};

export default Layer;