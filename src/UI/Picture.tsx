import React from 'react';
import classes from './Picture.module.css';

interface PictureProps {
  imageURL: string;
  description: string;
  onClick: (event: any) => void;
}

const Picture: React.FunctionComponent<PictureProps> = ({
  imageURL,
  description,
  onClick
}) => (
  <div
    className={classes.panel}
    style={{
      backgroundImage: `url(${imageURL})`
    }}
    onClick={onClick}
  >
    <h3>{description}</h3>
  </div>
);

export default Picture;
