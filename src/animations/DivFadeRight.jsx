import React, { useEffect, useRef, useState } from 'react'


const DivFadeRight = ({ children, threshold = 0.0 }) => {
    const [visible, setVisible] = useState(false);
    const observerRef = useRef();

    useEffect(() => {
        const observer = new IntersectionObserver(entries => {
            if(entries[0].isIntersecting && !visible){
                setVisible(entries[0].isIntersecting)
            }
        },{
            threshold
        })

        observer.observe(observerRef.current)

        return () => observer.disconnect();
    },[threshold, visible])

  return (
    <div
    ref={observerRef}
    className={`${visible ? 'animate-duration-500 animate-delay-500 animate-fade-right' : 'opacity-0'}`}
    >
      {children}
    </div>
  )
}

export default DivFadeRight
