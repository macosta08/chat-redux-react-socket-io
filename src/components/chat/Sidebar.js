import React from "react";
import { useDispatch } from "react-redux";

import { startLogout } from "../../actions/auth";

export const Sidebar = () => {
  const dispatch = useDispatch();

  const hanleLogout = () => {
    dispatch(startLogout());
  };

  return (
    <aside>
      <div>
        <h3>
          <i className="far fa-moon"></i>
          <span>Mariangel</span>
        </h3>

        <button onClick={hanleLogout}>Logout</button>
      </div>

      <div>
        {/* <i className="far fa-calendar-plus fa-5x"></i> */}
        <p>New entry</p>
      </div>
    </aside>
  );
};
