import React from 'react';
import { render } from 'react-dom';

export default class Video extends React.Component {
  constructor(props) {
    super(props);
  }

  // YouTubeのURLをembed形式に変換
  getEmbedUrl(url) {
    if (!url) return null;
    
    // すでにembed形式なら、そのまま返す
    if (url.includes('/embed/')) {
      return url;
    }
    
    // watch?v=形式をembed形式に変換
    const videoId = url.split('v=')[1];
    if (videoId) {
      const ampersandPosition = videoId.indexOf('&');
      const cleanVideoId = ampersandPosition !== -1 
        ? videoId.substring(0, ampersandPosition) 
        : videoId;
      return `https://www.youtube.com/embed/${cleanVideoId}`;
    }
    
    return url;
  }

  render() {
    if (!this.props.video) return null;
    const wrapperClass = {
      overflow: 'hidden',
      paddingBottom: '56.25%',
      position: 'relative',
      height: 0,
    };
    const innerClass = {
      left: 0,
      top: 0,
      height: '100%',
      width: '100%',
      position: 'absolute',
    };
    return (
      <div className="uk-section">
        <h2 className="uk-heading-line uk-text-center" id="video">
          Video
        </h2>
        <div style={wrapperClass}>
          <iframe
            style={innerClass}
            className="uk-align-center uk-width-1-1"
            src={this.props.video}
            frameBorder="0"
            allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture"
            allowFullScreen
          ></iframe>
        </div>
      </div>
    );
  }
}
