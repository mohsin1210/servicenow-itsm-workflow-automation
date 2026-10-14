// Reference implementation: Before Update Business Rule
// Replace 'resolved_at' and the state value if your table uses different values.
(function executeRule(current, previous) {
    var resolvedState = 'resolved';
    if (current.state.changesTo(resolvedState)) {
        current.setValue('resolved_at', new GlideDateTime().getValue());
    }
})(current, previous);
