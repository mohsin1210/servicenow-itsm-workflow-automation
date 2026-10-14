// Reference implementation: Before Update Business Rule
// Replace 'resolution_notes' with your actual field name.
(function executeRule(current, previous) {
    var resolvedState = 'resolved'; // Verify the actual choice VALUE in your table.
    if (current.getValue('state') !== resolvedState) return;
    if (!current.state.changes()) return;

    if (gs.nil(current.getValue('resolution_notes'))) {
        gs.addErrorMessage('Resolution notes are required before resolving a request.');
        current.setAbortAction(true);
    }
})(current, previous);
