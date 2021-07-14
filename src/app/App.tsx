import { useMemo, useState } from 'react';
import GitHubCorners from '@uiw/react-github-corners';
import { rgbaToHsva, RgbaColor, ColorResult } from '@uiw/color-convert';
import Circle, { CircleProps } from '@uiw/react-color-circle';
import Sketch from '@uiw/react-color-sketch';
import styles from './App.module.css';
import Code from './Code';
import colorsData from './colors.json';

function CircleColors(props: CircleProps & { title?: string; index: number }) {
  const { index, ...other } = props;
  const color = (props.colors || []).join('');
  return useMemo(() => {
    return (
      <div className={styles.color}>
        <Circle {...other} />
        <label>{props.title}</label>
      </div>
    );
  }, [color, index]);
}

export default function App() {
  const [color, setColor] = useState<RgbaColor>({ r: 224, g: 224, b: 224, a: 0.61 });
  const [hex, setHex] = useState('#E0E0E0');
  const handleColorChange = (data: ColorResult) => {
    setColor(data.rgba);
    setHex(data.hex);
  };
  const handleSwatchesPicker = (data: ColorResult) => {
    setColor(data.rgba);
    setHex(data.hex);
  };

  return (
    <div
      style={{
        backgroundColor: `rgba(${color.r}, ${color.g}, ${color.b}, ${color.a})`,
      }}
    >
      <GitHubCorners fixed zIndex={999} size={60} target="__blank" href="https://github.com/uiwjs/ui-color" />
      <div className={styles.warpper}>
        <div className={styles.colors}>
          <div>
            {colorsData.map((item, idx) => (
              <CircleColors
                index={item.colors.indexOf(hex.toLocaleUpperCase())}
                color={hex}
                key={idx}
                {...item}
                onChange={handleSwatchesPicker}
              />
            ))}
          </div>
        </div>
        <div className={styles.pane}>
          <div>
            <Sketch color={rgbaToHsva(color)} onChange={handleColorChange} />
            <div className={styles.footer}>
              <div>Copyright © uiwjs 2021.</div>
              <div>
                Developed by{' '}
                <a href="https://github.com/uiwjs" target="__blank">
                  Kenny
                </a>
                .
              </div>
            </div>
          </div>
          <div className={styles.code}>
            <Code
              color={color}
              lang="swift"
              title="SwiftUI"
              code={`Color(red: ${color.r / 100}, green: ${color.g / 100}, blue: ${color.b / 100}).opacity(${color.a})`}
            />
            <Code
              color={color}
              lang="swift"
              title="Swift for iOS"
              code={`UIColor(red: ${color.r / 100}, green: ${color.g / 100}, blue: ${color.b / 100}, alpha: ${
                color.a
              })`}
            />
            <Code
              color={color}
              lang="swift"
              title="Swift for macOS"
              code={`NSColor(red: ${color.r / 100}, green: ${color.g / 100}, blue: ${color.b / 100}, alpha: ${
                color.a
              })`}
            />
            <Code
              color={color}
              lang="objectivec"
              title="Objective-C for iOS"
              code={`[UIColor colorWithRed: ${color.r / 100} green: ${color.g / 100} blue: ${color.b / 100} alpha: ${
                color.a
              }];`}
            />
            <Code
              color={color}
              lang="objectivec"
              title="Objective-C for macOS"
              code={`[NSColor colorWithCalibratedRed: ${color.r / 100} green: ${color.g / 100} blue: ${
                color.b / 100
              } alpha: ${color.a}];`}
            />
            <Code
              color={color}
              lang="csharp"
              title="Xamarin (C#)"
              code={`new UIColor(red: ${color.r / 100}f, green: ${color.g / 100}f, blue: ${color.b / 100}f, alpha: ${
                color.a
              }f)`}
            />
          </div>
        </div>
      </div>
    </div>
  );
}
