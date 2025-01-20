import { Typography as AntdTypography, Tooltip } from 'antd';
import type { TooltipPropsWithTitle } from 'antd/es/tooltip';
import type { TextProps } from 'antd/es/typography/Text';
import dayjs from 'dayjs';
import dayjsRelativeTime from 'dayjs/plugin/relativeTime';
import { set } from 'lodash-es';
import React, { useCallback, useEffect, useState } from 'react';

dayjs.extend(dayjsRelativeTime);

export const Typography = AntdTypography as TypographyProps;

interface TimeProps extends TextProps {
  /**
   * @description Set display time
   * @default '-'
   */
  time: string;
  /**
   * @description Formatted display time
   * @default 'YYYY-MM-DD HH:mm:ss'
   */
  format?: string;
  /**
   * @description Display relative time
   * @default 'true'
   */
  relativeTime?: boolean;
  /**
   * @description Mouse above to show time
   * @default '{title: "YYYY-MM-DD HH:mm:ss"}'
   */
  tooltip?: TooltipPropsWithTitle;
}
const getFromNow = (t: any) => dayjs(t ? new Date(t) : new Date()).fromNow();
const Time: React.FC<TimeProps> = props => {
  const { time, format, relativeTime = true, tooltip, ...textProps } = props;
  const [showTime, setShowTime] = useState(getFromNow(time));

  // The relative time within the last hour is updated automatically
  const setTimeInterval = useCallback((currentTime: dayjs.ConfigType) => {
    const now = dayjs();
    const timeMoment = dayjs(currentTime);
    const diff = now.diff(timeMoment);
    if (diff > 0 && diff < 60 * 60 * 1000) {
      return setInterval(() => {
        setShowTime(getFromNow(currentTime));
      }, 60 * 1000);
    }
  }, []);

  useEffect(() => {
    let timeout: NodeJS.Timeout | undefined;
    if (relativeTime) {
      timeout = setTimeInterval(new Date(time));
    }
    return () => {
      if (timeout) {
        clearInterval(timeout);
      }
    };
  }, [relativeTime, setTimeInterval, time]);

  useEffect(() => {
    if (!relativeTime) return;
    const nextFromNow = getFromNow(time);
    if (nextFromNow !== showTime) {
      setShowTime(nextFromNow);
      setTimeInterval(new Date(time));
    }
  }, [time, relativeTime, showTime, setTimeInterval]);

  const fmtTime = dayjs(time).format(format || 'YYYY-MM-DD HH:mm:ss');

  const currentTime = relativeTime ? showTime : fmtTime;

  const tooltipTitle = tooltip?.title ?? (relativeTime ? fmtTime : undefined);

  // Avoid duplicate tooltips
  if (tooltipTitle) {
    set(textProps, 'ellipsis.tooltip.title', undefined);
  }

  return (
    <Tooltip {...(tooltip || {})} title={tooltipTitle}>
      <Typography.Text {...textProps}>{currentTime}</Typography.Text>
    </Tooltip>
  );
};

export type TypographyProps = typeof AntdTypography & {
  Time: typeof Time;
};

Typography.Time = Time;

export default Typography;
