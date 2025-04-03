// Narendra Korada
// ITMD 541-01 Graduate Student
// Lab 4 – JavaScript DOM Manipulation Assignment

(function () {

  // 1. Change the main headline in the hero section
  const heroHeadline = document.querySelector("#hero h1");
  if (heroHeadline) {
    heroHeadline.textContent = "Uplift Your Brand with Stellar Marketing";
  }

  // 2. Change the subheadline with bold and italic formatting
  const heroSubtext = document.querySelector("#hero p");
  if (heroSubtext) {
    heroSubtext.innerHTML =
      "Utilize cutting-edge strategies from Stellar Marketing to help your business <b><i>thrive</i></b> and <b><i>excel</i></b>.";
  }

  // 3. Set new background image in hero section
  const heroSection = document.querySelector("#hero");
  if (heroSection) {
    heroSection.style.backgroundImage =
      "url('https://picsum.photos/id/683/1280/720')";
  }

  // 4. Match the navbar background color to the footer background
  const footer = document.querySelector("footer");
  const navbar = document.querySelector("header");
  if (footer && navbar) {
    const footerColor = getComputedStyle(footer).backgroundColor;
    navbar.style.backgroundColor = footerColor;
  }

  // 5. Remove the CTA button labeled "Get Started"
  const getStartedBtn = document.querySelector("#hero a");
  if (getStartedBtn) {
    getStartedBtn.remove();
  }

  // 6. Center-align the main headings of Services, Solutions, and Contact sections
  ["#services h2", "#solutions h2", "#contact h2"].forEach((selector) => {
    const heading = document.querySelector(selector);
    if (heading) {
      heading.style.textAlign = "center";
    }
  });


  // 7. Change the color of all material icons in Services section to green (#47C714)
  document.querySelectorAll("#services .material-symbols-outlined").forEach((icon) => {
    icon.style.color = "#47C714";
  });

  // 8. Replace the icon for Digital Marketing with 'ads_click'
  const digitalIcon = document.querySelector("[data-icon='digital']");
  if (digitalIcon) {
    digitalIcon.textContent = "ads_click";
  }

  // 9. Apply a 4-column grid layout on screens wider than 1024px
  const styleTag = document.createElement("style");
  styleTag.textContent = `
    @media (min-width: 1024px) {
      [data-section="product_cards"] {
        grid-template-columns: repeat(4, 1fr) !important;
      }
    }
  `;
  document.head.appendChild(styleTag);

  // 10. Update the Musicians tile image in the solutions section
  const musiciansImg = Array.from(document.querySelectorAll("#solutions img")).find((img) =>
    img.alt.toLowerCase().includes("musicians")
  );
  if (musiciansImg) {
    musiciansImg.src = "https://picsum.photos/id/453/400/300";
  }


  // Update the form to handle proper validation and user feedback
  const form = document.querySelector("form");
  if (form) {
    const nameInput = form.querySelector("#name");
    const emailInput = form.querySelector("#email");

    // Add autocomplete attributes by replacing inputs with clones
    if (nameInput) {
      const clone = nameInput.cloneNode(true);
      clone.setAttribute("autocomplete", "name");
      nameInput.replaceWith(clone);
    }
    if (emailInput) {
      const clone = emailInput.cloneNode(true);
      clone.setAttribute("type", "email");
      clone.setAttribute("autocomplete", "email");
      emailInput.replaceWith(clone);
    }

    const updatedNameInput = form.querySelector("#name");
    const updatedEmailInput = form.querySelector("#email");

    // Handle form submission with validation
    form.addEventListener("submit", function (e) {
      e.preventDefault(); // prevent navigation to contact.html

      const name = updatedNameInput?.value.trim();
      const email = updatedEmailInput?.value.trim();

      if (name && email) {
        alert(`Thank you, ${name}! We will be in touch with you shortly at ${email}.`);
      } else {
        alert("Please provide a name and email.");
      }
    });
  }
})();
// END OF SCRIPT