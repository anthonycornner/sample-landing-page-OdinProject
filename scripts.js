window.onload = function () {
    const trailer = document.getElementById('trailer');

    const animateTrailer = (e, interacting) => {
        const x = e.clientX - trailer.offsetWidth/2,
            y = e.clientY - trailer.offsetHeight/2;
        

        const keyframes = {
            transform: `translate(${x}px, ${y}px) scale(${interacting ? 5 : 1})`  
        }

        trailer.animate(keyframes, {
            duration: 800,
            fill: "forwards"
        });
        
    }

    window.onmousemove = e => {
        const interactable = e.target.closest(".interactable");

            interacting = interactable !== null;


        animateTrailer(e, interacting);
    }

    const toggleDropDown = document.getElementById("dropdown-btn");
    const menuList = document.getElementById('dropdown-menu');
    const links = document.querySelectorAll('.link');
    
    console.log(menuList);
    console.log(toggleDropDown);

    toggleDropDown.addEventListener('click', () => {
    menuList.classList.toggle('active');
    links.forEach(link => link.classList.toggle('active'));
    });
};