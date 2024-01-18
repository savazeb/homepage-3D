"use client";

import Spline, { SplineProps } from "@splinetool/react-spline";

const Spline3D = (props: SplineProps) => {
  return (
    <div className='model-container'>
      <Spline
        scene={props.scene} />
    </div>
  );
};

export default Spline3D;
