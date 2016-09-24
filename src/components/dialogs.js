export class Dialogs {
    title = 'Dialogs';

    showDialog(dialog) {
        dialog.showModal();
    }

    closeDialog(dialog) {
        dialog.close();
    }
}
