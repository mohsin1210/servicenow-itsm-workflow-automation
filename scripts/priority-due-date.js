// Reference implementation: Before Insert/Update Business Rule
// Table: your custom IT Support Request table
// Condition: priority changes OR record is being inserted
(function executeRule(current, previous) {
    var hoursByPriority = {
        '1': 4,
        '2': 8,
        '3': 24,
        '4': 48,
        '5': 72
    };
    var priority = current.getValue('priority');
    var hours = hoursByPriority[priority];
    if (!hours) return;

    var due = new GlideDateTime();
    due.addSeconds(hours * 60 * 60);
    current.setValue('due_date', due.getValue());
})(current, previous);
