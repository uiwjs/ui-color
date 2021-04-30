import copyTextToClipboard from '@uiw/copy-to-clipboard';
import { useState } from 'react';
import styles from './Code.module.css';

type CodeProps = {
  lang: string;
  code: string;
}

export default function Code(props: CodeProps) {
  const { lang, code } = props || {}
  const [isCopy, setIsCopy] = useState(false)
  function copyHandle() {
    setIsCopy(true)
    copyTextToClipboard(code || '', (isCopy) => {
      let timer = setTimeout(() => {
        setIsCopy(false)
        clearTimeout(timer)
      }, 1000)
    });
  }
  return (
    <div className={styles.warpper}>
      <div className={styles.tool}>
        <div className={styles.title}>{lang}</div>
        <div className={`${styles.copy} ${isCopy ? styles.copied: ''}`} onClick={copyHandle}>Copy</div>
      </div>
      <div className={styles.code}>
        {code}
      </div>
    </div>
  )
}