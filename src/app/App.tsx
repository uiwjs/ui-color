import { useMemo, useState } from 'react';
import GitHubCorners from '@uiw/react-github-corners';
import { hsvaToRgba, hsvaToHex, ColorResult } from '@uiw/color-convert';
import Circle, { CircleProps } from '@uiw/react-color-circle';
import Wheel from '@uiw/react-color-wheel';
import ShadeSlider from '@uiw/react-color-shade-slider';
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
  const [hsva, setHsva] = useState({ h: 209, s: 36, v: 90, a: 1 });
  const handleColorChange = (data: ColorResult) => {
    setHsva(data.hsva);
  };
  const handleSwatchesPicker = (data: ColorResult) => {
    setHsva(data.hsva);
  };
  const color = hsvaToRgba(hsva);
  const hex = hsvaToHex(hsva);
  return (
    <div
      style={{
        backgroundColor: `rgba(${color.r}, ${color.g}, ${color.b}, ${color.a})`,
        transition: 'background-color 0.3s ease 0s',
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
            <Wheel
              color={hsva}
              onChange={handleColorChange}
              style={{
                marginBottom: 20,
                boxShadow: 'rgb(0 0 0 / 15%) 0px 0px 0px 1px, rgb(0 0 0 / 15%) 0px 8px 16px',
                borderRadius: '50%',
              }}
            />
            <ShadeSlider
              hsva={hsva}
              radius={8}
              style={{ marginBottom: 21, background: 'transparent', backgroundColor: 'transparent' }}
              onChange={(newShade) => setHsva({ ...hsva, v: newShade.v })}
            />
            <Sketch color={hsva} onChange={handleColorChange} />
            <div className={styles.footer}>
              <div>Copyright © uiwjs 2021.</div>
              <div>
                Developed by{' '}
                <a href="https://github.com/jaywcjlove" target="__blank">
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
            <Code color={color} lang="css" title="CSS" code={`body { color: ${hex}; }`} />
          </div>
        </div>
      </div>
    </div>
  );
}
