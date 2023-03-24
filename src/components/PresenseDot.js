import React from 'react';
import { Badge, Tooltip, Whisper } from 'rsuite';
import { usePresense } from '../misc/custom-hooks';

const getColor = presense => {
  if (!presense) {
    return 'gray';
  }

  switch (presense.state) {
    case 'online':
      return 'green';
    case 'offline':
      return 'red';
    default:
      return 'gray';
  }
};

const getText = presense => {
  if (!presense) {
    return 'Unknown State';
  }

  return presense.state === 'online'
    ? 'Online'
    : `Last online ${new Date(presense.last_changed).toLocaleDateString()}`;
};

const PresenseDot = ({ uid }) => {
  const presense = usePresense(uid);

  return (
    <Whisper
      placement="top"
      trigger="hover"
      speaker={<Tooltip>{getText(presense)}</Tooltip>}
    >
      <Badge
        className="cursor-pointer"
        style={{ backgroundColor: getColor(presense) }}
      />
    </Whisper>
  );
};

export default PresenseDot;
