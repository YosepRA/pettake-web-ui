import { library } from '@fortawesome/fontawesome-svg-core';

import {
  faBars,
  faCircleXmark,
  faFilter,
  faSort,
} from '@fortawesome/free-solid-svg-icons';

function startIconLibrary() {
  const icons = [faBars, faFilter, faSort, faCircleXmark];

  library.add(...icons);
}

export default startIconLibrary;
