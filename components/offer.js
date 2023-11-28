import * as React from 'react';
import ImageList from '@mui/material/ImageList';
import ImageListItem from '@mui/material/ImageListItem';
import Box from '@mui/material/Box';

export default function TitlebarBelowImageList() {
  return (
    <Box
      sx={{
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center',
      }}
    >
      <ImageListItem sx={{ marginRight: 10 }}>
        <img
          srcSet={`${itemData[0].img}?w=248&fit=crop&auto=format&dpr=2 2x`}
          src={`${itemData[0].img}?w=248&fit=crop&auto=format`}
          alt={itemData[0].title}
          loading="lazy"
        />
      </ImageListItem>
      <ImageListItem sx={{ marginRight: 10 }}>
        <img
          srcSet={`${itemData[1].img}?w=248&fit=crop&auto=format&dpr=2 2x`}
          src={`${itemData[1].img}?w=248&fit=crop&auto=format`}
          alt={itemData[1].title}
          loading="lazy"
        />
      </ImageListItem>
    </Box>
  );
}

const itemData = [
  {
    img: 'https://images.unsplash.com/photo-1551963831-b3b1ca40c98e',
    title: 'Breakfast',
    author: '@bkristastucchio',
  },
  {
    img: 'https://images.unsplash.com/photo-1551782450-a2132b4ba21d',
    title: 'Burger',
    author: '@rollelflex_graphy726',
  },
];
