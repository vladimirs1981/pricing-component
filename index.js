const slider = document.getElementById('slider');
const pageviews = document.getElementById('pageviews');
const price = document.getElementById('price');
const checkBox = document.getElementById('checkBox');
const duration = document.getElementById('duration');
const min = slider.min;
const max = slider.max;
const value = slider.value;

console.log(value);

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

slider.addEventListener('change', setPrice, changeDuration);

checkBox.addEventListener('click', () => {
    changeDuration();
});

function animateValue(price, start, end, duration) {
    let startTimestamp = null;
    const step = (timestamp) => {
        if (!startTimestamp) {
            startTimestamp = timestamp;
        }
        const progress = Math.min((timestamp - startTimestamp) / duration, 1);
        price.innerHTML = Math.floor(progress * (end - start) + start);
        if (progress < 1) {
            window.requestAnimationFrame(step);
        }
    };
    window.requestAnimationFrame(step);
}

function setPrice() {
    let value = parseInt(slider.value);
    switch (value) {
        case 1:
            pageviews.innerText = '10K pageviews';
            price.innerHTML = `${animateValue(
                price,
                0,
                parseInt(getPrice(value, 8)),
                300
            )}`;

            break;
        case 2:
            pageviews.innerText = '50K pageviews';
            price.innerText = `${animateValue(
                price,
                0,
                parseInt(getPrice(value, 12)),
                300
            )}`;
            break;
        case 3:
            pageviews.innerText = '100K pageviews';
            price.innerText = `${animateValue(
                price,
                0,
                parseInt(getPrice(value, 16)),
                300
            )}`;
            break;
        case 4:
            pageviews.innerText = '500K pageviews';
            price.innerText = `${animateValue(
                price,
                0,
                parseInt(getPrice(value, 24)),
                300
            )}`;
            break;
        case 5:
            pageviews.innerText = '1M pageviews';
            price.innerText = `${animateValue(
                price,
                0,
                parseInt(getPrice(value, 36)),
                300
            )}`;
            break;
        default:
            break;
    }
}

function changeDuration() {
    if (!checkBox.checked) {
        duration.innerText = '/month';
        setPrice();
        document.querySelector('.discount').style.visibility = 'visible';
    }
    if (checkBox.checked) {
        duration.innerText = '/year';
        setPrice();
        document.querySelector('.discount').style.visibility = 'hidden';
    }
}

function getPrice(value, price) {
    let newPrice;
    if (!checkBox.checked) {
        switch (value) {
            case 1:
                newPrice = price;
                break;
            case 2:
                newPrice = price;
                break;
            case 3:
                newPrice = price;
                break;
            case 4:
                newPrice = price;
                break;
            case 5:
                newPrice = price;
                break;
            default:
                break;
        }
    }

    if (checkBox.checked) {
        switch (value) {
            case 1:
                newPrice = calculateDiscount(price);
                break;
            case 2:
                newPrice = calculateDiscount(price);
                break;
            case 3:
                newPrice = calculateDiscount(price);
                break;
            case 4:
                newPrice = calculateDiscount(price);
                break;
            case 5:
                newPrice = calculateDiscount(price);
                break;
            default:
                break;
        }
    }

    return newPrice;
}

function calculateDiscount(price) {
    discountPrice = price - price * 0.25;
    return discountPrice;
}

document.addEventListener('DOMContentLoaded', setPrice, changeDuration);
