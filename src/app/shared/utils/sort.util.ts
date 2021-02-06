export const sortABC = (data: any[]) => {
  return data.sort((a, b) => {
    if (a.toLowerCase() > b.toLowerCase()) {
      return 1;
    }
    if (a.toLowerCase() < b.toLowerCase()) {
      return -1;
    }
    return 0;
  });
};

export const sortByFieldABC = (data: any[], field: string) => {
  return data.sort((a, b) => {
    if (a[field].toLowerCase() > b[field].toLowerCase()) {
      return 1;
    }
    if (a[field].toLowerCase() < b[field].toLowerCase()) {
      return -1;
    }
    return 0;
  });
};

export const sortTextByCharacterABC = (data: any[], character: string, position: number) => {
  return data.sort((a, b) => {
    const auxA = a.split(character);
    const auxB = b.split(character);

    if (auxA[position].toLowerCase() > auxB[position].toLowerCase()) {
      return 1;
    }
    if (auxA[position].toLowerCase() < auxB[position].toLowerCase()) {
      return -1;
    }
    return 0;
  });
};

export const sortByFieldAndTextByCharacterABC = (data: any[], field: string, character: string, position: number) => {
  return data.sort((a, b) => {
    const auxA = a[field].split(character);
    const auxB = b[field].split(character);

    if (auxA[position].toLowerCase() > auxB[position].toLowerCase()) {
      return 1;
    }
    if (auxA[position].toLowerCase() < auxB[position].toLowerCase()) {
      return -1;
    }
    return 0;
  });
};
