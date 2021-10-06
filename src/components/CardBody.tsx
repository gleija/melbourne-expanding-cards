import React from 'react';
import classes from './CardBody.module.css';

const CardBody: React.FunctionComponent = () => {
  const removeActiveClasses = (panels: NodeListOf<HTMLElement>) => {
    panels.forEach((panel: HTMLElement) => {
      panel.classList.remove(`${classes.active}`);
    });
  };

  const clickHandler = React.useCallback(
    (event: React.MouseEvent<HTMLDivElement>) => {
      const panels: NodeListOf<HTMLElement> =
        document.querySelectorAll<HTMLElement>(`.${classes.panel}`);
      panels.forEach((panel: HTMLElement) => {
        panel.addEventListener('click', () => {
          removeActiveClasses(panels);
          panel.classList.add(`${classes.active}`);
        });
      });
    },
    []
  );

  React.useEffect(() => {
    window.addEventListener('click', clickHandler as any);
    return () => {
      window.removeEventListener('click', clickHandler as any);
    };
  }, [clickHandler]);

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

  return (
    <div className={classes.container}>
      <Picture
        imageURL={'http://ns379011.ip-5-196-69.eu/img/beach.png'}
        description="Beach Houses - Brighton, VIC"
        onClick={clickHandler}
      />
      <Picture
        imageURL={'http://ns379011.ip-5-196-69.eu/img/st-kilda-rdd.png'}
        description="St Kilda rd - Melbourne, VIC"
        onClick={clickHandler}
      />
      <Picture
        imageURL={'http://ns379011.ip-5-196-69.eu/img/traininmel.png'}
        description="Box Hill, VIC"
        onClick={clickHandler}
      />
      <Picture
        imageURL={'http://ns379011.ip-5-196-69.eu/img/albert.png'}
        description="Albert park - Melbourne, VIC"
        onClick={clickHandler}
      />
      <Picture
        imageURL={'http://ns379011.ip-5-196-69.eu/img/pink.png'}
        description="Pink lake - Melbourne, VIC"
        onClick={clickHandler}
      />
    </div>
  );
};

export default CardBody;
