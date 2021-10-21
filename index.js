const slider = document.getElementById('slider');
const min = slider.min;
const max = slider.max;
const value = slider.value;

slider.style.background = `linear-gradient(to right, #A4F3EB 0%, #A4F3EB ${
    ((value - min) / (max - min)) * 100
}%, #ECF0FB ${((value - min) / (max - min)) * 100}%, #ECF0FB 100%)`;

slider.oninput = function () {
    this.style.background = `linear-gradient(to right, #A4F3EB 0%, #A4F3EB ${
        ((this.value - this.min) / (this.max - this.min)) * 100
    }%, #ECF0FB ${
        ((this.value - this.min) / (this.max - this.min)) * 100
    }%, #ECF0FB 100%)`;
};
