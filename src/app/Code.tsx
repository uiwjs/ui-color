import copyTextToClipboard from '@uiw/copy-to-clipboard';
import { useEffect, useState } from 'react';
import Prism from 'prismjs';
import 'prismjs/components/prism-csharp';
import 'prismjs/components/prism-swift';
import 'prismjs/components/prism-c';
import 'prismjs/components/prism-objectivec';
import styles from './Code.module.css';
import './prism.css';

type CodeProps = {
  title: string;
  lang: string;
  code: string;
}

export default function Code(props: CodeProps) {
  const { title, lang, code } = props || {}
  const [isCopy, setIsCopy] = useState(false)
  const [html, setHtml] = useState('')
  function copyHandle() {
    setIsCopy(true)
    copyTextToClipboard(code || '', (isCopy) => {
      let timer = setTimeout(() => {
        setIsCopy(false)
        clearTimeout(timer)
      }, 1000)
    });
  }
  useEffect(() => {
    let html = ''
    if (lang == 'swift') {
      html = Prism.highlight(code, Prism.languages.swift, 'swift');
    } else if (lang == 'csharp') {
      html = Prism.highlight(code, Prism.languages.csharp, 'csharp');
    } else if (lang == 'objectivec') {
      html = Prism.highlight(code, Prism.languages.objectivec, 'objectivec');
    }
    setHtml(html)
  }, [code])
  return (
    <div className={styles.warpper}>
      <div className={styles.tool}>
        <div className={styles.title}>{title}</div>
        <div className={`${styles.copy} ${isCopy ? styles.copied: ''}`} onClick={copyHandle}>{isCopy ? 'Copied' : 'Copy'}</div>
      </div>
      <pre className={styles.code}>
        <code className={`language-${lang}`} dangerouslySetInnerHTML={{ __html: html}} />
      </pre>
    </div>
  )
}