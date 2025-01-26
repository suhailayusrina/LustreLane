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

    <script>
        // Function to handle autoplay when videos are in view
        const videos = document.querySelectorAll('.video');

        const observer = new IntersectionObserver((entries) => {
            entries.forEach((entry) => {
                if (entry.isIntersecting) {
                    entry.target.play();
                } else {
                    entry.target.pause();
                }
            });
        }, { threshold: 0.5 });

        videos.forEach((video) => {
            observer.observe(video);
        });
      function startCountdown(endDate) {
            const timer = document.getElementById('timer');
function updateTimer() {
                const now = new Date();
                const timeLeft = new Date(endDate) - now;

                if (timeLeft > 0) {
                    const days = Math.floor(timeLeft / (1000 * 60 * 60 * 24));
                    const hours = Math.floor((timeLeft / (1000 * 60 * 60)) % 24);
                    const minutes = Math.floor((timeLeft / (1000 * 60)) % 60);
                    const seconds = Math.floor((timeLeft / 1000) % 60);

                    timer.innerHTML = `
                        <div><span>${days}</span><small>Days</small></div>
                        <div><span>${hours}</span><small>Hours</small></div>
                        <div><span>${minutes}</span><small>Minutes</small></div>
                        <div><span>${seconds}</span><small>Seconds</small></div>
                    `;
                } else {
                    timer.innerHTML = "<h2>Your Journey Begins Now!</h2>";
                    clearInterval(interval);
                }
            }

            updateTimer();
            const interval = setInterval(updateTimer, 1000);
        }

        window.onload = function() {
            const countdownEndDate = "2025-02-23T23:59:59"; 
            startCountdown(countdownEndDate);
        };
    </script>
  <script>
    // Get the modal
    var modal = document.getElementById("myModal");

    // Get the link that opens the modal
    var openModalLink = document.getElementById("openModalLink");

    // Get the <span> element that closes the modal
    var closeModal = document.getElementById("closeModal");

    // When the user clicks the link, open the modal
    openModalLink.onclick = function(event) {
      event.preventDefault(); // Prevent the default link action
      modal.style.display = "block";
      // Move the modal from top to its normal position
      setTimeout(function() {
        modal.style.top = "0"; // Animate the modal from top
      }, 10); // Add a slight delay to trigger the transition
    }

    // When the user clicks the close button, close the modal
    closeModal.onclick = function() {
      modal.style.top = "-100%"; // Slide the modal out of view from the top
      setTimeout(function() {
        modal.style.display = "none"; // Hide the modal after transition
      }, 300); // Wait for the transition to complete
    }

    // When the user clicks anywhere outside the modal, close it
    window.onclick = function(event) {
      if (event.target == modal) {
        closeModal.onclick();
      }
    }
  </script>
    <script>
        let cart = [];

        function addToCart(productName, price) {
            cart.push({ productName, price });
            displayCart();
        }

        function displayCart() {
            let cartItemsDiv = document.getElementById("cartItems");
            let totalPriceDiv = document.getElementById("totalPrice");
            cartItemsDiv.innerHTML = "";
            let total = 0;
            cart.forEach(item => {
                const itemElement = document.createElement("p");
                itemElement.textContent = `${item.productName} - RM${item.price}`;
                cartItemsDiv.appendChild(itemElement);
                total += item.price;
            });
            totalPriceDiv.textContent = total.toFixed(2);
        }

        function proceedToShipping() {
            if (cart.length === 0) {
                alert("Your cart is empty. Please add items before proceeding.");
                return;
            }

            document.getElementById("checkoutSection").style.display = "none";
            document.getElementById("shippingForm").style.display = "block";
        }

        function submitShippingDetails() {
            const fullName = document.getElementById("fullName").value;
            const address = document.getElementById("address").value;
            const contact = document.getElementById("contact").value;

            if (!fullName || !address || !contact) {
                alert("Please fill out all fields.");
                return;
            }

            document.getElementById("shippingForm").style.display = "none";
            document.getElementById("orderSummary").style.display = "block";
            document.getElementById("selectedPaymentMethod").textContent = document.getElementById("paymentMethod").value;

            let orderDetails = document.getElementById("orderDetails");
            cart.forEach(item => {
                const itemElement = document.createElement("p");
                itemElement.textContent = `${item.productName} - RM${item.price}`;
                orderDetails.appendChild(itemElement);
            });
        }

        function completePurchase() {
            let totalAmount = 0;
            cart.forEach(item => {
                totalAmount += item.price;
            });

            document.getElementById("orderSummary").style.display = "none";
            document.getElementById("receipt").style.display = "block";

            document.getElementById("receiptTotal").textContent = totalAmount.toFixed(2);
            document.getElementById("receiptPaymentMethod").textContent = document.getElementById("paymentMethod").value;

            cart = []; // Clear the cart after purchase
            displayCart(); // Update cart display
        }
    </script>