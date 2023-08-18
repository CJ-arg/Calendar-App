

import { useCalendarStore, useUiStore } from '../../hooks';

export const FabDelete = () => {

  const { setActiveEvent } = useCalendarStore();

  openDateModal();
}
return (
  <button
    className="btn btn-primary fab-danger"
    onClick={handleClickNew}
  >
    <i className="fas fa-plus"></i>
  </button>
)
}