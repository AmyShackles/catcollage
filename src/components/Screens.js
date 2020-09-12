import React from 'react';
import { createMediaListener } from '../helpers.js';
import { tomPhotos, bobPhotos, tomBobPhotos, pickRandomPhotos } from '../constants/images.js';

const withBreakPoints = (queries, type) => Component => {
    const media = createMediaListener(queries);
    return () => {
        const [state, setState] = React.useState({media: media.getState()});
        React.useEffect(() => {
            media.listen(media => setState({media}));
            return () => media.dispose();
        });
        return <Component media={state.media} type={type} />
        }
    };
  
const Screen = ({media, type}) => {
    let typeArray;
    if (type === 'Bob') {
      typeArray = bobPhotos
    } else if (type === 'Tom') {
      typeArray = tomPhotos
    } else if (type === 'Tom and Bob') {
      typeArray = tomBobPhotos;
    }
    let arr;
    if (media.big) {
        arr = pickRandomPhotos(typeArray, 'large');
    } else if (media.tiny) {
        arr = pickRandomPhotos(typeArray, 'small');
    } else {
        arr = pickRandomPhotos(typeArray, 'medium');
    }
    let photos = arr.map(([index, pic]) => {
        return (
        <div className={`div${index}`} key={index}>
          <picture>
            <source srcSet={pic.jpeg} type="image/jpeg"/>
            <source srcSet={pic.webp} type="image/webp"/>
            <img src={pic.jpeg} alt={`${type}`}/>
          </picture>
        </div>
        )
      })
    
    
      return (
        <div className="parent">
          {photos.map((photo) => photo)}
    
        </div>
      )
}
export const Tom = withBreakPoints({
    big: "(min-width: 1000px)",
    tiny: "(max-width: 600px)"
  }, 'Tom')(Screen);

export const Bob = withBreakPoints({
    big: "(min-width: 1000px)",
    tiny: "(max-width: 600px)"
}, 'Bob')(Screen);

export const TomAndBob = withBreakPoints({
    big: "(min-width: 1000px)",
    tiny: "(max-width: 600px)"
}, 'Tom and Bob')(Screen);