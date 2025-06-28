// Parse list filters from search params and return an object.
function parseListFiltersSearch(model, searchParams) {
  const parsedSearch = {};
  const keys = Object.keys(model);

  for (const [key, value] of searchParams.entries()) {
    if (keys.includes(key)) {
      if (Array.isArray(model[key])) {
        parsedSearch[key] =
          parsedSearch[key] !== undefined
            ? parsedSearch[key].concat(value)
            : [value];

        continue;
      }

      parsedSearch[key] = value;
    }
  }

  return parsedSearch;
}

export default parseListFiltersSearch;
