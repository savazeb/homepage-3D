"use client";


import { Spline3DProps } from "@/interfaces/props";
import Spline from "@splinetool/react-spline";

const Spline3D: React.FunctionComponent<Spline3DProps> = ({ className, ...props }) => {
  return (
    <div className={className}>
      <Spline {...props} />
    </div>
  );
};

export default Spline3D;
