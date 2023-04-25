import { useSearchParams } from "react-router-dom";
import nith from "../assets/nith.png";
import { Button, Card } from "antd";
import { CSSProperties, useState } from "react";
import { CloseCircleOutlined, PrinterOutlined } from "@ant-design/icons";
export default function FrontPage() {
  // get query params using react-router-dom
  const [searchParams] = useSearchParams();

  const data = {
    student: "student name",
    roll: "roll no.",
    code: "CS-XYZ",
    sub: "Subject Name",
    teacher: "teacher name",
  };
  let key: keyof typeof data;
  for (key in data) {
    data[key] = searchParams.get(key) || data[key];
  }
  // detect windows or mac
  const isMac = navigator.platform.toUpperCase().indexOf("MAC") >= 0;
  const printGuide = `Press ${
    isMac ? "CMD + P" : "CTRL + P"
  } to print, or use the button below`;
  const printGuideStyle: CSSProperties = {
    width: 300,
    position: "fixed",
    top: "50%",
    left: "50%",
    transform: "translate(-50%, -50%)",
  };
  const [closeWindow, setCloseWindow] = useState(false);
  return (
    <>
      {!closeWindow && (
        <Card
          style={printGuideStyle}
          className="no-print"
          actions={[
            <Button onClick={window.print}>
              <PrinterOutlined />
            </Button>,
            <Button onClick={() => setCloseWindow(true)}>
              <CloseCircleOutlined />
            </Button>,
          ]}
        >
          {printGuide}
        </Card>
      )}
      <svg
        xmlnsXlink="http://www.w3.org/1999/xlink"
        xmlns="http://www.w3.org/2000/svg"
        width="210mm"
        height="297mm"
        viewBox="0 0 210 297"
        version="1.1"
        id="svg5"
        xmlSpace="preserve"
      >
        <defs id="defs2" />
        <g>
          <rect
            style={{
              fill: "#ffffff",
              strokeWidth: 0,
              strokeLinecap: "round",
              strokeLinejoin: "round",
            }}
            id="rect722"
            width={210}
            height={297}
            x={0}
            y={0}
          />
          <image
            width="37.843945"
            height="37.150139"
            preserveAspectRatio="none"
            xlinkHref={nith}
            id="image140"
            x="85.410492"
            y="27.859192"
          />
          <text
            xmlSpace="preserve"
            style={{
              fontSize: "8.01816px",
              lineHeight: 1,
              fontFamily: "sans-serif",
              textAlign: "center",
              wordSpacing: 0,
              textAnchor: "middle",
              strokeWidth: "0.200455",
            }}
            x="104.44471"
            y="74.703728"
            id="text372"
          >
            <tspan
              id="tspan370"
              style={{
                fontStyle: "normal",
                fontVariant: "normal",
                fontWeight: 900,
                fontStretch: "normal",
                fontFamily: '"Source Serif Pro"',
                textAlign: "center",
                textAnchor: "middle",
                strokeWidth: "0.200455",
              }}
              x="104.44471"
              y="74.703728"
            >
              National Institute of Technology,
            </tspan>
            <tspan
              style={{
                fontStyle: "normal",
                fontVariant: "normal",
                fontWeight: 900,
                fontStretch: "normal",
                fontFamily: '"Source Serif Pro"',
                textAlign: "center",
                textAnchor: "middle",
                strokeWidth: "0.200455",
              }}
              x="104.44471"
              y="83.265739"
              id="tspan424"
            >
              Hamirpur
            </tspan>
          </text>
          <text
            xmlSpace="preserve"
            style={{
              fontSize: "10.5833px",
              lineHeight: "1.25",
              fontFamily: "sans-serif",
              wordSpacing: 0,
              strokeWidth: "0.264583",
            }}
            x="98.531143"
            y="164.491"
            id="text484"
          >
            <tspan
              id="tspan482"
              style={{ strokeWidth: "0.264583" }}
              x="98.531143"
              y="164.491"
            />
          </text>
          <text
            xmlSpace="preserve"
            style={{
              fontSize: "11.6369px",
              lineHeight: "1.25",
              fontFamily: "sans-serif",
              wordSpacing: 0,
              strokeWidth: "0.290924",
            }}
            x="104.96508"
            y="160.5468"
            id="text488"
          >
            <tspan
              id="tspan486"
              style={{
                fontStyle: "normal",
                fontVariant: "normal",
                fontWeight: 900,
                fontStretch: "normal",
                fontFamily: '"Source Serif Pro"',
                textAlign: "center",
                textAnchor: "middle",
                strokeWidth: "0.290924",
              }}
              x="104.96508"
              y="160.5468"
            >
              {data.sub}
            </tspan>
          </text>
          <text
            xmlSpace="preserve"
            style={{
              fontSize: "5.64444px",
              lineHeight: "1.25",
              fontFamily: "sans-serif",
              wordSpacing: 0,
              strokeWidth: "0.169427",
            }}
            x="78.595299"
            y="147.1196"
            id="text504"
          >
            <tspan
              id="tspan502"
              style={{
                fontStyle: "normal",
                fontVariant: "normal",
                fontWeight: 600,
                fontStretch: "normal",
                fontSize: "5.64444px",
                fontFamily: '"Source Serif Pro"',
                strokeWidth: "0.169427",
              }}
              x="78.595299"
              y="147.1196"
            >
              Course code - CS-326
            </tspan>
          </text>
          <text
            xmlSpace="preserve"
            style={{
              fontSize: "5.64444px",
              lineHeight: "1.25",
              fontFamily: "sans-serif",
              wordSpacing: 0,
              strokeWidth: "0.135396",
            }}
            x={105}
            y="171.41951"
            id="text508"
          >
            <tspan
              id="tspan506"
              style={{
                fontStyle: "normal",
                fontVariant: "normal",
                fontWeight: 600,
                fontStretch: "normal",
                fontSize: "5.64444px",
                fontFamily: '"Source Serif Pro"',
                textAlign: "center",
                textAnchor: "middle",
                strokeWidth: "0.135396",
              }}
              x={105}
              y="171.41951"
            >
              Submitted to - {data.teacher}
            </tspan>
          </text>
          <text
            xmlSpace="preserve"
            style={{
              fontSize: "5.64444px",
              lineHeight: 1,
              fontFamily: "sans-serif",
              wordSpacing: 0,
              strokeWidth: "0.135811",
            }}
            x="104.90969"
            y="257.17761"
            id="text542"
          >
            <tspan
              id="tspan540"
              style={{
                fontStyle: "normal",
                fontVariant: "normal",
                fontWeight: "bold",
                fontStretch: "normal",
                fontSize: "5.64444px",
                fontFamily: '"Source Serif Pro"',
                textAlign: "center",
                textAnchor: "middle",
                strokeWidth: "0.135811",
              }}
              x="104.90969"
              y="257.17761"
            >
              Submitted by
            </tspan>
            <tspan
              style={{
                fontStyle: "normal",
                fontVariant: "normal",
                fontWeight: "bold",
                fontStretch: "normal",
                fontSize: "5.64444px",
                fontFamily: '"Source Serif Pro"',
                textAlign: "center",
                textAnchor: "middle",
                strokeWidth: "0.135811",
              }}
              x="104.90969"
              y="263.2049"
              id="tspan544"
            >
              Name - {data.student}
            </tspan>
            <tspan
              style={{
                fontStyle: "normal",
                fontVariant: "normal",
                fontWeight: "bold",
                fontStretch: "normal",
                fontSize: "5.64444px",
                fontFamily: '"Source Serif Pro"',
                textAlign: "center",
                textAnchor: "middle",
                strokeWidth: "0.135811",
              }}
              x="104.90969"
              y="269.23218"
              id="tspan546"
            >
              Roll no - {data.roll}
            </tspan>
          </text>
        </g>
      </svg>
    </>
  );
}
