window.onload = function () {
    let toggleDropDown = document.getElementById("dropdown-btn");
    let menuList = document.getElementById('dropdown-menu');
    let links = document.querySelectorAll('.link');
    
    console.log(menuList);
    console.log(toggleDropDown);

    toggleDropDown.addEventListener('click', () => {
    menuList.classList.toggle('active');
    links.forEach(link => link.classList.toggle('active'));
    });
};