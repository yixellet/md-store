import { useState } from 'react';
import { useSelector } from 'react-redux';
import VectorLayer from 'ol/layer/Vector';
import VectorSource from 'ol/source/Vector';
import { WKT } from 'ol/format';

function DrawLayer({ map }) {
  
  const geometry = useSelector(state => state.newMd.geometry);

  const source = new VectorSource();
  const [layer, setLayer] = useState(new VectorLayer({
    map: map,
    zIndex: 20,
    source: source
  }));
  layer.setVisible(true);

  const modify = new Modify({source: source});
  map.addInteraction(modify);
  
  let draw, snap;
  const typeSelect = "Polygon";
  
  function addInteractions() {
    draw = new Draw({
      source: source,
      type: typeSelect,
    });
    map.addInteraction(draw);
    snap = new Snap({source: source});
    map.addInteraction(snap);
  };
  
  addInteractions();

  return null;
};

export default DrawLayer;