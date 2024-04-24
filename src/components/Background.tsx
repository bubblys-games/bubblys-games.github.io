import styled from '@emotion/styled'
import { useEffect, useRef, useState } from 'react'

const Ocean = styled.div`
    position: absolute;
    left: 0;
    top: 0;
    width: 100%;
    background: #eec6b4;
    z-index: -1;
`

const Svg = styled.svg`
    position: absolute;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
`

export default function BackgroundContainer() {
    const svgRef = useRef<HTMLDivElement>(null)
    const [windowWidth, setWindowWidth] = useState(window.innerWidth + 20)
    const [phaseShift, setPhaseShift] = useState<number>(0)
    const waveHeight = 280

    useEffect(() => {
        const handleResize = () => {
            setWindowWidth(window.innerWidth + 20);
        };

        window.addEventListener('resize', handleResize);
        return () => window.removeEventListener('resize', handleResize);
    }, [])

    useEffect(() => {
        const handleScroll = () => {
            if (svgRef.current) {
                const { scrollHeight } = document.documentElement
                svgRef.current.style.height = `${scrollHeight}px`
            }
        }

        handleScroll()

        window.addEventListener('scroll', handleScroll)
        return () => window.removeEventListener('scroll', handleScroll)
    }, [])

    useEffect(() => {
        const updatePhaseShift = () => {
            setPhaseShift((prevPhaseShift) => (prevPhaseShift + 0.01) % 1); // Adjust speed as needed
        };

        const interval = setInterval(updatePhaseShift, 50); // Update phase shift every 50 milliseconds
        return () => clearInterval(interval);
    }, [])

    const generateWavePath = (width: number, height: number, frequency: number, amplitude: number) => {
        const points = []
        const wavelength = width / frequency
        for (let x = 0; x <= width; x += 10) {
            const y = height / 2 + amplitude * Math.sin(2 * Math.PI * (x / wavelength - phaseShift));
            points.push(`${x},${y}`)
        }
        return `M${points.join(' L')} V${height} H0 Z`
    }

    return (
        <Ocean ref={svgRef}>
            <Svg>
                <path d={generateWavePath(windowWidth, waveHeight, 1, 8)} fill="#77bab2" />
                <rect x="0" y={waveHeight} width="100%" height={`calc(100% - ${waveHeight}px)`} fill="url(#waveGradient)" />
                <defs>
                    <linearGradient id="waveGradient" x1="0%" y1="0%" x2="0%" y2="100%">
                        <stop offset="0%" style={{'stopColor': '#77bab2'}} />
                        <stop offset="50%" style={{'stopColor': '#54a5a2'}} />
                        <stop offset="100%" style={{'stopColor': '#398e91'}} />
                    </linearGradient>
                </defs>
            </Svg>
        </Ocean>
    )
}