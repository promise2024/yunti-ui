import { LogViewer } from '@yuntijs/ui';

export default () => {
  return (
    <LogViewer
      caseInsensitive
      enableHotKeys
      enableSearch
      extraLines={1}
      height={520}
      onLineContentClick={function noRefCheck() {}}
      selectableLines
      url="https://gist.githubusercontent.com/helfi92/96d4444aa0ed46c5f9060a789d316100/raw/ba0d30a9877ea5cc23c7afcd44505dbc2bab1538/typical-live_backing.log"
    />
  );
};
