import React, { useState, useEffect } from 'react';
import styled from 'styled-components';
import logoImg from '../../Assets/Images/logoimg.png';
import { useSpring, animated } from 'react-spring';

const Home = () => {
  const [count, setCount] = useState(1);

  useEffect(() => {
    console.log('render!');
    console.log(count);

    let timer = setInterval(() => {
      const ranNum = Math.random();
      console.log(ranNum);
      setCount((prev) => (ranNum > 0.5 ? prev + 1 : prev === 1 ? prev + 1 : prev - 1));
    }, 3000);

    return () => clearInterval(timer);
  }, []);

  const springs = useSpring({
    loop: true,
    // reverse: true,
    delay: 100,
    from: {
      transform: 'translate3D(100px, 0, 0)',
      opacity: '1',
    },
    to: {
      transform: 'translate3D(0, 0, 0)',
      opacity: '0.2',
    },
    config: {
      duration: 5000 / count,
    },
  });

  console.log(count);

  return (
    <Container>
      <Box>
        <svg viewBox="0 0 200 100" fill="none">
          <rect
            width="200"
            height="100"
            style={{ fill: 'skyblue', stroke: 'cadetblue', strokeWidth: '1px' }}
          />
          <animated.circle r="1" fill="#000" cx={10} cy={10} style={springs} />
          <animated.circle r="1" fill="#000" cx={10} cy={20} style={springs} />
          <svg
            width="20"
            height="20"
            viewBox="0 0 94 84"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <g filter="url(#filter0_b_797_23)">
              <rect
                x="6"
                y="22.0645"
                width="58.3824"
                height="56.9355"
                stroke="#8572F8"
                strokeWidth="10"
              />
            </g>
            <g filter="url(#filter1_b_797_23)">
              <rect
                x="30.6177"
                y="6"
                width="58.3824"
                height="56.9355"
                stroke="#8572F8"
                strokeWidth="10"
              />
            </g>
            <line
              y1="-5"
              x2="30.9072"
              y2="-5"
              transform="matrix(0.840751 -0.541422 0.557827 0.829957 6 25.7339)"
              stroke="#8572F8"
              strokeWidth="10"
            />
            <line
              y1="-5"
              x2="30.9072"
              y2="-5"
              transform="matrix(0.840751 -0.541422 0.557827 0.829957 6.4707 84)"
              stroke="#8572F8"
              strokeWidth="10"
            />
            <line
              y1="-5"
              x2="30.9072"
              y2="-5"
              transform="matrix(0.840751 -0.541422 0.557827 0.829957 68.0146 84)"
              stroke="#8572F8"
              strokeWidth="10"
            />
            <line
              y1="-5"
              x2="30.9072"
              y2="-5"
              transform="matrix(0.840751 -0.541422 0.557827 0.829957 68.0146 25.0967)"
              stroke="#8572F8"
              strokeWidth="10"
            />
            <defs>
              <filter
                id="filter0_b_797_23"
                x="-3"
                y="13.0645"
                width="76.3823"
                height="74.9355"
                filterUnits="userSpaceOnUse"
                colorInterpolationFilters="sRGB"
              >
                <feFlood floodOpacity="0" result="BackgroundImageFix" />
                <feGaussianBlur in="BackgroundImage" stdDeviation="2" />
                <feComposite
                  in2="SourceAlpha"
                  operator="in"
                  result="effect1_backgroundBlur_797_23"
                />
                <feBlend
                  mode="normal"
                  in="SourceGraphic"
                  in2="effect1_backgroundBlur_797_23"
                  result="shape"
                />
              </filter>
              <filter
                id="filter1_b_797_23"
                x="21.6177"
                y="-3"
                width="76.3823"
                height="74.9355"
                filterUnits="userSpaceOnUse"
                colorInterpolationFilters="sRGB"
              >
                <feFlood floodOpacity="0" result="BackgroundImageFix" />
                <feGaussianBlur in="BackgroundImage" stdDeviation="2" />
                <feComposite
                  in2="SourceAlpha"
                  operator="in"
                  result="effect1_backgroundBlur_797_23"
                />
                <feBlend
                  mode="normal"
                  in="SourceGraphic"
                  in2="effect1_backgroundBlur_797_23"
                  result="shape"
                />
              </filter>
            </defs>
          </svg>
        </svg>
      </Box>
    </Container>
  );
};

export default Home;

const Container = styled.div`
  width: 100vw;
  height: 100vh;
  ${({ theme }) => theme.mixin.flexCenter}
`;

const Box = styled.div`
  width: 70%;
  height: 70%;
  border: 3px solid #000;
  padding: 30px;
  overflow: hidden;
`;
