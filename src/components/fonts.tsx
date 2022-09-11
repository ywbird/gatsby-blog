import React from 'react';

const Font: React.FC<{ fonts: { name: string; wights: string[] }[] }> = ({
  fonts,
}) => {
  return (
    <link
      href={`https://fonts.googleapis.com/css?family=${fonts
        .map((font) => font.name.replace(' ', '+') + ':' + font.wights + '|')
        .join('')
        .slice(0, -1)}&display=swap`}
    />
  );
};

//https://fonts.googleapis.com/css?family=Noto+Sans+KR:400,400i,700,700i|Noto+Sans+CJK+KR:400,400i,700,700i|Nanum+Gothic:400,400i,700,700i|Source+Code+Pro&display=swap

export default Font;
