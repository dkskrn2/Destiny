(function () {
  const popup = document.querySelector("[data-popup-id]");

  if (!popup) {
    return;
  }

  const popupId = popup.dataset.popupId;
  const storageKey = `myeongrigyeol-popup-${popupId}`;
  const now = new Date();
  const todayKey = [
    now.getFullYear(),
    String(now.getMonth() + 1).padStart(2, "0"),
    String(now.getDate()).padStart(2, "0"),
  ].join("-");
  const closeButton = popup.querySelector("[data-popup-close]");
  const hideTodayButton = popup.querySelector("[data-popup-hide-today]");

  try {
    if (localStorage.getItem(storageKey) === todayKey) {
      return;
    }
  } catch (error) {
    // If storage is blocked, the popup still works with close-only behavior.
  }

  popup.hidden = false;

  const closePopup = () => {
    popup.hidden = true;
  };

  closeButton?.addEventListener("click", closePopup);

  hideTodayButton?.addEventListener("click", () => {
    try {
      localStorage.setItem(storageKey, todayKey);
    } catch (error) {
      // Ignore storage failures and close the popup for the current page view.
    }

    closePopup();
  });
})();
