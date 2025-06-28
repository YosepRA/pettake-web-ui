import { useSearchParams } from 'react-router';

import { listControlDefaultValues } from '@Data/index.js';
import { parseListFiltersSearch } from '@Utils/index.js';

function useParseListControlSearch() {
  const [searchParams] = useSearchParams();

  const parsedSearch = parseListFiltersSearch(
    listControlDefaultValues,
    searchParams,
  );

  return parsedSearch;
}

export default useParseListControlSearch;
