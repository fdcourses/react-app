import React from 'react';
import { Component } from 'react';
import AlohaDashboard from './components/AlohaDashboard';
import ImageWrapper from './components/ImageWrapper';

class App extends Component {
  render() {
    return (
      <>
        <ImageWrapper
          style={{ maxWidth: '40px' }}
          onClick={() => {
            alert('Hello World');
          }}
        >
          <img
            alt=""
            src="https://img.pixers.pics/pho_wat(s3:700/FO/45/90/90/77/700_FO45909077_47da7ac1e3f857ea2af336add8196720.jpg,700,638,cms:2018/10/5bd1b6b8d04b8_220x50-watermark.png,over,480,588,jpg)/posters-angry-elephant-vector-mascot-illustration.jpg.jpg"
          />
        </ImageWrapper>

        <AlohaDashboard />
      </>
      // React.createElement(ImageWrapper, {style: {}})
    );
  }
}

export default App;
