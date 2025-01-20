const idle = document.getElementById('idle');

const spriteSize = 192;
let idle_position = 192; // x pos of the sprite sheet
let run_position
const interval = 100 // ms

const idleAnim = () => {
    tID = setInterval ( () => {
        document.getElementById('idle').style.backgroundPosition = `-${idle_position}px 0px`; 
        //we use the ES6 template literal to insert the variable "position"
        if (idle_position < 5*spriteSize)
        { idle_position += spriteSize;}
        //we increment the position by 256 each time
        else
        { idle_position = spriteSize; }
        //reset the position to 256px, once position exceeds 1536px
    }, interval ); //end of setInterval
} //end of animateScript()

const runAnim = () => {
    tID = setInterval ( () => {
        document.getElementById('run').style.backgroundPosition = `-${run_position}px 0px`;
        if (run_position < 6*spriteSize)
        { run_position += spriteSize;}
        else
        { run_position = spriteSize; }
    }, 100 );
}

idleAnim();
runAnim();