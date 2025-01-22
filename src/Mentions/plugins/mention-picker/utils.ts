import { MenuOption } from '@lexical/react/LexicalTypeaheadMenuPlugin';

export interface MentionMenuOptionInitParams {
  label: string;
  value: string;
  data?: any;
  icon?: JSX.Element;
  extraElement?: JSX.Element;
  keywords?: Array<string>;
  keyboardShortcut?: string;
  disabled?: boolean;
  onSelect: (queryString: string) => void;
  children?: MentionMenuOptionInitParams[];
}

export class MentionMenuOption extends MenuOption {
  label: string;
  value: string;
  // for Tree, the same as label
  title: string;
  // for Tree, the same as value
  key: string;
  icon?: JSX.Element;
  extraElement?: JSX.Element;
  keywords: Array<string>;
  keyboardShortcut?: string;
  onSelect: (queryString: string) => void;
  disabled?: boolean;
  data?: any;
  children?: MentionMenuOption[];

  constructor({
    label,
    value,
    data,
    icon,
    extraElement,
    keywords,
    keyboardShortcut,
    disabled,
    onSelect,
    children,
  }: MentionMenuOptionInitParams) {
    super(value);
    this.value = value;
    this.label = label;
    this.title = label;
    this.key = value;
    this.keywords = keywords || [];
    this.icon = icon;
    this.extraElement = extraElement;
    this.keyboardShortcut = keyboardShortcut;
    this.onSelect = onSelect.bind(this);
    this.disabled = disabled;
    this.data = data;
    this.children = children?.map(m => {
      // const
      return new MentionMenuOption(m);
    });
  }
}
