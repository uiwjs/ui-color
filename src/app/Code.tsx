import { useEffect, useState } from 'react';
import { RgbaColor } from '@uiw/color-convert';
import copyToClipboard from '@uiw/copy-to-clipboard';
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
  color?: RgbaColor;
};

export default function Code(props: CodeProps) {
  const { title, lang, code, color } = props || {};
  const [isCopy, setIsCopy] = useState(false);
  const [html, setHtml] = useState('');
  function copyHandle() {
    setIsCopy(true);
    copyToClipboard(code || '', (isCopy) => {
      let timer = setTimeout(() => {
        setIsCopy(false);
        clearTimeout(timer);
      }, 1000);
    });
  }
  useEffect(() => {
    let html = '';
    if (lang == 'swift') {
      html = Prism.highlight(code, Prism.languages.swift, 'swift');
    } else if (lang == 'csharp') {
      html = Prism.highlight(code, Prism.languages.csharp, 'csharp');
    } else if (lang == 'objectivec') {
      html = Prism.highlight(code, Prism.languages.objectivec, 'objectivec');
    }
    setHtml(html);
  }, [code]);
  return (
    <div className={styles.warpper}>
      <div className={styles.tool}>
        <div className={styles.title}>
          {color && (
            <span
              style={{
                marginRight: 10,
                borderRadius: 3,
                display: 'inline-block',
                minWidth: 12,
                minHeight: 12,
                transition: 'background-color 0.3s ease 0s',
                backgroundColor: `rgba(${color.r}, ${color.g}, ${color.b}, ${color.a})`,
              }}
            />
          )}
          {title}
        </div>
        <div className={`${styles.copy} ${isCopy ? styles.copied : ''}`} onClick={copyHandle}>
          {isCopy ? 'Copied' : 'Copy'}
        </div>
      </div>
      <pre className={styles.code}>
        <code className={`language-${lang}`} dangerouslySetInnerHTML={{ __html: html }} />
      </pre>
    </div>
  );
}
