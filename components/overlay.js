import React, { useEffect } from 'react';

export default function Overlay({ ready, clicked, setClicked }) {
    return (
        <>
            <div className={`fullscreen bg ${ready ? 'ready' : 'notready'} ${clicked && 'clicked'}`}>
                <div id="startBtn" onClick={() => ready && setClicked(true)}>
                    {!ready ? 'loading' : 'click to continue'}
                </div>
            </div>
        </>
    );
}
