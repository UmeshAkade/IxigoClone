import React from "react";

export const Card = ({ children }) => {
  return <div className='p-2.5'>{children}</div>;
};

export const CardContent = ({ children }) => {
  return <div className='space-y-3'>{children}</div>;
};
