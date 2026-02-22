"use client"
import { useState } from 'react';
import Slider from '@mui/material/Slider';
import Box from '@mui/material/Box';

function valuetext(value: number) {
  return `${value}`;
}

const MUIRangeSlider: React.FC = () => {
  // Initial range values
  const [value, setValue] = useState<number[]>([20, 80]);

  const handleChange = (_: Event, newValue: number | number[]) => {
    setValue(newValue as number[]);
  };

  return (
    <Box>
      <Slider
        getAriaLabel={() => 'Range slider'}
        value={value}
        onChange={handleChange}
        valueLabelDisplay="auto"
        getAriaValueText={valuetext}
        min={1500000}
        max={2500000}
        step={100000}
        disableSwap
        sx={{
          color: '#EED8A4', // Custom track color
          '& .MuiSlider-thumb': {
            backgroundColor: '#EED8A4', // Custom thumb color
          },
        }}
      />
      <div className="flex justify-between text-sm" dir='ltr'>
        <span className='text-white font-text'>$ {value[0]}</span>
        <span className='text-white font-text'>$ {value[1]}</span>
      </div>
    </Box>
  );
};

export default MUIRangeSlider;
