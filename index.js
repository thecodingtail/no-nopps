/*document.addEventListener("DOMContentLoaded", function() {
    const buttonShop = document.getElementById("shop-button");
    const expandAnimation = document.getElementById("expand-on-click");
  
    console.log(buttonShop); // Should log the buttonShop element
    console.log(expandAnimation); // Should log the expandAnimation element
  
    if(buttonShop && expandAnimation) {
      buttonShop.addEventListener("click", () => {
        console.log('Button was clicked'); // Should log when the button is clicked
        expandAnimation.classList.toggle("animation-grow");
      });
    }
  });*/
  document.addEventListener("DOMContentLoaded", function() {
    const buttonShop = document.getElementById("shop-button");
    const expandAnimation = document.getElementById("expand-on-click");
  
    console.log(buttonShop); // Should log the buttonShop element
    console.log(expandAnimation); // Should log the expandAnimation element
  
    if(buttonShop && expandAnimation) {
      buttonShop.addEventListener("click", () => {
        console.log('Button was clicked'); // Should log when the button is clicked
        if (expandAnimation.classList.contains("animation-grow")) {
          expandAnimation.classList.remove("animation-grow");
          expandAnimation.classList.add("animation-shrink");
        } else {
          expandAnimation.classList.remove("animation-shrink");
          expandAnimation.classList.add("animation-grow");
        }
      });
    }
  });