// ScrollToTop.js
import { useEffect } from 'react';
import { useLocation } from 'react-router-dom';

function ScrollToTop() {
  const { pathname } = useLocation();

  useEffect(() => {
    window.scrollTo(0, 0);
    // Get the element with the specified ID
    var contactElement = document.getElementById('contact');

    // Check if the element exists and has the class "show"
    var hasShowClass = contactElement && contactElement.classList.contains('show');

    // Log the result
    console.log(hasShowClass);

  }, [pathname]);

  return null;
}

export default ScrollToTop;
