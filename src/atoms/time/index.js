import dayjs from 'dayjs';
import advancedFormat from 'dayjs/plugin/advancedFormat';
import { styled } from '../../stitches.config';

dayjs.extend(advancedFormat);

const StyledTime = styled('span', {
  color: '$darkGrey'
});

export default function Time({ timestamp }) {
  return (
    <StyledTime>
      {dayjs(timestamp).format("Do MMM 'YY")}
    </StyledTime>
  );
}
