import React, { useState, useRef } from 'react';

function RefsExample() {
    const [showMsgOne, setShowMsgOne] = useState(false);
    const [showMsgTwo, setShowMsgTwo] = useState(false);

    const counter = useRef(0)

    function onPlayStart() {
        counter.current++;
        console.log(counter);
        if (counter.current === 5) {
            setShowMsgOne(true)
        }
        if (counter.current === 8) {
            setShowMsgTwo(true);
        }

        if (counter.current > 8) {
            setShowMsgOne(false);
            setShowMsgTwo(false);
            counter.current = 0;
        }
    }

    return (
        <div>
            <div>
                <button onClick={onPlayStart}>Lets Play</button>
            </div>
            {showMsgOne ?
                <div>
                    You Win
                </div>
                : null}
            {showMsgTwo ?
                <div>
                    Congratulation!!
                </div>
                : null}


        </div>
    )
}

export default RefsExample;