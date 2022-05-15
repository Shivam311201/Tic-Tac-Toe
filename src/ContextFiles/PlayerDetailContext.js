import React, { createContext, useState } from 'react';
export const PlayerDetailContext = createContext();

export function PlayerDetailProvider(props) {

  const[PlayerDetail, setPlayerDetail] = useState([]);

  return (
    <PlayerDetailContext.Provider value={[PlayerDetail, setPlayerDetail]}>
      {props.children}
    </PlayerDetailContext.Provider>
  );
};