import styles from './index.less'

function TitleText ( props: {
    content : string,
} ) {
    return (
        <div className = { styles.root }>{ props.content }</div>
    );
}

export default TitleText;