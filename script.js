window.addEventListener('load', function () {
    //How many slides? 
    const slideCount = document.querySelectorAll('#slider-wrapper ul li').length;

    // How wide is each slide? 
    const slideWidth = document.querySelector('#slider-wrapper').offsetWidth;

    //Total slider width
    const totalWidth = slideCount * slideWidth;

    // DOM ELements 
    const slider = document.querySelector('#slider-wrapper ul');
    const next = document.querySelector('#next');
    const previous = document.querySelector('#prev');

    // Upper left corner of slider 
    let leftPosition = 0;
    // To keep track of each slide
    let counter = 0;
    // Sets the width of the slider (which is also in the CSS)
    slider.style.width = totalWidth;

    next.addEventListener('click', function (event) {
        event.preventDefault();

        counter++;
        if (counter == slideCount) {
            counter = 0;
        }
        leftPosition = `-${counter * slideWidth}px`;
        slider.style.left = leftPosition;
    });


    previous.addEventListener('click', function (event) {
        event.preventDefault();

        counter--;
        if (counter < 0) {
            counter = slideCount-1;
        }
        leftPosition = `-${counter * slideWidth}px`;
        slider.style.left = leftPosition;
    });
})