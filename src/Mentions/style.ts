import { createStyles } from 'antd-style';

import { AutoSize } from './types';

const calculateHeight = (rows: number) => {
  return 32 + Math.max(rows - 1, 0) * 22;
};

export const useStyles = createStyles(
  ({ css, token, prefixCls }, { autoSize }: { autoSize?: AutoSize }) => {
    return {
      wrapper: css`
        position: relative;
        display: inline-block;
        width: 100%;
        min-width: 0;
      `,
      placeholder: css`
        pointer-events: none;
        user-select: none;

        position: absolute;
        top: 4px;
        left: 11px;

        color: ${token.colorTextPlaceholder};
      `,
      root: css`
        outline: none;
        border: 1px solid ${token.colorBorder};
        border-radius: ${token.borderRadius}px;

        margin: 0;
        padding: 4px 11px;

        color: ${token.colorText};
        font-size: ${token.fontSize}px;
        font-family: ${token.fontFamily};

        display: inline-block;

        width: 100%;
        min-width: 0;

        ${autoSize?.minRows &&
        css`
          min-height: ${calculateHeight(autoSize.minRows)}px;
        `}
        ${autoSize?.maxRows &&
        css`
          max-height: ${calculateHeight(autoSize.maxRows)}px;
        `}
        overflow: auto;

        transition: all ${token.motionDurationMid};
        &:focus {
          border-color: ${token.colorPrimaryBorder};
        }
        p {
          margin-bottom: 0;
          margin-block: 0 0;
        }
      `,
      filled: css`
        background: ${token.colorFillTertiary};
        border-color: transparent;
        &:hover {
          background: ${token.colorFillSecondary};
        }
        &:focus {
          background: ${token.colorBgBase};
        }
      `,
      borderless: css`
        background: transparent;
        border: none;
      `,
      disabled: css`
        cursor: not-allowed;
        color: ${token.colorTextDisabled};
        background: ${token.colorBgContainerDisabled};
      `,
    };
  }
);
