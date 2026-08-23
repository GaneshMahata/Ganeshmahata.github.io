/* =========================================================
   CERTIFICATES
   AWS + LINKEDIN LEARNING
   ========================================================= */

document.addEventListener("DOMContentLoaded", () => {

  /* =======================================================
     PDF VIEWER
     ======================================================= */

  const certificateModal =
    document.getElementById("certificateModal");

  const certificateFrame =
    document.getElementById("certificateFrame");

  const certificateModalTitle =
    document.getElementById("certificateModalTitle");


  document
    .querySelectorAll("[data-certificate]")
    .forEach((link) => {

      link.addEventListener("click", function (event) {

        /*
         * Normal left click:
         * → Open PDF inside popup
         *
         * Ctrl/Cmd + click:
         * → Normal new-tab behaviour
         *
         * Middle click:
         * → Normal new-tab behaviour
         */

        if (
          event.button !== 0 ||
          event.ctrlKey ||
          event.metaKey ||
          event.shiftKey ||
          event.altKey
        ) {
          return;
        }

        event.preventDefault();


        const pdfURL = this.href;

        const title =
          this.dataset.title || "Certificate";


        if (certificateModalTitle) {
          certificateModalTitle.textContent = title;
        }


        if (certificateFrame) {
          certificateFrame.src = pdfURL;
        }


        if (certificateModal) {

          certificateModal.classList.add("active");

          certificateModal.setAttribute(
            "aria-hidden",
            "false"
          );

          document.body.classList.add(
            "certificate-modal-open"
          );

        }

      });

    });


  /* =======================================================
     CLOSE PDF VIEWER
     ======================================================= */

  document
    .querySelectorAll("[data-close-certificate]")
    .forEach((button) => {

      button.addEventListener(
        "click",
        closeCertificate
      );

    });


  function closeCertificate() {

    if (certificateModal) {

      certificateModal.classList.remove(
        "active"
      );

      certificateModal.setAttribute(
        "aria-hidden",
        "true"
      );

    }


    if (certificateFrame) {
      certificateFrame.src = "";
    }


    document.body.classList.remove(
      "certificate-modal-open"
    );

  }


  /* =======================================================
     AWS VIEW MORE
     ======================================================= */

  const awsDetailsModal =
    document.getElementById(
      "certificateDetailsModal"
    );


  document
    .querySelectorAll(
      '[data-certificate-details="aws"]'
    )
    .forEach((button) => {

      button.addEventListener(
        "click",
        () => {

          openDetailsModal(
            awsDetailsModal
          );

        }
      );

    });


  /* =======================================================
     LINKEDIN VIEW MORE
     ======================================================= */

  const linkedinDetailsModal =
    document.getElementById(
      "linkedinDetailsModal"
    );


  document
    .querySelectorAll(
      '[data-certificate-details="linkedin-generative-ai"]'
    )
    .forEach((button) => {

      button.addEventListener(
        "click",
        () => {

          openDetailsModal(
            linkedinDetailsModal
          );

        }
      );

    });


  /* =======================================================
     OPEN DETAILS MODAL
     ======================================================= */

  function openDetailsModal(modal) {

    if (!modal) {
      return;
    }


    modal.classList.add("active");

    modal.setAttribute(
      "aria-hidden",
      "false"
    );

    document.body.classList.add(
      "certificate-modal-open"
    );

  }


  /* =======================================================
     CLOSE AWS DETAILS
     ======================================================= */

  document
    .querySelectorAll("[data-close-details]")
    .forEach((button) => {

      button.addEventListener(
        "click",
        () => {

          closeDetailsModal(
            awsDetailsModal
          );

        }
      );

    });


  /* =======================================================
     CLOSE LINKEDIN DETAILS
     ======================================================= */

  document
    .querySelectorAll(
      "[data-close-linkedin-details]"
    )
    .forEach((button) => {

      button.addEventListener(
        "click",
        () => {

          closeDetailsModal(
            linkedinDetailsModal
          );

        }
      );

    });


  /* =======================================================
     CLOSE DETAILS MODAL
     ======================================================= */

  function closeDetailsModal(modal) {

    if (!modal) {
      return;
    }


    modal.classList.remove(
      "active"
    );

    modal.setAttribute(
      "aria-hidden",
      "true"
    );


    /*
     * Only remove scrolling lock if
     * another certificate modal isn't open.
     */

    const anotherModalIsOpen =
      document.querySelector(
        ".certificate-modal.active, " +
        ".certificate-details-modal.active"
      );

    if (!anotherModalIsOpen) {

      document.body.classList.remove(
        "certificate-modal-open"
      );

    }

  }


  /* =======================================================
     ESC KEY
     ======================================================= */

  document.addEventListener(
    "keydown",
    (event) => {

      if (event.key !== "Escape") {
        return;
      }


      /*
       * Close PDF viewer
       */

      if (
        certificateModal &&
        certificateModal.classList.contains(
          "active"
        )
      ) {

        closeCertificate();

        return;

      }


      /*
       * Close AWS details
       */

      if (
        awsDetailsModal &&
        awsDetailsModal.classList.contains(
          "active"
        )
      ) {

        closeDetailsModal(
          awsDetailsModal
        );

        return;

      }


      /*
       * Close LinkedIn details
       */

      if (
        linkedinDetailsModal &&
        linkedinDetailsModal.classList.contains(
          "active"
        )
      ) {

        closeDetailsModal(
          linkedinDetailsModal
        );

      }

    }
  );


});