import { useRef, useState } from 'react';
import { SketchPicker, ColorResult, RGBColor } from 'react-color'
import styles from './App.module.css'
import Code from './Code'

export default function App() {
  const [color, setColor] = useState<RGBColor>({r: 224, g: 224, b: 224, a: 0.61})
  const handleColorChange = (data: ColorResult) => {
    setColor(data.rgb)
  }

  return (
    <div
      style={{
        backgroundColor: `rgba(${color.r}, ${color.g}, ${color.b}, ${color.a})`
      }}
    >
      <div className={styles.header}>
        <div>
          <SketchPicker
            color={color}
            onChange={handleColorChange}
          />
          <div className={styles.footer}>
            <div>Copyright © Color 2021.</div>
            <div>Developed by <a href="https://github.com/uiwjs" target="__blank">uiw</a>.</div>
          </div>
        </div>
        <div className={styles.code}>
          <Code lang="swift" title="SwiftUI" code={`Color(red: ${color.r / 100}, green: ${color.g / 100}, blue: ${color.b / 100}).opacity(${color.a})`} />
          <Code lang="swift" title="Swift for iOS" code={`UIColor(red: ${color.r / 100}, green: ${color.g / 100}, blue: ${color.b / 100}, alpha: ${color.a})`} />
          <Code lang="swift" title="Swift for macOS" code={`NSColor(red: ${color.r / 100}, green: ${color.g / 100}, blue: ${color.b / 100}, alpha: ${color.a})`} />
          <Code lang="objectivec" title="Objective-C for iOS" code={`[UIColor colorWithRed: ${color.r / 100} green: ${color.g / 100} blue: ${color.b / 100} alpha: ${color.a}];`} />
          <Code lang="objectivec" title="Objective-C for macOS" code={`[NSColor colorWithCalibratedRed: ${color.r / 100} green: ${color.g / 100} blue: ${color.b / 100} alpha: ${color.a}];`} />
          <Code lang="csharp" title="Xamarin (C#)" code={`new UIColor(red: ${color.r / 100}f, green: ${color.g / 100}f, blue: ${color.b / 100}f, alpha: ${color.a}f)`} />
        </div>
      </div>
    </div>
  )
};
