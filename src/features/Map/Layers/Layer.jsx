import { useState } from 'react';
import { useSelector } from 'react-redux';
import VectorLayer from 'ol/layer/Vector';
import VectorSource from 'ol/source/Vector';
import { WKT } from 'ol/format';

function Layer({ map }) {
  
  const geometry = useSelector(state => state.newMd.geometry);
  const activeTab = useSelector(state => state.app.activeTab);

  const [layer, setLayer] = useState(new VectorLayer({
    map: map,
    zIndex: 10,
  }));
  layer.setVisible(true);

  if (geometry) {
    const feature = new WKT().readFeature(geometry);
    feature.getGeometry().transform('EPSG:4326', 'EPSG:3857');
    layer.setSource(new VectorSource({
      features: [feature]
    }));
  } else {
    layer.setSource(new VectorSource());
  }


  return null;
};

export default Layer;