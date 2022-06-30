import React, { useState, useEffect } from "react";
import table from "../data/ICONS";
import { Icon } from "@iconify/react";

const useIcon = (icon: string) => {
  const [_icon, _setIcon] = useState<React.ReactElement>();

  useEffect(() => {
    _setIcon(table[icon] ?? <Icon icon="emojione:warning" />);
  }, []);

  return (
    <div className="tooltip capitalize" data-tip={icon}>
      {_icon}
    </div>
  );
};

export default useIcon;
