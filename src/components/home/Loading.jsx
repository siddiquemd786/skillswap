// src/components/home/Loading.jsx
import React from 'react';

const Loading = () => {
    return (
        <div className="flex justify-center items-center h-screen bg-white">
      <span className="loading loading-dots loading-xl text-primary"></span>
    </div>
    );
};

export default Loading;