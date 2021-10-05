import React, { useState } from 'react';
import classes from './CardBody.module.css';

const CardBody: React.FunctionComponent = () => {
  const [activeClass, setActiveClass] = useState(`${classes.panel}`);
  // const activeClass = `${classes.panel} ${classes.active}`;

  const clickHandler = (event: any) => {
    console.log(event.target.id);
    setActiveClass(`${classes.panel} ${classes.active}`);
  };

  React.useEffect(() => {
    window.addEventListener('click', clickHandler);
    return () => {
      window.removeEventListener('click', clickHandler);
    };
  }, []);

  return (
    <div className={classes.container}>
      <div
        className={activeClass}
        style={{
          backgroundImage: `url('http://ns379011.ip-5-196-69.eu/img/beach.png')`
        }}
        id="beach"
        onClick={clickHandler}
      >
        <h3>Beach Houses - Brighton, VIC</h3>
      </div>
      <div
        className={classes.panel}
        style={{
          backgroundImage: `url('http://ns379011.ip-5-196-69.eu/img/st-kilda-rdd.png')`
        }}
        id="st-kilda"
        onClick={clickHandler}
      >
        <h3>St Kilda rd - Melbourne, VIC</h3>
      </div>
      <div
        className={classes.panel}
        style={{
          backgroundImage: `url('http://ns379011.ip-5-196-69.eu/img/traininmel.png')`
        }}
        id="boxhill"
        onClick={clickHandler}
      >
        <h3>Box Hill, VIC</h3>
      </div>
      <div
        className={classes.panel}
        style={{
          backgroundImage: `url('http://ns379011.ip-5-196-69.eu/img/albert.png')`
        }}
        id="albert"
        onClick={clickHandler}
      >
        <h3>Albert park - Melbourne, VIC</h3>
      </div>
      <div
        className={classes.panel}
        style={{
          backgroundImage: `url('http://ns379011.ip-5-196-69.eu/img/pink.png')`
        }}
        id="pink"
        onClick={clickHandler}
      >
        <h3>Pink lake - Melbourne, VIC</h3>
      </div>
    </div>
  );
};

export default CardBody;
