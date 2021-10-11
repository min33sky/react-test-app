import React from 'react';

interface IOption {
  name: string;
  description?: string;
  imagePath?: string;
}

function Options({ name, description, imagePath }: IOption) {
  return (
    <div>
      <p></p>
    </div>
  );
}

export default Options;
