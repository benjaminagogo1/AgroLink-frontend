const counters = document.querySelectorAll(".counter");

counters.forEach(counter => {

    const target = Number(counter.dataset.target);

    let count = 0;

    const speed = Math.ceil(target / 100);

    function updateCounter() {

        if (count < target) {

            count += speed;

            if (count > target) {
                count = target;
            }

            counter.textContent = count.toLocaleString();

            requestAnimationFrame(updateCounter);

        }

    }

    updateCounter();

});

// Greeting

const greeting = document.getElementById("greeting");

const hour = new Date().getHours();

if (hour < 12) {

    greeting.textContent = "Good Morning";

}

else if (hour < 17) {

    greeting.textContent = "Good Afternoon";

}

else {

    greeting.textContent = "Good Evening";

}

// Current Date

const today = document.getElementById("today");

today.textContent = new Date().toDateString();