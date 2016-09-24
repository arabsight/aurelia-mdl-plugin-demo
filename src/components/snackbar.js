export class Snackbar {
    title = 'Snackbar';
    counter = 0;

    showSnackbar(snackbar) {
        let data = {
            message: 'Hello World.',
            timeout: 2000,
            actionHandler: () => alert('Handler executed'),
            actionText: 'Undo'
        };

        snackbar.MaterialSnackbar.showSnackbar(data);
    }

    showToast(toast) {
        let data = {message: 'Example Message # ' + ++this.counter};
        toast.MaterialSnackbar.showSnackbar(data);
    }
}
