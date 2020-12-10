import React from "react";
import "../scss/_cotact.scss";

export default function modal() {
  return (
    <>

      <div
        class="modal"
        tabindex="-1"
        role="dialog"
        style={{display: 'block'}}
      >
        <div class="modal-dialog modal-dialog-centered" role="document">
          <div class="modal-content">
            <div class="modal-header">
              <button
                type="button"
                class="close"
                data-dismiss="modal"
                aria-label="Close"
              ></button>
            </div>
            <div class="modal-body">Wiadomość wysłana pomyślnie</div>
            <div class="modal-footer">
              <button
                type="button"
                class="btn btn-secondary"
                data-dismiss="modal"
              >
                Zamknij
              </button>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
