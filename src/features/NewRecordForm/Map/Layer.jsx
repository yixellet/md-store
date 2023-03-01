import { useEffect, useState } from 'react';
import { useSelector } from 'react-redux';
import VectorLayer from 'ol/layer/Vector';
import VectorSource from 'ol/source/Vector';
import { WKT } from 'ol/format';
import { Draw, Modify } from 'ol/interaction';

function Layer({ map }) {
  
  const geometry = useSelector(state => state.newRecord.geometry);
  const activeInputType = useSelector(state => state.newRecord.activeInputType);

  const [source, setSource] = useState(new VectorSource());

  const [layer, setLayer] = useState(new VectorLayer({
    map: map,
    zIndex: 100,
    visible: true,
  }));
  layer.setVisible(true);

  const [modify, setModify] = useState(new Modify({
    source: source
  }));

  const [draw, setDraw] = useState(new Draw({
    source: source,
    type: 'MultiPolygon',
    geometryName: 'owgrant'
  }));

  useEffect(() => {
    if (activeInputType === '1') {
      map.addInteraction(draw);
      map.addInteraction(modify);
      layer.setSource(source);
      draw.on('drawend', () => {
        map.removeInteraction(draw);
        const f = source.getFeaturesCollection();
        //const g = f.getGeometry();
        console.log(f)
      })
    } else {
      map.removeInteraction(draw);
      map.removeInteraction(modify);
      source.clear();
    };
  }, [activeInputType])

  useEffect(() => {
    if (activeInputType === '3' && geometry) {
      const feature = new WKT().readFeature(geometry);
      feature.getGeometry().transform('EPSG:4326', 'EPSG:3857');
      source.addFeature(feature);
      layer.setSource(source);
    } else {
      source.clear();
    };
  }, [geometry]);

  return null;
};

export default Layer;