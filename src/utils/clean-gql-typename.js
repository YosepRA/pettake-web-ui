function cleanGQLTypename(data) {
  if (Array.isArray(data)) {
    return data.map(cleanGQLTypename);
  }

  if (typeof data === 'object') {
    const result = {};

    Object.keys(data).forEach((key) => {
      if (key !== '__typename') {
        result[key] = cleanGQLTypename(data[key]);
      }
    });

    return result;
  }

  return data;
}

export default cleanGQLTypename;
