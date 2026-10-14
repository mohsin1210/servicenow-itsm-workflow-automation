// Reference implementation: onSubmit Client Script
// Verify actual state choice value and resolution field name.
function onSubmit() {
    var resolvedState = 'resolved';
    if (g_form.getValue('state') !== resolvedState) return true;

    if (!g_form.getValue('resolution_notes').trim()) {
        g_form.addErrorMessage('Enter resolution notes before resolving this request.');
        return false;
    }
    return true;
}
