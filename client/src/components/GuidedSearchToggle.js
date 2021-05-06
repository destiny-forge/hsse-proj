import Toggle from 'react-toggle';
import { GuidedSearchConsumer } from './GuidedSearchContext';

const GuidedSearchToggle = () => {
  return (
    <GuidedSearchConsumer>
      {({ toggled, toggle }) => (
        <Toggle defaultChecked={toggled} icons={false} onChange={toggle} />
      )}
    </GuidedSearchConsumer>
  );
};

export default GuidedSearchToggle;
