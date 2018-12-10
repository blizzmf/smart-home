export const TOGGLE_CONFIRMATION_MODAL_OPEN = 'TOGGLE_CONFIRMATION_MODAL_OPEN';

/**
 * Toggles Confirmation Modal.
 */
export const toggleConfirmationModalOpen = () => ({
  type: TOGGLE_CONFIRMATION_MODAL_OPEN,
});

export const OPEN_CONFIRMATION_MODAL = 'OPEN_CONFIRMATION_MODAL';

/**
 * Opens Confirmation Modal.
 * @param {String} title - Confirmation Modal Title
 * @param {*} okHandler - Handler of Ok button
 * @param {*} okButtonName - Ok button Name
 */
export const openConfirmationModal = (title, okHandler, okButtonName, cancelHandler, cancelButtonName) => ({
  type: OPEN_CONFIRMATION_MODAL,
  title,
  okHandler,
  okButtonName,
  cancelHandler,
  cancelButtonName,
});
