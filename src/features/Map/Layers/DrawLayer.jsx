import { useEffect, useState } from 'react';
import { useSelector } from 'react-redux';
import VectorLayer from 'ol/layer/Vector';
import VectorSource from 'ol/source/Vector';
import { Draw, Modify, Snap } from 'ol/interaction';

function DrawLayer({ map }) {
  
  const inputType = useSelector(state => state.newMd.activeInputType);

  const source = new VectorSource();
  const [layer, setLayer] = useState(new VectorLayer({
    map: map,
    zIndex: 20,
    source: source
  }));

  const modify = new Modify({source: source});  
  const draw = new Draw({
    source: source,
    type: "Polygon",
  });
  const snap = new Snap({source: source});
  map.addInteraction(modify);
  map.addInteraction(draw);
  map.addInteraction(snap);


  return null;
};

export default DrawLayer;