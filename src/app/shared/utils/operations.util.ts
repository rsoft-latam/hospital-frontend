export const toTwoDecimals = (value: number) => {
  if (value !== undefined && value !== null) {
    return parseFloat(value + '').toFixed(2);
  } else {
    return null;
  }
};

export const toFourDecimals = (value: number) => {
  if (value !== undefined && value !== null) {
    return parseFloat(value + '').toFixed(4);
  } else {
    return null;
  }
};

export const valueBy100TwoDecimals = (value: any) => {
  if (value !== undefined && value !== null) {
    return (parseFloat(value + '') * 100).toFixed(2);
  } else {
    return null;
  }
};
