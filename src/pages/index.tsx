import styles from './index.less';
import ContentIndex from '../layouts/contentIndex'

export default function IndexPage() {
  return (
    <div className={ styles.init }>
      <div className={ styles.constraintWith }>
      <ContentIndex></ContentIndex>
      </div>
    </div>
  );
}
