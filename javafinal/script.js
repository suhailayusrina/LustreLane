    <script>
        const hamburger = document.getElementById('hamburger');
        const mobileNav = document.getElementById('mobile-nav');

        hamburger.addEventListener('click', () => {
            mobileNav.classList.toggle('active');
            mobileNav.style.display = mobileNav.classList.contains('active') ? 'flex' : 'none';
        });
    </script>

<script>
        // Add event listener to the button
        document.getElementById("subscribeBtn").addEventListener("click", function() {
            alert("Thank you for subscribing! Stay tuned for updates.");
        });
    </script>

<script>
        var modal = document.getElementById("myModal");

        var btn = document.getElementById("subscribeBtn");

        var span = document.getElementsByClassName("close")[0];

        btn.onclick = function() {
            modal.style.display = "block";
        }
        span.onclick = function() {
            modal.style.display = "none";
        }
        window.onclick = function(event) {
            if (event.target == modal) {
                modal.style.display = "none";
            }
        }
    </script>
   <script>
        function toggleArticle(id) {
            const article = document.getElementById(id);
            if (article.style.display === "none" || article.style.display === "") {
                article.style.display = "block";
            } else {
                article.style.display = "none";
            }
        }
    </script>
    <script src="https://cdn.jsdelivr.net/npm/aos@2.3.4/dist/aos.js"></script>
    <script>
        AOS.init({
            duration: 1300,
	    delay: 300, 
            once: true      
        });
    </script>
  <script>
    // Get the button element
    const backToTopButton = document.getElementById('backToTop');

    // Show or hide the button based on scroll position
    window.addEventListener('scroll', () => {
      if (window.scrollY > 200) { // Show after scrolling 200px
        backToTopButton.style.display = 'block';
      } else {
        backToTopButton.style.display = 'none';
      }
    });

    // Scroll back to top when the button is clicked
    backToTopButton.addEventListener('click', () => {
      window.scrollTo({
        top: 0,
        behavior: 'smooth'
      });
    });
  </script>

  <script>
    function toggleFAQ(faqElement) {
      const answer = faqElement.querySelector('p');
      const icon = faqElement.querySelector('.icon');

      if (answer.style.display === 'block') {
        answer.style.display = 'none';
        icon.classList.remove('open');
      } else {
        answer.style.display = 'block';
        icon.classList.add('open');
      }
    }
  </script>
<script>
        // Function to check if an element is in the viewport
        const elementsToAnimate = document.querySelectorAll('.animate-on-scroll');

        function checkVisibility() {
            elementsToAnimate.forEach(element => {
                const rect = element.getBoundingClientRect();
                if (rect.top >= 0 && rect.bottom <= window.innerHeight) {
                    element.classList.add('visible');
                }
            });
        }

        // Listen for scroll events to check visibility
        window.addEventListener('scroll', checkVisibility);

        // Call the function on page load to check for already visible elements
        window.addEventListener('load', checkVisibility);
    </script>
<script>
        // Function to check if an element is in the viewport
        const elementsToAnimate = document.querySelectorAll('.animate-on-scroll');

        function checkVisibility() {
            elementsToAnimate.forEach(element => {
                const rect = element.getBoundingClientRect();
                if (rect.top >= 0 && rect.bottom <= window.innerHeight) {
                    element.classList.add('visible');
                }
            });
        }

        // Listen for scroll events to check visibility
        window.addEventListener('scroll', checkVisibility);

        // Call the function on page load to check for already visible elements
        window.addEventListener('load', checkVisibility);
    </script>
<script>
        // Function to check if an element is in the viewport
        const elementsToAnimate = document.querySelectorAll('.animate-on-scroll');

        function checkVisibility() {
            elementsToAnimate.forEach(element => {
                const rect = element.getBoundingClientRect();
                if (rect.top >= 0 && rect.bottom <= window.innerHeight) {
                    element.classList.add('visible');
                }
            });
        }

        // Listen for scroll events to check visibility
        window.addEventListener('scroll', checkVisibility);

        // Call the function on page load to check for already visible elements
        window.addEventListener('load', checkVisibility);
    </script>