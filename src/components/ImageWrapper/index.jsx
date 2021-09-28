import React from 'react';
import styles from './ImageWrapper.module.scss';

const ImageWrapper = (props) => {
  const {...restProps} = props;
  return (
    <div className={styles.wrapper} {...props} />

    // React.createElement('div', { className: `${styles.wrapper}`, ...restProps})

  );
}

export default ImageWrapper;

