import React from 'react'
import SmoothScrollHero from '../ui/smooth-scroll-hero'

function RevealingHeadset() {
  return (
    <div className="relative min-h-screen overflow-hidden flex flex-col items-center justify-center ">
				<SmoothScrollHero
					scrollHeight={750}
					desktopVideo="https://lumynxr-cdn.azureedge.net/videos/Header.webm"
					mobileVideo="https://lumynxr-cdn.azureedge.net/videos/Header.webm"
					initialClipPercentage={45}
					finalClipPercentage={55}
                    
				/>
			</div>
  )
}

export default RevealingHeadset