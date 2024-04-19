import styled from '@emotion/styled'

const Ocean = styled.div`
    position: fixed;
    top: 0;
    left: 0;
    width: 100%;
    height: 100vh;
    overflow: hidden;
    background: #eec6b4;
    z-index: -1;

    svg {
        position: absolute;
        top: 0;
        left: 0;
        width: 400%; /* Updated to twice the width of the container */
        height: 150%;
        animation: waveMove 15s linear infinite;
    }

    @keyframes waveMove {
        0% {
            transform: translateX(0);
        }
        100% {
            transform: translateX(-50%);
        }
    }
`

export default function BackgroundContainer() {
    return (
        <Ocean>
            <svg viewBox="0 0 240 200" preserveAspectRatio="none">
                <defs>
                    <linearGradient id="waveGradient" x1="0%" y1="0%" x2="0%" y2="100%">
                        <stop offset="0%" style={{'stopColor': '#77bab2'}} />
                        <stop offset="50%" style={{'stopColor': '#54a5a2'}} />
                        <stop offset="100%" style={{'stopColor': '#398e91'}} />
                    </linearGradient>
                </defs>
                <path d="M0 30 Q 30 20 60 30 T 120 30 T 180 30 T 240 30 V 200 H 0 Z" fill="url(#waveGradient)"></path>
            </svg>
        </Ocean>
    )
}