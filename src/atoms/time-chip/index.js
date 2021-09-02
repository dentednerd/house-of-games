import dayjs from 'dayjs';
import advancedFormat from 'dayjs/plugin/advancedFormat';
import Chip from '../chip';

dayjs.extend(advancedFormat);

export default function TimeChip({ timestamp }) {
  return (
    <Chip
      text={dayjs(timestamp).format("Do MMM 'YY")}
      color="grey"
    />
  );
}
