const inputs = document.querySelectorAll('.controls input'); //returns an nodelist of the inputs in the class controls

function handleUpdate() {
    const sufix = this.dataset.sizing || ''; //dataset or nothing, to avoid undefined in the base color

    document.documentElement.style.setProperty(`--${this.name}`, this.value+sufix);
}

//listening to the events for every input
inputs.forEach(input => input.addEventListener('change', handleUpdate));//triggers when we end the move
inputs.forEach(input => input.addEventListener('mousemove', handleUpdate));//trigger when moves no matter if we end